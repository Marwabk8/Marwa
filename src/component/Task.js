
import { Button } from 'react-bootstrap'

function Task({el}) {
    return (
        <div>
            <p> {el.task}</p>
         <Button variant="success">Success</Button>{' '} 
         <Button variant="danger">Danger</Button>
         <Button variant="warning">Warning</Button>{' '}
         
        </div>
    )
}

export default Task
