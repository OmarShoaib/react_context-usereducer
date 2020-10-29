import Child from './Child';
import Child2 from './Child2';

function Parent(props) {
  return (
    <div>
      In Parent - Update by props (Passing Value) = {props.num}
      <Child />
      <br />
      <Child2 />
    </div>
  );
}

export default Parent;
