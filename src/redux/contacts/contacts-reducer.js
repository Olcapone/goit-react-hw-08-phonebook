import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
//import actions from "./contacts-actions";
//import { fetchContact } from "./contacts-operations";

const entities = createReducer([], {
  //   [fetchContact.fulfilled]: (_, { payload }) => payload,
  //   [actions.addContactSuccess]: (state, { payload }) =>
  //     state.find(
  //       (contact) =>
  //         contact.name === payload.name || contact.number === payload.number
  //     )
  //       ? state
  //       : [...state, payload],
  //   [actions.deleteContactSuccess]: (state, { payload }) =>
  //     state.filter(({ id }) => id !== payload),
});

// const filter = createReducer("", {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContact.pending]: () => true,
//   [fetchContact.fulfilled]: () => false,
//   [fetchContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContact.rejected]: (_, { payload }) => payload,
//   [fetchContact.pending]: () => null,
// });

export default combineReducers({
  //filter,
  entities,
  //isLoading,
  //error,
});
