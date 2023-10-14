import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./reducers/themeReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from "./storage/storage";

const persistConfig = {
  key: "layoutTheme",
  storage:storage,
};
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    layoutTheme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
export const { dispatch, getState } = store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
