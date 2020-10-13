import React, { useEffect } from 'react';
let renderCount = 1;
const Counter = ({ count }) => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      <h1>
        Rendering Counter component : {renderCount} || and Counting {count}{' '}
        times
      </h1>
    </div>
  );
};

export default Counter;
