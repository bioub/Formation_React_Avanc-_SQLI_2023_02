
type Props = {
  count: number;
  onIncrement(): void;
}

function CountControlled({ count, onIncrement }: Props) {
  console.log('CountControlled');
  return <button onClick={() => onIncrement()}>{count}</button>;
}

export default CountControlled;
