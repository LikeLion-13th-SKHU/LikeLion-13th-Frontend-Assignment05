import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.li`
  padding: 10px;
  background-color: #a3ffa3;
  margin: 20px auto;

  &:hover {
    border: 1px solid darkblue;
  }
`;

export const Title = styled.h1`
  color: black;
  text-align: center;
`;

export const Title2 = styled.h2`
  color: blueviolet;
  text-shadow: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: #9ed2ff;
`;

export const Box = styled.div`
  border: 1px solid dotted;
  border-color: #48aaff;
`;

export const StyledInput = styled.input`
  color: white;
  background-color: #8486f6;
  border: 1px solid gray;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #ffffff;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  color: #fd3bbf;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 5px;
  cursor: pointer;

  &:hover {
    color: #c003ff;
  }
`;
