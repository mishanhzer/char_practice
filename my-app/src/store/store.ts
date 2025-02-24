import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import message from '../components/MessageList/messageListSlice.ts';

const reducers = combineReducers({
  message,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Экспортируем типы для useSelector и useDispatch из хранилища store
export type RootState = ReturnType<typeof store.getState> // ReturnType<Type> - извлекает тип возвращаемого значения функции Type
export type AppDispatch = typeof store.dispatch

export default store;
