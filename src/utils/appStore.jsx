import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import animeReducer from "./animeSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    anime: animeReducer,
    gpt: gptReducer,
  },
});

export default appStore;
