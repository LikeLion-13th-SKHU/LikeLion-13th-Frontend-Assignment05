import React from "react";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
`;

const Input = styled.input`
  width: 500px;
  height: 20px;
  font-size: 18px;
  border: 5px solid white;
  box-shadow: 0 0 3px #ccc;
  margin: 20px 0;
`;

const Textarea = styled.textarea`
  width: 500px;
  border: 5px solid white;
  box-shadow: 0 0 3px #ccc;
  margin-bottom: 20px;
`;

export default function Diary() {
  const title = useInput();
  const content = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.value.trim() || !content.value.trim()) {
      return;
    }

    alert("오늘 일기 제출 완료! 🕺");

    title.reset();
    content.reset();
  };

  return (
    <Container>
      <Title>오늘의 일기 쓰기</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="일기 제목을 입력하세요..✏️"
          value={title.value}
          onChange={title.onChange}
        />
        <Textarea
          placeholder="일기 내용을 입력하세요..✏️"
          value={content.value}
          onChange={content.onChange}
          rows="25"
        />
        <button type="submit">저장</button>
      </Form>
    </Container>
  );
}
