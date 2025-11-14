import type { AxiosInstance } from "axios";
import { appConfig } from "@/config/appConfig";
import { showToast } from "@/app/components/common/ToastProvider";

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) =>
    error ? prom.reject(error) : prom.resolve(token)
  );
  failedQueue = [];
};

export const setupInterceptors = (axiosClient: AxiosInstance) => {
  axiosClient.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(appConfig.tokenKeys.access);
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });

  axiosClient.interceptors.response.use(
    (res) => res,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return axiosClient(originalRequest);
            })
            .catch(Promise.reject);
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const refreshToken = localStorage.getItem(
            appConfig.tokenKeys.refresh
          );
          const { data } = await axiosClient.post("/api/auth/refresh", {
            refreshToken,
          });

          localStorage.setItem(appConfig.tokenKeys.access, data.accessToken);
          processQueue(null, data.accessToken);
          return axiosClient(originalRequest);
        } catch (err) {
          processQueue(err, null);
          showToast({
            type: "error",
            message: "Session expired. Please login again.",
          });
          localStorage.clear();
          window.location.href = "/api/auth/login";
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      const message = error.response?.data?.message || "Request failed";
      // toast.error(message);
      return Promise.reject(error);
    }
  );
};
