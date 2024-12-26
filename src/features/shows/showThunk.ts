import { createAsyncThunk } from "@reduxjs/toolkit";
import { Show } from "../../shared/types/shows";
import {
  getAllTVShowsService,
  getTVShowsByQueryService,
} from "../../api/services/showService";

export const getAllShowsThunk = createAsyncThunk(
  "shows/getAllShow",
  async (_, { rejectWithValue }) => {
    try {
      const results = await getAllTVShowsService();
      const showsByGenre: Record<string, Show[]> = {};
      //separate by genre
      results.forEach((show: Show) => {
        show.genres.forEach((genre) => {
          if (!showsByGenre[genre]) {
            showsByGenre[genre] = [];
          }
          showsByGenre[genre].push(show);
        });
      });
      //sort by rating
      Object.keys(showsByGenre).forEach((genre) => {
        showsByGenre[genre] = showsByGenre[genre]
          .filter((show) => show.rating?.average)
          .sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0))
          .slice(0, 8);
      });

      return showsByGenre;
    } catch (error) {
      return rejectWithValue("Failed to fetch shows by genre");
    }
  },
);
export const getShowsByQueryThunk = createAsyncThunk<
  Show[],
  string,
  { rejectValue: string }
>("shows/getByQuery", async (query: string, { rejectWithValue }) => {
  try {
    const response = await getTVShowsByQueryService(query);
    return response.map((result) => result.show);
  } catch (error) {
    return rejectWithValue("Failed to fetch shows");
  }
});
