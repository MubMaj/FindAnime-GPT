import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    topAnime: null,
    recommendAnime: null,
    schedulesAnime: null,
  },
  reducers: {
    addTopAnime: (state, action) => {
      state.topAnime = action.payload;
    },
    addRecommendAnime: (state, action) => {
      state.recommendAnime = action.payload;
    },
    addSchedulesAnime: (state, action) => {
      state.schedulesAnime = action.payload;
    },
  },
});

export const { addTopAnime, addRecommendAnime, addSchedulesAnime } = animeSlice.actions;

export default animeSlice.reducer;
