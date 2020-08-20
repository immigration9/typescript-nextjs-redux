export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  text: string;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
