import type { AuthUser } from '../../models/auth.models';

export interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (permissionName: number) => boolean;
  hasAnyPermission: (permissionIds: number[]) => boolean;
}