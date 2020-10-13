import React, { useState, useCallback } from 'react';
import '../App.css';

const functionCounter = new Set();


/*****
 * 
 * Now when we use useCallback , whenever we click a button 
 * we add only one new function instead of 2 new functions
 * 
 */
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const increment2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

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
