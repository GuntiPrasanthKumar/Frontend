import React from "react";

const FunctionComponent = () => {
    const fun = (A) => {
        console.log("Button Clicked", A);
    }
  return (
    <div>
      <h2>This is a Function Component</h2>
      <button onClick={() => fun("hello")}>Click Me</button>
    </div>
  );
}

export default FunctionComponent;