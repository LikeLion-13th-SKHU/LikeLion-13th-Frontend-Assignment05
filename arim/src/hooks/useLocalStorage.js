import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    //state: 현재 값 (예: 할 일 목록 등) / setState: 값을 바꿀 때 쓰는 함수
    const stored = localStorage.getItem(key); //로컬스토리지에서 key에 해당하는 값을 읽어옴.
    return stored ? JSON.parse(stored) : defaultValue;
  }); // ex)localStorage에 'todos'가 저장되어 있으면 그걸 불러오고, 없으면 빈 배열([])로 시작!

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]); //state나 key가 바뀔 때마다 실행됨.
  return [state, setState]; //반환
}
