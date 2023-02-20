import { useState } from 'react';

type Props = {
  defaultCount?: number;
};

function CountUncontrolled({ defaultCount = 0 }: Props) {
  console.log('CountUncontrolled');
  const [count, setCount] = useState(defaultCount);

  if (count === 5) {
    throw new Error("count can't be 5");
  }

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default CountUncontrolled;
