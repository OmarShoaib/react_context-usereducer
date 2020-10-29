import Child from './Child';

function Parent(props) {
  return (
    <div>
      In Parent = {props.num}
      <Child num={props.num} />
    </div>
  );
}

export default Parent;
