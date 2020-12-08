import React, { Component } from 'react';

class Stopwatch extends Component {
  state = { isRunning: false, elapsedTime: 0, previousTime: 0 };

  componentDidMount = () => {
    this.intervalID = setInterval(() => {
      this.tick();
    }, 100);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };

  startStop = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  reset = () => {
    this.setState({ previousTime: 0, elapsedTime: 0, isRunning: false });
  };

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState((prevState) => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime),
      }));
    }
  };

  render() {
    const time = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{time}</span>
        <button onClick={this.startStop}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default Stopwatch;
