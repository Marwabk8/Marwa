
import './App.css';
import Addtask from './component/Addtask';
import TaskList from './component/TaskList.js';




function App() {
  return (
    <div className="App">
    <Addtask />
    <br/>
    <TaskList/>
   
    </div>
  );
}

export default App;
