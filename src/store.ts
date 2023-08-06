import { Todo, TodoStore } from "./types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const initialState: TodoStore = {
  todos: [],
  showEditor: false,
  showDeleted: false,
  selectedTodoId: undefined,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, addTodoAction: PayloadAction<Todo>) => {
      state.todos = [...state.todos, addTodoAction.payload];
    },
    removeTodo: (state, removeTodoAction: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        (x) => x.id !== removeTodoAction.payload,
      );
    },
    editTodo: (state, editTodoAction: PayloadAction<string>) => {},
    saveTodo: (state, saveTodoAction: PayloadAction<Todo>) => {},
    refreshStore: (state, refreshStoreAction: PayloadAction<TodoStore>) => {},
  },
});

export const store = configureStore(todoSlice);
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
