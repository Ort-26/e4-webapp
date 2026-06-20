import type { LoginRequest, LoginResponse } from "../../features/auth/models/auth.models";
import { axiosClient } from "../http/axios-client";
import { tokenStorage } from "../http/token-storage";

export const authService = {
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const response = await axiosClient.post('/auth/login', payload);
    const loginData = response.data.data as LoginResponse;

    tokenStorage.setTokens(loginData.accessToken, loginData.refreshToken);

    return loginData;
  },

  async me() {
    const response = await axiosClient.get('/auth/me');
    return response.data.data;
  },

  logout(): void {
    tokenStorage.clearTokens();
  },
};