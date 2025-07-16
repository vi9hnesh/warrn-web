import { useEffect, useState } from 'react';
import { apiGet } from '@/lib/api';
import { API_BASE_URL } from '@/lib/constants';

interface User {
  id: string;
  email: string;
  name: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await apiGet<User>(`${API_BASE_URL}/me`);
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: !!user
  };
} 