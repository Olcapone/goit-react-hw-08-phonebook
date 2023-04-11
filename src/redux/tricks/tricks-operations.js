import { toast } from "react-toastify";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTricks = createAsyncThunk(
  "tricks/fetchTricksRequest",
  async (credentials) => {
  try {
    const resp = await axios.get('/tricks');
   // const data = await resp.data

    return resp.data;
  } catch (error) {
    toast.error(error.message);
  }
});

export const getTrick = createAsyncThunk(
  "tricks/getTrickRequest",
  async (cred) => {
    console.log(cred);
    try {
      const resp = await axios.get(`/tricks/${cred.trickId}`);
      const data = await resp.data;

      return data;
    } catch (error) {
      toast.error(error.message);
    }
  });

export const addTrick = createAsyncThunk(
  "tricks/addTricksRequest",
  async (cred) => {
    try {
      axios
        .post('/tricks', cred)
        .then(({ data }) => {
          toast.success("Trick successfully added!");
          return data;
        })
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const deleteTrick =  createAsyncThunk(
  "tricks/deleteTricksRequest",
  async (cred) => {
    try {
      axios
        .delete(`/tricks/${cred.userId}`)
        .then(() => toast.success("Trick successfully deleted!"))
    } catch (error) {
      toast.error(error.message);
    }
  }
);
