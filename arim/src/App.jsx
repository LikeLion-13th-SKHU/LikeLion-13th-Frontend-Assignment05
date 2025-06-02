import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';
import TimerPage from './components/TimerPage';
import Diary from './components/Diary';
import * as S from './components/Style';
import GlobalStyle from './GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <S.Box>
          <S.Title color="#fff">Todo List</S.Title>
          <S.NavList>
            <S.NavItem>
              <S.NavLink to="/">홈-투두리스트</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink to="/timer">타이머</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink to="/diary">다이어리</S.NavLink>
            </S.NavItem>
          </S.NavList>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/diary" element={<Diary />} />
          </Routes>
        </S.Box>
      </Router>
    </>
  );
}
