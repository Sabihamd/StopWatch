import React, { Component } from "react";
import "../styles/stopwatch.css";

class StopWatchClass extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
    };
    this.timerInstance = null;
  }

  setSeconds(val) {
    this.setState({ ...this.state, seconds: val });
  }

  setMinutes(val) {
    this.setState({ ...this.state, minutes: val });
  }

  setHours(val) {
    this.setState({ ...this.state, hours: val });
  }

  componentDidUpdate() {
    console.log("did up");
    if (this.state.seconds === 60) {
      this.setSeconds(0);
      this.setMinutes(this.state.minutes + 1);
    }
    if (this.state.minutes === 60) {
      this.setMinutes(0);
      this.setHours(this.state.hours + 1);
    }

    if (this.state.seconds > 0) {
      this.startTimer();
    }
  }

  startTimer() {
    this.timerInstance = setTimeout(() => {
      this.setSeconds(this.state.seconds + 1);
    }, 1000);
  }

  resetTimer() {
    this.setState({ seconds: 0, minutes: 0, hours: 0 });
    clearTimeout(this.timerInstance);
  }

  pauseTimer() {
    clearTimeout(this.timerInstance);
  }

  resumeTimer() {
    this.startTimer();
  }

  render() {
    return (
      <div className="stopwatch-ui">
        <div className="timer">
          <div className="hours">{this.state.hours} :</div>
          <div className="minutes">{this.state.minutes} :</div>
          <div className="seconds">{this.state.seconds}</div>
        </div>
        <div className="buttons">
          <button className='start' onClick={() => this.startTimer()}> Start</button>
          <button className='pause' onClick={() => this.pauseTimer()}> Pause</button>
          <button className='resume' onClick={() => this.resumeTimer()}> Resume</button>
          <button className='reset' onClick={() => this.resetTimer()}>Reset</button>
        </div>
      </div>
    );
  }
}

export default StopWatchClass;
