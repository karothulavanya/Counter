import React, { useState } from "react";

function Counter() {
  // Declare state variables
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  // Function to increment the count
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setError("");
    } else {
      setError("Value cannot exceed 10.");
    }
  };

  // Function to decrement the count
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setError("");
    } else {
      setError("Value cannot be below 0.");
    }
  };

  // Function to reset the count
  const reset = () => {
    setCount(0);
    setError("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={increment} style={{ margin: "5px", padding: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: "5px", padding: "10px" }}>
        Decrement
      </button>
      <button onClick={reset} style={{ margin: "5px", padding: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
