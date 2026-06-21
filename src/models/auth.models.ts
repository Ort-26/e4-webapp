export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: AuthUser;
  accessToken: string;
}

export interface AuthUser {
  userId: number;
  userName: string;
  userLastname: string;
  email: string;
  roleId: number;
  permissions: number[];
}
