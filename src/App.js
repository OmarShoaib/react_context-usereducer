import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';

function App() {
  let [number, setNumber] = useState(45);
  return (
    <div>
      Omar Shoaib
      <Parent num={number} />
      <button onClick={() => setNumber(++number)}>Update Number</button>
    </div>
  );
}

export default App;
