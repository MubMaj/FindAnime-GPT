import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
    animeNames: null,
    animeResults: null,
  },
  reducers: {
    toggleGpt: (state) => {
      state.showGpt = !state.showGpt;
    },
    addGptAnimeResult: (state, action) => {
      const {animeNames, animeResults} = action.payload;
      state.animeNames = animeNames;
      state.animeResults = animeResults;
    },
  },
});

export const { toggleGpt, addGptAnimeResult } = gptSlice.actions;

export default gptSlice.reducer;
