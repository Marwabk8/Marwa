
import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch,  } from 'react-redux'
import { addtask } from '../redux/actions/todoaction'


function Addtask() {
 const[text,setText]= useState('')
 const dispatch = useDispatch()
 const hundaleSubmit =(e)=> {
     e.preventDefault()
     dispatch(addtask(text));
     setText("");
    };
    
    return (
        <div className='task'>
        <Form onSubmit={hundaleSubmit}>
    <Form.Control type="text" placeholder="Enter task"value={text} onChange={(e)=>setText(e.target.value)} />
    <Button variant="secondary" type="submit">Addtask</Button>{' '}
        </Form>
        </div>
    )
}

export default Addtask
