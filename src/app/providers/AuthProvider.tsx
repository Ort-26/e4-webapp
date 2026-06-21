import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import type { AuthUser } from '../../models/auth.models';
import { authService } from '../../core/services/AuthService';
import { AuthContext } from '../../core/auth/authContext';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Controla qué request de sesión sigue siendo válida.
   * Si una request vieja de /auth/me responde después del login,
   * ya no podrá hacer setUser(null).
   */
  const sessionRequestIdRef = useRef(0);

  const normalizeUser = (payload: AuthUser | { user: AuthUser }): AuthUser => {
    if ('user' in payload) {
      return payload.user;
    }

    return payload;
  };

  const reloadSession = useCallback(async () => {
    const requestId = ++sessionRequestIdRef.current;

    try {
      const currentUser = await authService.me();
      const normalizedUser = normalizeUser(currentUser);

      if (requestId === sessionRequestIdRef.current) {
        setUser(normalizedUser);
      }
    } catch {
      if (requestId === sessionRequestIdRef.current) {
        setUser(null);
      }
    }
  }, []);

  useEffect(() => {
    const loadInitialSession = async () => {
      try {
        setIsLoading(true);
        await reloadSession();
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialSession();

    const handleSessionExpired = () => {
      sessionRequestIdRef.current += 1;
      setUser(null);
      window.location.href = '/login';
    };

    window.addEventListener('auth:session-expired', handleSessionExpired);

    return () => {
      window.removeEventListener('auth:session-expired', handleSessionExpired);
    };
  }, [reloadSession]);

  const login = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);

      /**
       * Invalida cualquier /auth/me anterior que siga pendiente.
       */
      sessionRequestIdRef.current += 1;

      const loginData = await authService.login({ email, password });
      const authenticatedUser = normalizeUser(loginData);

      setUser(authenticatedUser);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      setIsLoading(true);

      /**
       * Invalida cualquier request pendiente.
       */
      sessionRequestIdRef.current += 1;

      await authService.logout();
    } finally {
      setUser(null);
      setIsLoading(false);
      window.location.href = '/login';
    }
  }, []);

  const hasPermission = useCallback(
    (permissionId: number) => {
      return user?.permissions?.includes(permissionId) ?? false;
    },
    [user]
  );

  const hasAnyPermission = useCallback(
    (permissionIds: number[]) => {
      return permissionIds.some((permissionId) => hasPermission(permissionId));
    },
    [hasPermission]
  );

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      logout,
      reloadSession,
      hasPermission,
      hasAnyPermission,
    }),
    [
      user,
      isLoading,
      login,
      logout,
      reloadSession,
      hasPermission,
      hasAnyPermission,
    ]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};