import useTimer from "../hooks/useTimer";
import styled from "styled-components";

const Text = styled.div`
  color: black;
  text-align: center;
`;

const Btn = styled.button`
  margin: 10px;
  color: white;
`;

export default function TimerPage() {
  const { timer, startTimer, stopTimer, isActive } = useTimer(1000);

  return (
    <div style={{ padding: "1rem" }}>
      <Text>
        <h2>⏱️ Timer Page</h2>
        <p>타이머: {timer}초</p>
      </Text>
      <Btn onClick={startTimer} disabled={isActive}>
        시작
      </Btn>
      <Btn onClick={stopTimer} disabled={!isActive}>
        정지
      </Btn>
    </div>
  );
}
