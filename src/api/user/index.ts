import { ApiResponse, AuthResponse } from "@/interface/global";
import { User } from "@/interface/user";
import axios, { catchAxios } from "@/lib/axios";
import { AxiosResponse } from "axios";
import api from "..";

export type userDTO = Omit<User, "id" | "token">;

export async function login({
  mail,
  password,
}: {
  mail: string;
  password: string;
}): Promise<AuthResponse | undefined> {
  try {
    const response: AxiosResponse<ApiResponse<AuthResponse>> = await axios.post(
      `Auth/login`,
      { mail, password }
    );

    if (!response.data.data) throw new Error(response.data.message);
    return response.data.data;
  } catch (error) {
    catchAxios(error);
  }
}

export async function refreshToken(refresh: string) {
  try {
    const response: AxiosResponse<
      ApiResponse<{
        mail: string;
        userRole: number;
        token: string;
        refreshToken: string;
      }>
    > = await axios.post(`Auth/Refresh`, refresh);

    if (!response.data.data) throw new Error(response.data.message);
    return response.data.data;
  } catch (error) {
    catchAxios(error);
  }
}

export async function forgotPassword(email: string) {
  try {
    const response: AxiosResponse = await axios.post("/Auth/forgot-password", {
      email,
    });

    if (response.status !== 200) {
      throw new Error(response.data ?? "an error occurred");
    }

    return response;
  } catch (error) {
    catchAxios(error);
  }
}

export async function verifyOtp({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) {
  try {
    const response: AxiosResponse = await axios.post("/Auth/verify-otp", {
      email,
      otp,
    });

    if (response.status !== 200) {
      throw new Error(response.data ?? "an error occurred");
    }

    return response;
  } catch (error) {
    catchAxios(error);
  }
}

export async function resetPassword({
  email,
  newPassword,
}: {
  email: string;
  newPassword: string;
}) {
  try {
    const response = await axios.post("/Auth/reset-password", {
      email,
      newPassword,
    });

    if (response.status !== 200) {
      throw new Error(response.data ?? "an error occurred");
    }

    return response;
  } catch (error) {
    catchAxios(error);
  }
}

export const getOne = async (
  id: string | number
): Promise<User | undefined> => {
  try {
    const response: AxiosResponse<ApiResponse<User>> = await axios.get(
      `${api.user.default}/${id}`
    );

    if (!response.data.success)
      throw new Error(response.data.message || "An unknown error occurred");

    return response.data.data;
  } catch (error) {
    catchAxios(error);
  }
};

export const getByEmail = async (email: string): Promise<User | undefined> => {
  try {
    const response: AxiosResponse<ApiResponse<User>> = await axios.get(
      `${api.user.email}`,
      {
        params: {
          email,
        },
      }
    );

    if (!response.data.success)
      throw new Error(response.data.message || "An unknown error occurred");

    return response.data.data;
  } catch (error) {
    catchAxios(error);
  }
};

export const getList = async ({
  search,
  limit,
  page,
}: {
  search?: string;
  limit?: number;
  page?: number;
}): Promise<{ user: User[]; count: number } | null> => {
  try {
    const response: AxiosResponse<ApiResponse<User[]>> = await axios.get(
      api.user.default,
      {
        params: { ...{ search, limit, page } },
      }
    );

    if (!response.data.success) throw new Error("An error occurred");

    return {
      user: response.data.data,
      count: response.data.count || 0,
    };
  } catch (error) {
    catchAxios(error);
    return null;
  }
};

export const create = async (newUser: userDTO) => {
  try {
    const response: AxiosResponse<ApiResponse<User>> = await axios.post(
      "Auth/register",
      {
        ...newUser,
      }
    );

    if (!response.data.success)
      throw new Error(response.data.message || "An unknown error occurred");

    return response.data.data;
  } catch (error) {
    catchAxios(error);
    return;
  }
};

export const update = async (id: string, newUser: userDTO) => {
  try {
    const response: AxiosResponse<ApiResponse<User>> = await axios.put(
      `${api.user.default}/${id}`,
      {
        ...newUser,
      }
    );

    if (!response.data.success)
      throw new Error(response.data.message || "An unknown error occurred");

    return response.data.data;
  } catch (error) {
    catchAxios(error);
    return;
  }
};

export const auth = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User | undefined> => {
  try {
    const response: AxiosResponse<ApiResponse<User>> = await axios.post(
      `${api.user.auth}`,
      { email, password }
    );

    if (!response.data.success)
      throw new Error(response.data.message || "An unknown error occurred");

    return response.data.data;
  } catch (error) {
    catchAxios(error);
    return;
  }
};

export const deleteUser = async (id: string | number) => {
  try {
    const response: AxiosResponse<ApiResponse<string>> = await axios.delete(
      `${api.user.default}/${id}`
    );

    if (!response.data.success)
      throw new Error(response.data.message || "An unknown error occurred");

    return response.data.data;
  } catch (error) {
    catchAxios(error);
    return;
  }
};
