import React, { useState, useCallback } from 'react';
import '../App.css';

const functionCounter = new Set();

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  // Add functions to Set

  functionCounter.add(increment);
  functionCounter.add(increment2);

  console.log(functionCounter);

  return (
    <div className='App'>
      <p>
        Counter1 : {count} || Counter2 : {count2}
      </p>
      <button onClick={increment}>Increase Count 1</button>
      <button onClick={increment2}>Increase Count 2</button>
    </div>
  );
}

export default App;
