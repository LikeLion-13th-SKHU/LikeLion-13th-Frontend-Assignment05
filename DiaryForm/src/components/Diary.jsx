import useInput from "../hooks/useInput"; // 커스텀 훅 조건 2
import styled from "styled-components"; // Styled-Component 조건 1

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 50px;
`;

const Label = styled.label`
    font-size: 25px;
    font-weight: 700;
`

const Input = styled.input`
    width: 500px;
    height: 32px;
    font-size: 15px;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: rgb(233, 233, 233);

    &::placeholder {
        text-align: center;
    }
`
 
const Textarea = styled.textarea`
    width: 500px;
    height: 300px;
    font-size: 15px;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: rgb(233, 233, 233);

    &::placeholder {
        text-align: center;
    }
`

export default function Diary() {
    const title = useInput();
    const content = useInput();

    const handleSubmit = (e) => {
        e.preventDefault(); // 새로고침 막는 코드

        alert("성공적으로 저장했습니다."); // 커스텀 훅 조건 3
        
        title.reset();
        content.reset();
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Title>일기장</Title>
                <div>
                    <Label>제목</Label><br />
                    <Input type="text" value={title.value} onChange={title.onChange} placeholder="제목을 입력하세요"/>
                </div>
                <div>
                    <Label>내용</Label><br />
                    <Textarea value={content.value} onChange={content.onChange} placeholder="내용을 작성하세요"/>
                </div>
                <button type="submit">제출</button>
            </form>
        </Container>
    );
}