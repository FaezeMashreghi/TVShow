import { apiService } from "../apiService";
import {
  GetTVShowsByQueryServiceResponse,
  GetShowDetailsByIdServiceResponse,
  GetAllTVShowsServiceResponse,
} from "./showService.type";

export const getAllTVShowsService =
  async (): Promise<GetAllTVShowsServiceResponse> => {
    return apiService<GetAllTVShowsServiceResponse>({
      method: "GET",
      url: "/shows",
    });
  };
export const getTVShowsByQueryService = async (
  query?: string,
): Promise<GetTVShowsByQueryServiceResponse> => {
  return apiService<GetTVShowsByQueryServiceResponse>({
    method: "GET",
    url: "/search/shows",
    params: { q: query },
  });
};

export const getShowDetailsByIdService = async (
  id: number,
): Promise<GetShowDetailsByIdServiceResponse> => {
  return apiService<GetShowDetailsByIdServiceResponse>({
    method: "GET",
    url: `/shows/${id}`,
  });
};
