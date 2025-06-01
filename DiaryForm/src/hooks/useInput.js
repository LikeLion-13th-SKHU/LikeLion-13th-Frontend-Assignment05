import { useState } from "react"; // 커스텀 훅 조건 1

export default function useInput(firstCost = "") {
    const [value, setValue] = useState(firstCost);

    const onChange = (e) => {
        setValue(e.target.value); // 입력한 값을 저장하는 코드
    };
    
    const reset = () => {
        setValue(""); // 제출 버튼을 누르면 초기화되는 코드
    };

    const contentTrim = value.trim(); // 커스텀 훅 조건 4

    return {
        value,
        onChange,
        reset,
        contentTrim
    };
}