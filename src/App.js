import logo from './logo.svg';
import './App.css';
import Getapi from './Getapi';
import Posapi from './Posapi';
import Deletapi from './Dletapi';
function App() {
  return (
    <div className="App">
     <h1>helo wordl</h1>
     <Getapi/>
     <Posapi/>
     <Deletapi/>
    </div>
  );
}

export default App;
