import { useRouter } from "next/router";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
      <button onClick={() => router.push("/store")}>Go to Store</button>
    </div>
  );
}
