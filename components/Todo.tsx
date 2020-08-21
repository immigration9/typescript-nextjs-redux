interface Props {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo: React.FC<Props> = ({ onClick, completed, text }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </button>
);

export default Todo;
