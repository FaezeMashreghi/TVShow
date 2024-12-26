import axiosInstance from "./axiosConfig";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export const apiService = async <T>({
  method,
  url,
  data,
  params,
}: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
