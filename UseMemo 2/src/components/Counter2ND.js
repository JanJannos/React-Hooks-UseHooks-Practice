import React, { useEffect } from 'react';
let renderCount = 1;
const Counter2ND = ({ count }) => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      <h1>
        Rendering Counter2ND component : {renderCount} || and Counting {count}{' '}
        times
      </h1>
    </div>
  );
};

export default Counter2ND;
