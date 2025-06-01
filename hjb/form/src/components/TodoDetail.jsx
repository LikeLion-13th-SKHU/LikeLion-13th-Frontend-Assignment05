import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as S from "./Style";

const Title2 = styled.h2`
  color: blueviolet;
  text-align: center;
  padding: 10px;
`;

const Id = styled.p`
  color: black;
  background-color: aquamarine;
  padding: 5px;
  margin: 5px auto;
`;

export default function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Title2>Todo 상세 페이지</Title2>
      <Id>
        Todo ID: <strong>{id}</strong>
      </Id>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <S.Button onClick={() => navigate(-1)}>목록으로 돌아가기</S.Button>
      </div>
    </div>
  );
}
