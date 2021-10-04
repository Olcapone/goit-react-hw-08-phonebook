import { configureStore } from "@reduxjs/toolkit";
import contactReducers from "./contacts/contacts-reducer";
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
import logger from "redux-logger";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const contactPersistConfig = {
  key: "contacts",
  storage,
  //   blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, contactReducers),
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export default { persistor, store };
