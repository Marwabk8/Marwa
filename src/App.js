
import './App.css';
import Addtask from './component/Addtask';

import Tasklis from './component/Tasklis';


function App() {
  return (
    <div className="App">
    <Addtask>Addtask</Addtask>
    <br/>
    <Tasklis/>
   
    </div>
  );
}

export default App;
