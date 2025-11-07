import { showToast } from '@/app/components/common/ToastProvider';
import axiosClient from './axiosClient';

let activeRequests = 0;

const startLoading = () => {
  activeRequests++;
  console.log('🔄 Loading started...');
};

const stopLoading = () => {
  activeRequests = Math.max(0, activeRequests - 1);
  if (activeRequests === 0) console.log('✅ Loading finished.');
};

const handleError = (error: any, showErrorToast = true) => {
  const message = error?.response?.data?.message || error?.message || 'Something went wrong';
  console.log(error?.message,message,'dfdfdfdfdfd')
  if (showErrorToast) showToast({ type: 'error', message });
  console.error('❌ API Error:', message, error);
};

interface RequestOptions {
  params?: any;
  data?: any;
  successMsg?: string;
  showSuccessToast?: boolean; // default true
  showErrorToast?: boolean;   // default true
  timeout?: number;           // in milliseconds
}

export const apiService = {
  get: async <T>(url: string, options: RequestOptions = {}) => {
    const { params, successMsg, showSuccessToast = true, showErrorToast = true, timeout } = options;
    startLoading();
    try {
      const res = await axiosClient.get<T>(url, { params, timeout });
      if (successMsg && showSuccessToast) showToast({ type: 'success', message: successMsg });
      return res.data;
    } catch (error: any) {
      handleError(error, showErrorToast);
      throw error;
    } finally {
      stopLoading();
    }
  },

  post: async <T>(url: string, options: RequestOptions = {}) => {
    const { data, successMsg, showSuccessToast = true, showErrorToast = true, timeout } = options;
    startLoading();
    try {
      const res = await axiosClient.post<T>(url, data, { timeout });
      if (successMsg && showSuccessToast) showToast({ type: 'success', message: successMsg });
      return res.data;
    } catch (error: any) {
      handleError(error, showErrorToast);
      throw error;
    } finally {
      stopLoading();
    }
  },

  put: async <T>(url: string, options: RequestOptions = {}) => {
    const { data, successMsg, showSuccessToast = true, showErrorToast = true, timeout } = options;
    startLoading();
    try {
      const res = await axiosClient.put<T>(url, data, { timeout });
      if (successMsg && showSuccessToast) showToast({ type: 'success', message: successMsg });
      return res.data;
    } catch (error: any) {
      handleError(error, showErrorToast);
      throw error;
    } finally {
      stopLoading();
    }
  },

  delete: async <T>(url: string, options: RequestOptions = {}) => {
    const { successMsg, showSuccessToast = true, showErrorToast = true, timeout } = options;
    startLoading();
    try {
      const res = await axiosClient.delete<T>(url, { timeout });
      if (successMsg && showSuccessToast) showToast({ type: 'success', message: successMsg });
      return res.data;
    } catch (error: any) {
      handleError(error, showErrorToast);
      throw error;
    } finally {
      stopLoading();
    }
  },
};
