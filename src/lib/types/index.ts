export * from './auth';

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

export type UserResponse = {
  data?: User;
  error?: string;
};

export interface PageMetadata {
  title: string;
  description?: string;
  parent?: {
    title: string;
    href: string;
  };
}

export interface PageMetadataContextType {
  metadata: PageMetadata;
  setMetadata: (metadata: PageMetadata) => void;
}

export interface AnimationContextType {
  isAnimationEnabled: boolean;
  toggleAnimations: (enabled?: boolean) => void;
}