import { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { axiosClient } from './axios-client';

let isRefreshing = false;

let failedQueue: Array<{resolve: () => void; reject: (error: unknown) => void;}> = [];

const processQueue = (error: unknown = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });

  failedQueue = [];
};

const isAuthEndpoint = (url?: string) => {
  if (!url) return false;
  return (
    url.includes('/auth/login') 
      || url.includes('/auth/refresh') 
      || url.includes('/auth/logout')
      || url.includes('/auth/me')
  );
};

export const setupAxiosInterceptors = () => {
  axiosClient.interceptors.response.use((response) => response, async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

      if (!error.response || !originalRequest) {
        return Promise.reject(error);
      }

      if (error.response.status !== 401 || originalRequest._retry || isAuthEndpoint(originalRequest.url)) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: () => {
              resolve(axiosClient(originalRequest));
            },
            reject,
          });
        });
      }

      isRefreshing = true;

      try {
        await axiosClient.post('/auth/refresh');

        processQueue();

        return axiosClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);

        window.dispatchEvent(new Event('auth:session-expired'));

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
  );
};