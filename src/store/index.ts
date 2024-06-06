import { configureStore } from "@reduxjs/toolkit";
import repositoriesReducer from "./ducks/repositories";

const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
