import type { AuthUser, LoginRequest, LoginResponse } from '../../models/auth.models';
import type { ApiResponse } from '../../models/api-response.type';
import { axiosClient, unwrapApiResponse } from '../http/axios-client';


export const authService = {
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const response = await unwrapApiResponse(axiosClient.post<ApiResponse<LoginResponse>>(
      '/auth/login',
      payload
    ));
    return response;
  },

  async me(): Promise<AuthUser> {
    const response = await unwrapApiResponse(axiosClient.get<ApiResponse<LoginResponse>>('/auth/me'));
    return response.user;
  },

  async refresh(): Promise<void> {
    await axiosClient.post('/auth/refresh');
  },

  async logout(): Promise<void> {
    await axiosClient.post('/auth/logout');
  },
};