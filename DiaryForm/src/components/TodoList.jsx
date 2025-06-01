import { useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function TodoList() {
    const [todos, setTodos] = useLocalStorage("todos", []);
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim() === "") return;
        const newTodo = {
            id: Date.now(),
            title: input,
        };
        setTodos([...todos, newTodo]);
        setInput("");
    };

    return (
        <>
            <input 
            type="text"
            placeholder="할 일을 입력하세요"
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

            <Link to="/diary"><button>일기 작성하기</button></Link>
        </>
    );
}