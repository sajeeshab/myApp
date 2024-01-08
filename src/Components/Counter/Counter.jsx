import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import "./Counter.css";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
};

function Counter() {
  // const [state, setState] = useState(0);

  // const decrement = () => {
  //   setState(state - 1);
  // };
  // const increment = () => {
  //   setState(state + 1);

  // };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Button className="bg-danger m-2" onClick={() => dispatch("decrement")}>
        -
      </Button>
      <Button className="bg-success m-2" onClick={() => dispatch("increment")}>
        +
      </Button>
      <Button className="bg-info" onClick={() => dispatch("reset")}>
        Reset
      </Button>
      <br />
      <br />
      <p>This is Initial Creation. Created by Sajeesh A B</p>
    </div>
  );
}

export default Counter;
