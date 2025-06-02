import useInput from "../hooks/useInput";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import * as S from "./Style";

export default function Diary() {
    const title = useInput("");
    const content = useInput("");
    const [diaries, setDiaries] = useLocalStorage("diaries", []);

    const handleAdd = (e) => {
        const trimTitle = title.value.trim();
        const trimContent = content.value.trim();

        const newDiary = {
            id: Date.now(),
            title: trimTitle,
            content: trimContent,
        };

        setDiaries([...diaries, newDiary]);
        alert("오늘도 1일 1일기 성공~")

        title.reset();
        content.reset();
    };
    


    return (
        <S.Box>
            <S.Title>My Diaries</S.Title>
            <S.Input
            type="text"
            placeholder="제목"
            value={title.value}
            onChange={title.onChange}
            />
            <S.Textarea
            placeholder="오늘은 무슨일이 있었어?"
            cols="40"
            rows="5"
            value={content.value}
            onChange={content.onChange}
            />
            <S.Button onClick={handleAdd}>저장하기</S.Button>
        </S.Box>
    );
}