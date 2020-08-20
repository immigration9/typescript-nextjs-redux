import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO, TodoActionTypes } from "../actions/TodoActions.types";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input value={input} onChange={({ target }) => setInput(target.value)} />
      <button
        type="button"
        onClick={() => {
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
