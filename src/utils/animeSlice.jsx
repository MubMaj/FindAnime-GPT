import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    topAnime: null,
  },
  reducers: {
    addTopAnime: (state, action) => {
      state.topAnime = action.payload;
    },
  },
});

export const { addTopAnime } = animeSlice.actions;

export default animeSlice.reducer;
