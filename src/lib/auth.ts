import { AuthTokens, LoginCredentials } from './types/auth';
import Cookies from 'js-cookie';

const AUTH_TOKEN_KEY = 'auth_tokens';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const getStoredTokens = (): AuthTokens | null => {
  const tokens = Cookies.get(AUTH_TOKEN_KEY);
  return tokens ? JSON.parse(tokens) : null;
};

export const setStoredTokens = (tokens: AuthTokens) => {
  // Set cookie to expire in 7 days
  Cookies.set(AUTH_TOKEN_KEY, JSON.stringify(tokens), { expires: 7 });
};

export const removeStoredTokens = () => {
  Cookies.remove(AUTH_TOKEN_KEY);
};

export const login = async (credentials: LoginCredentials): Promise<AuthTokens> => {
  const response = await fetch(`${API_URL}/api/token/pair`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const tokens = await response.json();
  setStoredTokens(tokens);
  return tokens;
};

export const refreshToken = async (refresh: string): Promise<AuthTokens> => {
  const response = await fetch(`${API_URL}/api/token/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh }),
  });

  if (!response.ok) {
    throw new Error('Token refresh failed');
  }

  const newTokens = await response.json();
  const currentTokens = getStoredTokens();
  const updatedTokens = { ...currentTokens, ...newTokens };
  setStoredTokens(updatedTokens);
  return updatedTokens;
};

// Updated logout function to handle both client and server-side navigation
export const logout = () => {
  // Clear all auth-related cookies and storage
  removeStoredTokens();
  
  // Clear any other auth-related items from localStorage if any
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
    localStorage.removeItem('preferences');
    
    // Use a slight delay to ensure cookies are cleared before navigation
    setTimeout(() => {
      window.location.href = '/login';
    }, 100);
  }
  
  return Promise.resolve();
};

export const createAuthHeaders = (tokens?: AuthTokens | null): HeadersInit => {
  const authTokens = tokens || getStoredTokens();
  return {
    'Content-Type': 'application/json',
    ...(authTokens?.access ? { Authorization: `Bearer ${authTokens.access}` } : {}),
  };
};

// Helper function to check if token is close to expiration (within 5 minutes)
export const isTokenExpiring = (token: string): boolean => {
  try {
    const payloadBase64 = token.split('.')[1];
    const payload = JSON.parse(Buffer.from(payloadBase64, 'base64').toString());
    const expTime = payload.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();
    const timeRemaining = expTime - currentTime;
    
    // Consider token as expiring if less than 5 minutes remain
    return timeRemaining < 5 * 60 * 1000;
  } catch (error) {
    console.error('Error checking token expiration:', error);
    return false;
  }
};

// Server-side auth functions
export const getServerSideAuth = async (cookieValue?: string | null): Promise<{ headers: HeadersInit; tokens: AuthTokens | null }> => {
  try {
    if (!cookieValue) {
      return { headers: { 'Content-Type': 'application/json' }, tokens: null };
    }

    const tokens = JSON.parse(cookieValue) as AuthTokens;
    const headers = createAuthHeaders(tokens);

    return { headers, tokens };
  } catch (error) {
    console.error('Error parsing auth tokens:', error);
    return { headers: { 'Content-Type': 'application/json' }, tokens: null };
  }
};

// Server-side token refresh - returns new tokens if refresh was successful
export const refreshTokenServerSide = async (refresh: string): Promise<AuthTokens | null> => {
  try {
    const response = await fetch(`${API_URL}/api/token/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh }),
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Server-side token refresh failed:', error);
    return null;
  }
}; 