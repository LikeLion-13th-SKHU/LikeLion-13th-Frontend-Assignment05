import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import TimerPage from "./components/TimerPage";
import Diary from './components/Diary';
import GlobalStyle from './GlobalStyle'; 
import styled from 'styled-components';

export default function App() {
  return (
    <>
      <GlobalStyle />
    <Router>
      <h1>Todo List</h1>
      <nav>
        <Link to="/">TodoList</Link> | 
        <Link to="/timer">Timer</Link> | 
        <Link to="/diary">Diary</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </Router>
    </>
  );
}

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;