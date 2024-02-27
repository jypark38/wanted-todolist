import { createSlice } from "@reduxjs/toolkit";

const filterOptions = {
  all: "all",
  completed: "completed",
  unCompleted: "unCompleted",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setFilter(state, action) {},
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
