import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "@entities/Project/model/projectSlice";
import groupReducer from "@entities/Group/model/groupSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    group: groupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
