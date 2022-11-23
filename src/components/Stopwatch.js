import React, { useEffect, useState } from "react";
// import "./stopwatch.css";

const StopWatch = (props) => {
  let timerInstance;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((prev) => prev + 1);
    }

    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }
    if (seconds > 0) {
      console.log("Starting seconds");
      startTimer();
    }
  }, [seconds, minutes, hours]);
  const startTimer = () => {
    timerInstance = setTimeout(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    clearTimeout(timerInstance);
  };

  const pauseTimer = () => {
    clearTimeout(timerInstance);
  };
  const resumeTimer = () => {
    startTimer();
  };

  return (
    <div className="stopwatch-ui">
      <div className="timer">
        <div className="hours">{hours} :</div>
        <div className="minutes">{minutes} :</div>
        <div className="seconds">{seconds}</div>
      </div>
      <div className="buttons">
        <button className="" onClick={() => startTimer()}>
          {" "}
          Start
        </button>
        <button className="" onClick={resumeTimer}>
          {" "}
          Resume
        </button>
        <button className="" onClick={pauseTimer}>
          {" "}
          Pause
        </button>
        <button className="" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
