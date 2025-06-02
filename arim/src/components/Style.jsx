import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Box = styled.div`
  padding: 20px;
  border-radius: 16px;
  min-width: 340px;
  ${Container}
  flex-direction: column;
  &:hover {
    background-color: #c0ddff;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
`;
export const NavItem = styled.li``;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
  list-style: none;
  padding: 0;
`;

export const NavLink = styled(RouterLink)`
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
`;
