import React from "react";
import styled from 'styled-components';
import useInput from "../hooks/useInput";

const Wrapper = styled.div`
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
`;

const Label = styled.div`
    display: block;
    margin-bottom: 8px;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: green;
    color: white;
`;

const Diary = () => {
    const title = useInput('');
    const content = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.value.trim() || !content.value.trim()) {
            return;
        }

        alert('성공적으로 저장했습니다!!');
        title.reset();
        content.reset();
    };

    return (
        <Wrapper>
            <h2>일기 작성</h2><br />
            <form onSubmit={handleSubmit}>
                <Label>제목</Label>
                <Input type="text" {...title} required></Input>

                <Label>내용</Label>
                <Textarea {...content} required />

                <Button type="submit">제출</Button>
            </form>
        </Wrapper>
    );
};

export default Diary;
