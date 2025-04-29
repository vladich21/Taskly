import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "@features/AutoPlanning/model/tasksSlice";
// import { projectReducer } from "@entities/Project";
// import { groupReducer } from "@entities/";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  // Опционально: middleware и devTools настройки
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

// Типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
