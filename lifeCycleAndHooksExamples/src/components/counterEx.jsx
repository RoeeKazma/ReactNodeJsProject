import React, { Component } from "react";

class CounterEx extends Component {
  state = { counter: 0 };

  interval;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <p>{this.state.counter}</p>;
  }
}

export default CounterEx;

