import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import Diary from "./components/Diary";
import TimerPage from "./components/TimerPage";
import GlobalStyle from "./GlobalStyle";
import * as S from "./components/Style"

export default function App(){
  return(
    <Router>
      <GlobalStyle/>
      <S.Title>Todo List</S.Title>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/todo/:id" element={<TodoDetail />}/>
        <Route path="/timer" element={<TimerPage/>}/>
        <Route path="/diary" element={<Diary />}/>
      </Routes>
    </Router>
  );
}
