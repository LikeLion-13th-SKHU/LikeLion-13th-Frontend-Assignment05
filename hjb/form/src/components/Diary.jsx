import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { useInput } from "../hooks/useInput";
import * as S from "./Style";
import styled from "styled-components";

const TitleInput = styled.input`
  color: black;
  background-color: #ffffa2;
  padding: 10px;
  margin: 10px auto;
  border: 1px dotted violet;
  display: flex;
  justify-content: center;
  &::placeholder {
    color: black;
  }
`;

const ContentInput = styled.textarea`
  color: black;
  background-color: #ffff8e;
  padding: 10px;
  margin: 10px auto;
  border: 1px dotted violet;
  display: flex;
  justify-content: center;

  &::placeholder {
    color: black;
  }
`;

const Back = styled.button`
  color: white;
  background-color: #329af5;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0;
  margin: 20px 0;
`;

export const List = styled.li`
  background-color: #a3ffa3;
  border-radius: 8px;
  width: 200px;
  padding: 10px;
  box-sizing: border-box;
  list-style: none;

  &:hover {
    border: 1px solid darkblue;
  }
`;

export default function Diary() {
  const [diary, setDiary] = useLocalStorage("diary", []);
  const title = useInput("");
  const content = useInput("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.input.trim() === "" || content.input.trim() === "") {
      return;
    }

    const newDiary = {
      id: Date.now(),
      title: title.input,
      content: content.input,
    };

    setDiary([...diary, newDiary]);
    title.reset();
    content.reset();
    alert("성공적으로 저장했습니다!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <S.Title>일기장</S.Title>
        <div>
          <TitleInput
            type="text"
            placeholder="제목을 입력해주세요"
            value={title.input}
            onChange={title.onChange}
          />
        </div>
        <div>
          <ContentInput
            placeholder="내용을 입력해주세요"
            value={content.input}
            onChange={content.onChange}
          />
        </div>
        <ButtonWrapper>
          <S.Button type="submit">제출</S.Button>
          <Back type="button" onClick={() => navigate(-1)}>
            목록으로 돌아가기
          </Back>
        </ButtonWrapper>
      </form>

      <ListWrapper>
        {diary.map((d) => (
          <List key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.content}</p>
          </List>
        ))}
      </ListWrapper>
    </div>
  );
}
