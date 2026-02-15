import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "@features/AutoPlanning/model/tasksSlice";
import projectReducer from "@entities/Project/model/projectSlice";
import groupReducer from "@entities/Group/model/groupSlice"; // Из sidebar
// Другие импорты

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    project: projectReducer,
    group: groupReducer, // Добавляем из sidebar
    // Остальные редьюсеры
  },
});

// Типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
