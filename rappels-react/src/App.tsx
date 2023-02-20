import { useState } from 'react';
import './App.css';
import CountControlled from './CountControlled';
import CountRenderProps from './CountRenderProps';
import CountUncontrolled from './CountUncontrolled';
import Select from './Select';

function App() {
  const [count, setCount] = useState(0);
  console.log('App');

  return (
    <div className="App">
      <nav className="menu">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </nav>
      <h2>Select (Rappels)</h2>
      <Select items={['A', 'B', 'C']} />
      <h2>Composants contrôlés vs non-controlés</h2>
      <CountUncontrolled defaultCount={3} />
      <CountUncontrolled />
      <CountUncontrolled />
      <CountControlled count={count} onIncrement={() => setCount(count + 1)} />
      <CountControlled count={count} onIncrement={() => setCount(count + 1)} />
      <CountControlled count={count} onIncrement={() => setCount(count + 1)} />

      <h2>Render Props</h2>
      <CountRenderProps renderCount={(count) => <><b>{count}</b><b>!!!</b></>} />
    </div>
  );
}

export default App;
