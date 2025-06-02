import React from 'react';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

function Diary() {
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }
    alert('성공적으로 저장했습니다.');
  };

  return (
    <Container>
      <h2>일기 작성</h2>
      <Form onSubmit={handleSubmit}>
        <Label>제목</Label>
        <Input type="text" value={title} onChange={onChangeTitle} />

        <Label>내용</Label>
        <Textarea value={content} onChange={onChangeContent} />

        <Button type="submit">제출</Button>
      </Form>
    </Container>
  );
}

export default Diary;

// styled-components
const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
`;
