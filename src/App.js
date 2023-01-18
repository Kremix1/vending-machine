import './App.css';
import './styles/null.scss'
import { VendingMachine } from './Components/VendingMachine';
import { useAlert } from 'react-alert'

function App() {
  return (
    <div className="App">
      <VendingMachine alert={alert}/>
    </div>
  );
}

export default App;
