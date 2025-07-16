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

    // First get the user data to get the organization_id
    const userResponse = await fetch('http://127.0.0.1:8000/api/me/', {
      headers,
    });

    if (!userResponse.ok) {
      if (userResponse.status === 401) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      throw new Error(`Failed to fetch user data: ${userResponse.statusText}`);
    }

    const userData = await userResponse.json();
    
    // Now fetch the organization data using the organization_id
    const orgResponse = await fetch(`http://127.0.0.1:8000/api/organizations/${userData.organization_id}/`, {
      headers,
    });

    if (!orgResponse.ok) {
      if (orgResponse.status === 401) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      throw new Error(`Failed to fetch organization data: ${orgResponse.statusText}`);
    }

    // Return the organization data
    const orgData = await orgResponse.json();
    return NextResponse.json(orgData);
  } catch (error) {
    console.error('Error fetching organization data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 