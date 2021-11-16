import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src="logo.png" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
