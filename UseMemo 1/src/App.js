import React, { useState, useMemo } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [countA, setCountA] = useState(0);
  const incrementA = () => {
    setCountA(countA + 1);
  };


  // const memoCounter = useMemo(() => {
  //   return <Counter />;
  // }, []);
  
  return (
    <div className='App'>
      <h1>Incrementing CountA from APP.JS : {countA}</h1>
      <p>
        <button onClick={incrementA}>Increment A</button>
      </p>
      {/* {memoCounter} */}

      <Counter />
    </div>
  );
}

export default App;
