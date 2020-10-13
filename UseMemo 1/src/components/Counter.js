import React, { useEffect } from 'react';
let renderCount = 1;
const Counter = () => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      <h1>Rendering Counter component : {renderCount}</h1>
    </div>
  );
};

export default Counter;
