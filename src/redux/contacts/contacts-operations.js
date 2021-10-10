// import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import shortid from "shortid";
import axios from "axios";
import actions from "./contacts-actions";

//=== have to refactoring with thunk

export const fetchContact = () => async (dispatch) => {
  dispatch(actions.fetchContactRequest());

  axios
    .get(`/contacts`)
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

    axios
      .post(`/contacts`, user)
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

  axios
    .delete(`/contacts/${userId}`)
    .then(() => {
      toast.success("Contact successfully deleted!");
      return dispatch(actions.deleteContactSuccess(userId));
    })
    .catch((error) => {
      toast.error("Contact is not deleted! Something wrong!");
      return dispatch(actions.deleteContactError(error));
    });
};
