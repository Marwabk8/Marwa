import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { edittask } from '../redux/actions/todoaction';

function Edittask({el}) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [text,setText]= useState(el.task);
    const dispatch = useDispatch();



    return (
        <div>
 
 

      <Button variant="primary" onClick={handleShow}>
      Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form.Control type="text" onChange={(e)=>setText(e.target.value)}value={text}/>
        </Modal.Body>
        <Modal.Footer>
       
          <Button variant="primary" onClick={()=>{dispatch(edittask(el.id, text));handleClose();}}> ok</Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default Edittask
