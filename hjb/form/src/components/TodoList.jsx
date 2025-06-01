import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { useInput } from "../hooks/useInput";
import * as S from "./Style";

export default function TodoList() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const value = useInput("");

  const handleAdd = () => {
    if (value.input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      title: value.input,
    };
    setTodos([...todos, newTodo]);
    value.reset();
  };

  return (
    <div>
      <S.Box>
        <div>
          <S.StyledLink to={`/diary`}>다이어리 바로가기</S.StyledLink>
        </div>

        <S.StyledInput
          type="text"
          placeholder="할 일을 입력하세요"
          value={value.input}
          onChange={value.onChange}
        />
        <S.Button onClick={handleAdd}>추가</S.Button>

        <ol>
          {todos.map((todo) => (
            <S.List key={todo.id}>
              <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
            </S.List>
          ))}
        </ol>
      </S.Box>
    </div>
  );
}
