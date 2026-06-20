import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../../core/auth/auth-context';
import { AuthUser } from '../../features/auth/models/auth.models';
import { authService } from '../../features/auth/services/auth.service';
import { tokenStorage } from '../../core/http/token-storage';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadSession = async () => {
    const token = tokenStorage.getAccessToken();

    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const currentUser = await authService.me();
      setUser(currentUser);
    } catch {
      tokenStorage.clearTokens();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSession();
  }, []);

  const login = async (email: string, password: string) => {
    const loginData = await authService.login({ email, password });
    setUser(loginData.user);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    window.location.href = '/login';
  };

  const hasPermission = (permissionName: string) => {
    return user?.permissions.some(
      (permission) => permission.permissionName === permissionName
    ) ?? false;
  };

  const hasAnyPermission = (permissionNames: string[]) => {
    return permissionNames.some(hasPermission);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      logout,
      hasPermission,
      hasAnyPermission,
    }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};