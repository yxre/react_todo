import { Todo } from "../types";

export type TodoProps = {
  todo: Todo;
};

export const TodoView = ({ todo }: TodoProps) => {
  return <div>Todo</div>;
};
