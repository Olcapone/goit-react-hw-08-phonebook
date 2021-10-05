//import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import shortid from "shortid";

import actions from "./contacts-actions";
import * as ContactsAPI from "../../Api/Api";

//=== have to refactoring with thunk

export const fetchContact = () => async (dispatch) => {
  dispatch(actions.fetchContactRequest());

  ContactsAPI.fetchContacts()
    .then(({ data }) => {
      return dispatch(actions.fetchContactSuccess(data));
    })
    .catch((error) => {
      toast.error("Contact is not added! Something wrong!");
      return dispatch(actions.fetchContactError(error.message));
    });
};

export const addContacts =
  ({ stateName, number }) =>
  (dispatch) => {
    const user = { id: shortid.generate(), name: stateName, number };

    dispatch(actions.addContactRequest());

    ContactsAPI.addContact(user)
      .then(({ data }) => {
        toast.success("Contact successfully added!");
        return dispatch(actions.addContactSuccess(data));
      })
      .catch((error) => {
        toast.error("Contact is not added! Something wrong!");
        return dispatch(actions.addContactError(error.message));
      });
  };

export const deleteContact = (userId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  ContactsAPI.deleteContact(userId)
    .then(() => {
      toast.success("Contact successfully deleted!");
      return dispatch(actions.deleteContactSuccess(userId));
    })
    .catch((error) => {
      toast.error("Contact is not deleted! Something wrong!");
      return dispatch(actions.deleteContactError(error));
    });
};
