import { UserRole } from "./user";

export interface ResponseType {
  success: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  message: string;
}

export interface Meta {
  total?: number;
  page?: number;
  pageSize?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  count?: number;
  data: T;
  meta?: Meta;
}

export interface ApiParameters {
  search?: string;
  limit?: number;
  page?: number;
}

export interface SelectedType {
  value: string;
  label: string;
}

export interface FilterType {
  id: string;
  name: string;
  child?: FilterType[];
  type?: string;
}

export interface AuthResponse {
  name: string;
  firstName: string;
  mail: string;
  userRole: UserRole;
  token: string;
  refreshToken: string;
}

export type snackbarState = "info" | "warning" | "error" | "success";
