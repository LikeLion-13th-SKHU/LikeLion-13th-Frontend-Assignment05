import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import TimerPage from "./components/TimerPage";
import Diary from "./components/Diary";
import { GlobalStyle, Title } from "./components/GlobalStyle";

export default function App() { // 라우터 조건 1
  return (
    <Router>
      <GlobalStyle />
      <Title>Todo List</Title>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/diary" element={<Diary />} />  
        </Routes>
    </Router>
  );
}