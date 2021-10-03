import { configureStore } from "@reduxjs/toolkit";
import contactReducers from "./contacts/contacts-reducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    contacts: contactReducers,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({}), logger],
  devTools: process.env.NODE_ENV === "development",
});

export default { store };
