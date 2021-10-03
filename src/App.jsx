import logo from './logo.svg';
import './App.css';
import LogForm from './components/CreateLogForm'
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <LogForm />
      </header>
    </div>
  );
}

export default App;
