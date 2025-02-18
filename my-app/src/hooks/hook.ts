import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux' // импортируем типизацию для useSelector 
import type { RootState, AppDispatch } from '../store/store' // Импортируем типизации для хуков useSelector и useDispatch

// Экспортируем типизированные хуки 
export const useAddDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector