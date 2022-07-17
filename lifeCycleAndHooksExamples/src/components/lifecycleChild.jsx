import React, { Component } from "react";

class LifeCycleChild extends Component {
  state = {
    counter: 0,
  };

  constructor() {
    super();
    console.log("constructor ran...");
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  // initialize processes
  componentDidMount() {
    console.log("CDM ran...");
  }

  componentDidUpdate() {
    console.log("CDU ran...");
  }

  // clear processes
  componentWillUnmount() {
    console.log("CWU ran...");
  }

  render() {
    console.log("render");
    return (
      <div className="border border-danger">
        <h1>LifeCycle Child</h1>

        <button onClick={this.handleCounter}>
          child counter : {this.state.counter}
        </button>
      </div>
    );
  }
}

export default LifeCycleChild;
