import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import Todo from "./Todo";
import { TodoState } from "../interfaces/todo";
import { RootState } from "../reducers";
import { TOGGLE_TODO, TodoActionTypes } from "../actions/TodoActions.types";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../actions/VisibilityActions.types";

const TodoList = () => {
  const todos = useSelector<RootState, TodoState>((state) => state.todos);
  const filter = useSelector<RootState, string>(
    (state) => state.visibilityFilter.filter
  );
  const dispatch = useDispatch();

  const visibleTodos = useMemo(() => {
    switch (filter) {
      case SHOW_COMPLETED:
        return todos.filter((td) => td.completed);
      case SHOW_ACTIVE:
        return todos.filter((td) => !td.completed);
      case SHOW_ALL:
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <ul>
      {visibleTodos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() =>
            dispatch<TodoActionTypes>({ type: TOGGLE_TODO, id: todo.id })
          }
        />
      ))}
    </ul>
  );
};

export default TodoList;
