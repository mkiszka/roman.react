import logo from '../logo.svg';
import '../App.css';
import RomanConverter from './RomanConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Arabic to roman converter</h1>
        <img src={logo} className="App-logo" alt="logo" />        
        <RomanConverter />
      </header>
    </div >
  );
}

export default App;
