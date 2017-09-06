import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor() {
  super()
  this.state = {
    time: 0,
    currentTime: null
  }
  this.startClick = this.startClick.bind(this)
  this.pauseClick = this.pauseClick.bind(this)
  this.resetClick = this.resetClick.bind(this)
}
startClick () {
  console.log("starting clock")
  this.state.currentTime = setInterval(() => {
    this.setState({time: this.state.time + 1})}, 1000)
  }
pauseClick () {
  console.log("pausing clock")
  clearInterval(this.state.currentTime)
}
resetClick () {
  console.log("resetting clock")
  clearInterval(this.state.currentTime)
  this.setState({ time: 0 })
}
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.time}</h1>
        <div className="controls">
          <button onClick={this.resetClick}>Reset</button>
          <button onClick={this.startClick}>Start</button>
          <button onClick={this.pauseClick}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
