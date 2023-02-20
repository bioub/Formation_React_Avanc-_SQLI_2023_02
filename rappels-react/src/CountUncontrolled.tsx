import { useState } from 'react';

type Props = {
  defaultCount?: number;
}

function CountUncontrolled({defaultCount = 0}: Props) {
  console.log('CountUncontrolled');
  const [count, setCount] = useState(defaultCount);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default CountUncontrolled;
