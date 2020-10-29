// UseContext = Contains Provider and Consumer. It provides the value to whole document tree

import React, { useContext } from "react";
import ValueContext from "./ValueContext";

function Child() {
    let value = useContext(ValueContext);
  return (
    <div>
      In Child 1 -  Update by useContext = {value[0]}
      <br />
      <br />
      {/* value[1] = function, value[0] = variable */}
      <button onClick={() => value[1](++value[0])}>Update Number Child 1</button>
    </div>
  );
}

export default Child;
