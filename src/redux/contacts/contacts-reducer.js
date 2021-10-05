import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const entities = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) =>
    state.find(
      (contact) =>
        contact.name === payload.name || contact.number === payload.number
    )
      ? state
      : [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => false,
});

const error = createReducer(null, {
  [actions.fetchContactRequest]: (_, { payload }) => payload,
  [actions.fetchContactRequest]: () => null,
});

export default combineReducers({
  filter,
  entities,
  isLoading,
  error,
});
