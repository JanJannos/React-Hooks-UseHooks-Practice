import React, { useState, useMemo } from 'react';
import Counter from './components/Counter';
import Counter2ND from './components/Counter2ND';
import './App.css';

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const incrementA = () => {
    setCountA(countA + 1);
  };

  const incrementB = () => {
    setCountB(countB + 1);
  };

  const memoCounter = useMemo(() => {
    return <Counter count={countA} />;
  }, [countA]);

  return (
    <div className='App'>
      <h1>Incrementing CountA from APP.JS : {countA}</h1>
      <p>
        <button onClick={incrementA}>Increment A</button>
      </p>
      <p>
        <button onClick={incrementB}>Increment B</button>
      </p>
      {memoCounter}
      <Counter2ND count={countB} />
    </div>
  );
}

export default App;
