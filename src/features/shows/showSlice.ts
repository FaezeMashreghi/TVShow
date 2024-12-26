import { createSlice } from "@reduxjs/toolkit";
import { getAllShowsThunk, getShowsByQueryThunk } from "./showThunk";
import { Show } from "../../shared/types/shows";

interface ShowsState {
  showsByGenre: Record<string, Show[]>;
  loading: boolean;
  error: string | null;
  searchResult: Show[];
}

const initialState: ShowsState = {
  showsByGenre: {},
  loading: false,
  error: null,
  searchResult: [],
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllShowsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllShowsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.showsByGenre = action.payload;
      })
      .addCase(getAllShowsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getShowsByQueryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getShowsByQueryThunk.fulfilled, (state, action) => {
        state.searchResult = action.payload;
        state.loading = false;
      })
      .addCase(getShowsByQueryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default showsSlice.reducer;
