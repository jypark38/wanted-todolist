import { createSlice } from "@reduxjs/toolkit";

export const filterOptions = {
  all: "all",
  completed: "completed",
  unCompleted: "unCompleted",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
