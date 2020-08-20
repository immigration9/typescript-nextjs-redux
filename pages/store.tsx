import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { TodoState } from "../interfaces/todo";

export default function Store() {
  const router = useRouter();
  const todos = useSelector<RootState, TodoState>((state) => state.todos);
  return (
    <div>
      <div>Store Data Retained</div>
      {todos.map((td) => (
        <div key={td.id}>
          {td.text} / {td.completed}
        </div>
      ))}
      <button type="button" onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
}
