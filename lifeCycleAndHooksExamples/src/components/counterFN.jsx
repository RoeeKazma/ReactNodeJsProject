import { useState } from "react";

const CounterFn = ({ min = 0, max = 10 }) => {
  const [counter, setCounter] = useState(min);
  if (false) {
    const [counter1, setCOunter1] = useState(4);
  }
  const [counter2, setCOunter2] = useState(3);

  const add = () => {
    if (counter >= max) {
      return;
    }
    setCounter((counter) => {
      return counter + 1;
    });
  };
  const sub = () => {
    if (counter <= min) {
      return;
    }
    setCounter((counter) => {
      return counter - 1;
    });
  };

  return (
    <div className="counter">
      <button
        onClick={sub}
        disabled={counter <= min}
        className="btn btn-danger"
      >
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button
        onClick={add}
        disabled={counter >= max}
        className="btn btn-success"
      >
        +
      </button>
    </div>
  );
};

export default CounterFn;
