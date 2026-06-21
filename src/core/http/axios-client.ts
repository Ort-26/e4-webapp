import axios, { type AxiosInstance } from 'axios';
import { env } from '../../config/env';
import type { ApiResponse } from '../../models/api-response.type';

export const axiosClient: AxiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const unwrapApiResponse = async <T>(request: Promise<{ data: ApiResponse<T> }>):
  Promise<T> => {
  const response = await request;
  if (!response || !response.data || !response.data.data) throw new Error('No response received from the server');
  return response.data.data;
};
