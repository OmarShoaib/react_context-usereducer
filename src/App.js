// UseState = Manage state of a particular component

import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  // let [number, setNumber] = useState(45);
  let value = useState(45);
  // let value = 81;
  return (
    // ValueContext wrapper
    <ValueContext.Provider value={value}>
      <div>
        Omar Shoaib
        <Parent num={value[0]} />
        {/* value[1] = function, value[0] = variable
        <button onClick={() => value[1](++value[0])}>Update Number</button> */}
      </div>
    </ValueContext.Provider>
  );
}

export default App;
