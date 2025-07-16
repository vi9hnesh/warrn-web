import { NextRequest, NextResponse } from 'next/server';
import { getServerSideAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Get auth token from the cookie in the request
    const authTokens = request.cookies.get('auth_tokens')?.value;
    
    // If no tokens, middleware should have caught this
    if (!authTokens) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Use getServerSideAuth to parse tokens and create headers
    const { headers } = await getServerSideAuth(authTokens);

    // Make the API request to fetch user data
    const response = await fetch('http://127.0.0.1:8000/api/me', {
      headers,
    });

    // Handle error responses from the backend
    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }

    // Return the user data
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 