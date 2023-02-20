import { ReactNode, useState } from 'react';

type Props = {
  defaultCount?: number;
  renderCount(count: number): ReactNode;
}

function CountRenderProps({defaultCount = 0, renderCount }: Props) {
  const [count, setCount] = useState(defaultCount);

  return <button onClick={() => setCount(count + 1)}>
    {renderCount(count)}
  </button>;
}

export default CountRenderProps;
