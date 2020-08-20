import { TodoActionTypes, ADD_TODO, TOGGLE_TODO } from "./TodoActions.types";

export const addTodo = (text: string): TodoActionTypes => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id,
});
