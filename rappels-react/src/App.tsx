import './App.css';
import Select from './Select';

function App() {
  return (
    <div className="App">
      <nav className="menu">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </nav>
      <Select items={['A', 'B', 'C']} />
    </div>
  );
}

export default App;
