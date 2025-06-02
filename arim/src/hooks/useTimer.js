import { useState, useEffect, useRef } from 'react';

export default function useTimer(timerTime = 1000) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false); //isActive: 타이머가 동작 중인지 아닌지(true/false)
  const intervalRef = useRef(null); //intervalRef: setInterval의 id를 저장할 변수

  const startTimer = () => {
    if (!isActive) {
      //타이머가 멈춰있을 때만(isActive가 false일 때만)
      setIsActive(true); //타이머 시작작
    }
  };

  const stopTimer = () => {
    setIsActive(false); //멈춤
    setTimer(0); //초기화
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, timerTime); //timerTime마다 값을 1씩 증가.
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isActive, timerTime]); //의존성 배열. 배열안의 값이 바뀔 대마다 useEffect실행. true->시작/false->멈춤

  return { timer, startTimer, stopTimer, isActive }; //이 훅을 다른 컴포넌트(페이지)에서 불러와서 타이머 값도 보고, 시작/멈춤도 할 수 있게 연동되는 것.
}
