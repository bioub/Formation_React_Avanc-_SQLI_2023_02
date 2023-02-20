import { useState } from 'react';
import './App.css';
import CountControlled from './CountControlled';
import CountRenderProps from './CountRenderProps';
import CountUncontrolled from './CountUncontrolled';
import Select from './Select';
import ReactSelect from 'react-select';
import TryCatchBoundary from './TryCatchBoundary';
import Hello from './Hello';
import { diseableable } from './disableable';

const HelloDisableable = diseableable(Hello);
const CountUncontrolledDisableable = diseableable(CountUncontrolled);

function App() {
  const [count, setCount] = useState(0);
  const [letter, setLetter] = useState('A');

  const [items, setItems] = useState<string[]>([]); 

  const [lang, setLang] = useState('Français');
  console.log('App');

  return (
    <div className="App">
      <nav className="menu">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </nav>
      <h2>Select (Rappels)</h2>
      <Select items={['A', 'B', 'C']} selectedValue={letter} onSelected={setLetter} />
      <p>Vous avez sélectionné : {letter}</p>
      <h2>Composants contrôlés vs non-controlés</h2>
      <TryCatchBoundary>
        <CountUncontrolled defaultCount={3} />
      </TryCatchBoundary>
      <TryCatchBoundary>
        <CountUncontrolled />
      </TryCatchBoundary>
      <TryCatchBoundary>
        <CountUncontrolled />
      </TryCatchBoundary>
      <CountControlled count={count} onIncrement={() => setCount(count + 1)} />
      <CountControlled count={count} onIncrement={() => setCount(count + 1)} />
      <CountControlled count={count} onIncrement={() => setCount(count + 1)} />

      <h2>Render Props</h2>
      <CountRenderProps
        renderCount={(count) => (
          <>
            <b>{count}</b>
            <b>!!!</b>
          </>
        )}
      />
      <Select
        items={['A', 'B', 'C']}
        selectedValue={letter}
        onSelected={setLetter}
        renderItem={(val) => (val === letter ? <i>-- {val} --</i> : val)}
      />

      <Select
        items={[
          { value: 'Français', flag: 'fr' },
          { value: 'English', flag: 'en' },
        ]}
        getValue={(obj) => obj.value}
        selectedValue={lang}
        onSelected={setLang}
        renderItem={(obj) => (
          <>
            <img src={process.env.PUBLIC_URL + '/flags/' + obj.flag + '.png'} alt={obj.flag} /> {obj.value}
          </>
        )}
      />

      <ReactSelect options={[
          { label: 'Français', value: 'fr' },
          { label: 'English', value: 'en' },
        ]}  formatOptionLabel={(obj) => <>
          <img src={process.env.PUBLIC_URL + '/flags/' + obj.value + '.png'} alt={obj.value} /> {obj.label}
        </>} />


      <h2>Higher Order Component</h2>
      <Hello />
      <hr />
      <HelloDisableable />
      <hr />
      <CountUncontrolled />
      <hr />
      <CountUncontrolledDisableable />
    </div>
  );
}

export default App;
