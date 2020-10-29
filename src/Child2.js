// UseReducer = Has the accessibility in multiple components with the same value

import React, {useReducer} from "react";
import NumberReducer from "./NumberReducer";

function Child2() {
    // 52 is default value
    // useReducer returns an array
    // state is a variable and dispatch is a function
    // NumberReducer is a function/hook
    let [state, dispatch] = useReducer(NumberReducer, 52);

  return (
    <div>
        In Child 2 - useReducer = {state}

        <br />
      <br />
      {/* value[1] = function, value[0] = variable */}
      <button onClick={() => dispatch({type:'INCREMENT', val: 67})}>Increment Number Child 2</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch({type:'DECREMENT', val: 67})}>Decrement Number Child 2</button>
    </div>
  );
}

export default Child2;
