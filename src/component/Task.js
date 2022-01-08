
import { Button } from 'react-bootstrap'
import { deletetask, donetask } from '../redux/actions/todoaction'
import { useDispatch,  } from 'react-redux'
import Edittask from './Edittask'

function Task({el}) {
 const dispatch = useDispatch()

 

    return (
        <div>
          
            <li style={{textDecoration: el.done ?'line-through':null}}> {el.task}</li>
         <Button variant="success" onClick={()=>dispatch(donetask(el.id))}>Done</Button>{' '} 
         <Button variant="danger" onClick={()=>dispatch(deletetask(el.id))}>Delete</Button>
         <Edittask el={el}/>
         
        </div>
    )
}

export default Task
