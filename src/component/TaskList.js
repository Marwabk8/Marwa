
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Task from './Task';
 
function TaskList() {
    const todos = useSelector((state) => state.todoReducers.todos);
    const[toggle,setToggle]= useState(false)
    const Tog =()=>{
      setToggle(!toggle)
  }
    
    return (
        <div className='liste'>
        <Button variant="dark" onClick={()=>Tog()}>{Tog?'Not Done' : 'All'}</Button> 
            
         {
         !toggle ?todos.map(el=> <Task key={el.id} el={el}/>)
         : todos.filter(el=>el.done===Tog).map(el=> <Task key={el.id} el={el}/>)}
       
       </div>
    
    )
}

export default TaskList;
