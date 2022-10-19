import { useState, useRef } from "react";
import "./timer.css";

export default function Timer() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  function handleReset() {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h4>Time: {secondsPassed.toFixed(1)}</h4>
      <button className="timer-btn" onClick={handleStart}>
        Start
      </button>
      <button className="timer-btn" onClick={handleStop}>
        Stop
      </button>
      <button className="timer-btn" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
