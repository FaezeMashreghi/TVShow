import { Show } from "../../shared/types/shows";

export type GetTVShowsByQueryServiceResponse = Array<{
  show: Show;
  score: number;
}>;
export type GetAllTVShowsServiceResponse = Show[];
export type GetShowDetailsByIdServiceResponse = Show;
