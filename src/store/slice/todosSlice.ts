import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const todosAdapter = createEntityAdapter<any>();

const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: todosAdapter.addOne,
    deleteTodo: todosAdapter.removeOne,
    completeTodo: todosAdapter.setOne,
  },
});

// export {} = todosSlice.actions

export const { addTodo, deleteTodo, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;

export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
  selectIds: selectTodoIds,
} = todosAdapter.getSelectors((state: RootState) => state.todos);
