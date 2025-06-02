import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TodoList() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [input, setInput] = useState([]);

  // useEffect(() => {
  //   const storedTodos = localStorage.getItem('todos');
  //   if (storedTodos) {
  //     setTodos(JSON.parse(storedTodos));
  //   }
  // }, []);

  // //todos 변경시 localStorage 저장 페이지 이동을 할때 저장이 안된다면 초기화되니 여기에 저장하는 것.
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const handleAdd = () => {
    if (input.trim() === '') return; //공백제거
    const newTodo = {
      id: Date.now(),
      title: input,
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력하세요" //중요~
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>추가</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
