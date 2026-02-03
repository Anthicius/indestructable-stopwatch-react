import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleRestart = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    intervalRef.current = null;
  };

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="stopwatch-card">
      <h1 className="stopwatch-display">{formatTime(time)}</h1>

      <div className="controls">
        <button className="btn-start" onClick={handleStart}>
          Start
        </button>
        <button className="btn-stop" onClick={handleStop}>
          Stop
        </button>
        <button className="btn-reset" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
