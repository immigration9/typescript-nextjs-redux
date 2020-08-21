import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO, TodoActionTypes } from "../actions/TodoActions.types";

const AddTodo: React.FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={input}
        onChange={({ target }): void => {
          setInput(target.value);
        }}
      />
      <button
        type="button"
        onClick={(): void => {
          dispatch<TodoActionTypes>({ type: ADD_TODO, text: input });
          setInput("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
