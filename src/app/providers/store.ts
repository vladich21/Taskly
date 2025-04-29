import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "@entities/Project/model/projectSlice";
import groupReducer from "@entities/Group/model/groupSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    group: groupReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});

// Типы для удобства
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Кастомные хуки
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
