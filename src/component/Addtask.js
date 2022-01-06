
import React from 'react'
import { Form,Button } from 'react-bootstrap'

function Addtask() {
    return (
        <Form>
    <Form.Control type="text" placeholder="Enter task" />
    <Button variant="secondary">Addtask</Button>{' '}
        </Form>
    )
}

export default Addtask
