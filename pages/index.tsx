import { useRouter } from "next/router";

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
      <button type="button" onClick={() => router.push("/store")}>
        Go to Store
      </button>
    </div>
  );
};

export default Home;
