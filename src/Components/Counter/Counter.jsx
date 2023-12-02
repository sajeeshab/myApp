import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Counter() {
  const [state, setState] = useState(0);

  const decrement = () => {
    setState(state - 1);
  };
  const increment = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h1>Counter: {state}</h1>
      <Button className="bg-danger m-2" onClick={decrement}>
        -
      </Button>
      <Button className="bg-success m-2" onClick={increment}>
        +
      </Button>
      <br />
      <br />
      <p>This is initial creation. created by Sajeesh</p>
    </div>
  );
}

export default Counter;
