import * as wasi from "wasi";

enum Actions {
  ADD_TODO = "ADD_TODO",
  MARK_DONE = "MARK_DONE",
  DELETE_TODO = "DELETE_TODO",
  SORT_TODOS = "SORT_TODOS",
}
type ActionStrings = string; // keyof typeof Actions;

export type BaseActionType = {
  type: Actions;
};

export type AddTodoAction = {
  type: Actions.ADD_TODO;
};

export type actions = ActionStrings;

export type Todo = {
  id: string;
  text: string;
  date: string;
  isDone: boolean;
};

export type TodoStore = {
  todos: Todo[];
  showEditor: boolean;
  showDeleted: boolean;
  selectedTodoId?: string;
};
