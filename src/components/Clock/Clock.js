import { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <div className="clock-container">{time.toLocaleTimeString()}</div>;
}

export default Clock;
