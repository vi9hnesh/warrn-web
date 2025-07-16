import { useState, useEffect } from 'react';
import { User } from '@/lib/types';
import { apiGet } from '@/lib/api';

const USER_STORAGE_KEY = 'user_data';
const USER_TIMESTAMP_KEY = 'user_data_timestamp';
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadFromCache = (): User | null => {
    try {
      const timestamp = localStorage.getItem(USER_TIMESTAMP_KEY);
      const cachedData = localStorage.getItem(USER_STORAGE_KEY);

      if (!timestamp || !cachedData) return null;

      // Check if cache is still valid
      if (Date.now() - Number(timestamp) > CACHE_DURATION) {
        localStorage.removeItem(USER_STORAGE_KEY);
        localStorage.removeItem(USER_TIMESTAMP_KEY);
        return null;
      }

      return JSON.parse(cachedData);
    } catch (err) {
      console.error('Error reading from cache:', err);
      return null;
    }
  };

  const updateUserCache = (userData: User) => {
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
      localStorage.setItem(USER_TIMESTAMP_KEY, Date.now().toString());
    } catch (err) {
      console.error('Error updating cache:', err);
    }
  };

  const fetchUser = async (force: boolean = false) => {
    if (!force) {
      const cachedUser = loadFromCache();
      if (cachedUser) {
        setUser(cachedUser);
        setLoading(false);
        return;
      }
    }

    setLoading(true);
    setError(null);

    try {
      const data = await apiGet<User>('http://127.0.0.1:8000/api/me');
      setUser(data);
      updateUserCache(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch user data'));
      const cachedUser = loadFromCache();
      if (cachedUser) {
        setUser(cachedUser);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    loading,
    error,
    refetch: () => fetchUser(true),
    updateUser: (userData: User) => {
      setUser(userData);
      updateUserCache(userData);
    }
  };
} 