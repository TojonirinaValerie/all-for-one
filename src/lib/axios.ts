import { refreshToken } from "@/api/user";
import Axios, { isAxiosError } from "axios";
import { configure } from "axios-hooks";
import cookies from "js-cookie";
import { signOut } from "next-auth/react";

// todo: add other configuration
const axios = Axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL || "https://jsonplaceholder.typicode.com/",
  // timeout: 10000,
});

export const axiosWithCredential = Axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL || "https://jsonplaceholder.typicode.com/",

  // todo: activate with credentials
  withCredentials: true,
});

axiosWithCredential.interceptors.request.use(
  (config) => {
    const token = cookies.get("token");
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("object");
    Promise.reject(error);
  }
);

axiosWithCredential.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const refresh = cookies.get("refresh");

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await refreshToken(refresh ?? "");
        if (response) {
          cookies.set("refresh", response.refreshToken, {
            secure: true,
            sameSite: "Strict",
          });
          cookies.set("toke", response.token, {
            secure: true,
            sameSite: "Strict",
          });
          originalRequest.headers.Authorization = `bearer ${response.token}`;
          return axiosWithCredential(originalRequest);
        }
      } catch (error) {
        console.log("error :>> ", error);
        signOut();
      }
    }
  }
);

export const source = Axios.CancelToken.source();
export const cancelRequest = () => source.cancel("Operation cancelled by user");

configure({ axios, defaultOptions: { manual: true } });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const catchAxios = (error: any): any => {
  if (isAxiosError(error)) {
    console.error("axios error :>> ", error);
    throw new Error(error.message);
  } else {
    console.error("general error  :>> ", error);
    throw new Error("An unexpected error occurred");
  }
};

export default axios;
