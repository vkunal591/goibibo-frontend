import axios from "axios";
import { setupInterceptors } from "./interceptors";
import { appConfig } from "@/config/appConfig";

const axiosClient = axios.create({
  baseURL: appConfig.apiBaseUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

setupInterceptors(axiosClient);

export default axiosClient;
