import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";

/* Использовать вместо хука useDispatch, чтобы не прописывать каждый раз типы */
export const useAppDispatch = () => useDispatch<AppDispatch>();
