import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@app/providers/store";

// Используем вместо обычного useDispatch везде в проекте
export const useAppDispatch: () => AppDispatch = useDispatch;
// Используем вместо обычного useSelector везде в проекте
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
