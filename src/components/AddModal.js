import React, {useState} from 'react'
import {Modal, Form, Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
const AddModal = () => {
  const dispatch = useDispatch ()
    const [newTask, setNewTask] =useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addFunc = () =>{
      if(newTask.trim()){
      dispatch({type:"add", payload:newTask})
      handleClose ()
      }
    }

    return (
        <div>
          <Button variant="primary" onClick={handleShow}>
          Add task
          </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
    <Form.Label>new task</Form.Label>
    <Form.Control type="text" placeholder="task" onChange={(e)=>setNewTask(e.target.value)}/>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addFunc}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>  
        </div>
    )
}

export default AddModal
