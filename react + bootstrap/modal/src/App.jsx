import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function App() {

  const [isClick, setIsClick] = useState(false)
  

  const handleClose = () => setIsClick(false)
  const handleShow = () => setIsClick(true)
  return (
    <>

    <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      {
        isClick && 
            <Modal show={isClick}onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
      }
    </>
  )
}

export default App
