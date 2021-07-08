import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React typescrip Wabpack</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  );
};
