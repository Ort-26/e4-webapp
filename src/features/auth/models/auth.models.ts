export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}

export interface AuthUser {
  userId: number;
  email: string;
  fullName: string;
  roleId: number;
  roleName: string;
  permissions: Permission[];
}

export interface Permission {
  permissionId: number;
  permissionName: string;
  permissionDesc?: string;
}