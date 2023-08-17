import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
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
import authReducer from "./auth/authSlicе";
import teachersReducer from "./teachers/teachersSlice";
import favoriteReducer from "./favorites/favoritesSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["teachers"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  teachers: teachersReducer,
  favorites: favoriteReducer,
});

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);
