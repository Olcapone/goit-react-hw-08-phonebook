import { createSlice } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const initialState = {
  contacts: [
    { name: null, number: null}
  ],
  filter: '',
  isLoading: false,
  error: null
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchContactRequest, (state, _) => {
        state.isLoading = true
        })
      .addCase(actions.fetchContactSuccess,
      (state, { payload }) => {
        state.isLoading = false
        state.contacts = payload;
      })
      .addCase(actions.addContactSuccess,
        (state, { payload }) => {

          state.contacts = state?.contacts.find((contact) =>
            contact.name === payload?.name || contact.number === payload?.number
          )
            ? state.contacts
            : [...state.contacts, payload]
        })
      .addCase(actions.deleteContactSuccess,
        (state, { payload }) =>
          state.contacts = state?.contacts.filter(({ id }) => id !== payload)
        )
      .addCase(actions.changeFilter,
        (state, { payload }) => {
          state.filter = payload
        })
      .addCase(actions.fetchContactError, (state, _) => {
        state.isLoading = false
        })
  }
})

export default contactSlice.reducer;