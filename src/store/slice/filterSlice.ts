import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export const filterOptions = {
  all: "all",
  completed: "completed",
  unCompleted: "unCompleted",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: "all" as "all" | "completed" | "unCompleted",
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const filterSelector = (state: RootState) => state.filter;

export const memoizedFilterSelector = createSelector(
  [filterSelector],
  (filter) => filter
);
