import {
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityId,
} from "@reduxjs/toolkit";
import { RootState } from "..";

interface Todo {
  id: EntityId;
  text: string;
  completed: boolean;
}

const todosAdapter = createEntityAdapter<Todo>();

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

export const { selectAll: selectAllTodos, selectById: selectTodoById } =
  todosAdapter.getSelectors<RootState>((state: RootState) => state.todos);

export const selectFilterTodo = createSelector(
  selectAllTodos,
  (state: RootState) => state.filter,
  (todos, filter) => {
    if (filter == "all") {
      return todos;
    }

    const isCompleted = filter === "completed";

    return todos.filter((todo) => todo.completed === isCompleted);
  }
);

export const selectFilterTodoIds = createSelector(selectFilterTodo, (todos) => {
  return todos.map((todo) => todo.id);
});
