import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageReducer";
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
import storage from "./storage/storage";

const persistThemeConfig = {
  key: "layoutTheme",
  storage:storage,
};
const persistLanguageConfig = {
  key: "language",
  storage:storage,
};
const persistedThemeReducer = persistReducer(persistThemeConfig, themeReducer);
const persistedLanguageReducer = persistReducer(persistLanguageConfig, languageReducer);
export const store = configureStore({
  reducer: {
    layoutTheme: persistedThemeReducer,
    language:persistedLanguageReducer
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
