import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./storyReducer";

export const store = configureStore({
  reducer: { storyReducer: storyReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
