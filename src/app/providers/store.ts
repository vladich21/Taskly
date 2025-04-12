import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "@entities/user"; // пример подключения slice
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    // другие редюсеры
  },
  devTools: import.meta.env.MODE !== "production",
});

// Типы для удобства
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Кастомные хуки
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
