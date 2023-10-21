import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CommonReducer from "@context/common/commonSlice";
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
  PersistConfig,
} from "redux-persist";
import storage from "./storage/storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

const commonPersistConfig: PersistConfig<any> = {
  key: "common",
  version: 1,
  storage,
  stateReconciler: hardSet,
};

const persistedCommon = persistReducer(commonPersistConfig, CommonReducer);

const combinedReducer = combineReducers({
  common: persistedCommon,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "auth/logout") {
    state = undefined;
    localStorage.removeItem("token");
    localStorage.removeItem("phone");
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  // devTools: !import.meta.env.PROD,
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
