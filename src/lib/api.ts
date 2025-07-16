import { AuthTokens } from './types/auth';
import { getStoredTokens, refreshToken, createAuthHeaders, removeStoredTokens } from './auth';

// Track if we're currently refreshing to prevent multiple simultaneous refreshes
let isRefreshing = false;
// Queue of callbacks to execute after token refresh
let refreshQueue: Array<(token: string) => void> = [];

// Maximum number of retry attempts for token refresh
const MAX_REFRESH_ATTEMPTS = 1;

/**
 * Process all callbacks in the refresh queue with the new token
 */
function processQueue(token: string) {
  refreshQueue.forEach(callback => callback(token));
  refreshQueue = [];
}

/**
 * Wrapped fetch function that handles authentication and token refresh
 */
export async function apiFetch(url: string, options: RequestInit = {}): Promise<Response> {
  let response: Response;
  let attempts = 0;
  
  do {
    // Get current tokens and add authorization header
    const tokens = getStoredTokens();
    const headers = createAuthHeaders(tokens);
    
    // Merge headers with any provided in options
    const mergedOptions = {
      ...options,
      headers: {
        ...headers,
        ...(options.headers || {}),
      },
    };

    response = await fetch(url, mergedOptions);
    
    // If response is unauthorized and we have a refresh token, try to refresh
    if (response.status === 401 && tokens?.refresh && attempts < MAX_REFRESH_ATTEMPTS) {
      try {
        // If we're already refreshing, wait for that to complete
        if (isRefreshing) {
          // Wait for the current refresh to complete by adding to queue
          const newToken = await new Promise<string>((resolve) => {
            refreshQueue.push(resolve);
          });
          
          // Continue with the next request attempt
          attempts++;
          continue;
        }
        
        // Start refreshing
        isRefreshing = true;
        
        // Try to refresh the token
        const newTokens = await refreshToken(tokens.refresh);
        
        // Process any queued requests
        if (newTokens.access) {
          processQueue(newTokens.access);
        }
        
        attempts++;
      } catch (error) {
        // If refresh fails, clear tokens and force login
        console.error('Token refresh failed:', error);
        removeStoredTokens();
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        break;
      } finally {
        isRefreshing = false;
      }
    } else {
      // Either we got a success response or we've exhausted our refresh attempts
      break;
    }
  } while (attempts <= MAX_REFRESH_ATTEMPTS);
  
  // If we still have a 401 after attempts, redirect to login
  if (response.status === 401) {
    removeStoredTokens();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  }
  
  return response;
}

/**
 * GET request with authentication handling
 */
export async function apiGet<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await apiFetch(url, {
    method: 'GET',
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * POST request with authentication handling
 */
export async function apiPost<T>(url: string, data: any, options: RequestInit = {}): Promise<T> {
  const response = await apiFetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    body: JSON.stringify(data),
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * PUT request with authentication handling
 */
export async function apiPut<T>(url: string, data: any, options: RequestInit = {}): Promise<T> {
  const response = await apiFetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    body: JSON.stringify(data),
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * DELETE request with authentication handling
 */
export async function apiDelete<T>(url: string, options: RequestInit = {}): Promise<T | void> {
  const response = await apiFetch(url, {
    method: 'DELETE',
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  
  // Only try to parse JSON if there's content
  if (response.status !== 204 && response.headers.get('content-length') !== '0') {
    return response.json();
  }
} 