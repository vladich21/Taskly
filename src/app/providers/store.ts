import { configureStore } from "@reduxjs/toolkit";
import { groupApi } from "@entities/Group/api/groupApi";

export const store = configureStore({
  reducer: {
    [groupApi.reducerPath]: groupApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(groupApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
