import { createSlice } from "@reduxjs/toolkit";
import { fetchTricks, addTrick, deleteTrick } from "./tricks-operations";

const initialState = {
  entities: [{name: ""}],
  filter: '',
  isLoading: false,
  error: null
};

const tricksSlice = createSlice({
  name: "tricks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTricks.pending, (state, _) => {
        state.isLoading = true
        })
      .addCase(fetchTricks.fulfilled,
      (state, { payload }) => {
        state.isLoading = false
        state.entities = payload;
      })
      .addCase(fetchTricks.rejected, (state, _) => {
        state.isLoading = false
      })
      .addCase(addTrick.fulfilled,
        (state, { meta }) => {
          state.entities = state.entities.find(({ name }) => name === meta.arg.name)
            ? state.entities
            : [...state.entities, meta.arg]
        })
      .addCase(deleteTrick.fulfilled,
        (state, { payload }) =>
          state.entities = state?.entities.filter(({ id }) => id !== payload)
      )
  }
})

export default tricksSlice.reducer;
