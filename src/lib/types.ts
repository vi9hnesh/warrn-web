export interface Team {
  id: string;
  name: string;
  organization_id: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  is_active: boolean;
  date_joined: string;
  organization_id: string;
  sidebar_collapsed: boolean;
  theme: string;
  teams: Team[];
}

export interface Invitation {
  id: string;
  username: string;
  role: string;
  expires_at: string;
  created_at: string;
  updated_at: string;
}

export type UserResponse = {
  data?: User;
  error?: string;
}; 