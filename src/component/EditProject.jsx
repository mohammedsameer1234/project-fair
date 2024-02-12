import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadProject from '../assets/images/download.png'
function EditProject() {
  const [show,setShow] = useState(false)

  const handleShow = ()=> setShow(true)
  const handleClose = ()=> setShow(false)
  return (
    <>
<button onClick={handleShow} className="btn"><i class="fa-solid fa-pen-to-square fa-2x"></i></button>    <Modal size='lg' className='text-center'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
            <label className='text-center'> 
         <input style={{display:'none'}} type='file' />
         <img style={{height:'250px'}}  className='w-100'  src={uploadProject} alt="upload project image" />
         </label>
            </div>
            <div className="col-lg-6">
            <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Project Title'    />
               </div>
                <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Language Used' />
                </div>
                <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Github Link' />
                </div>
                <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Website Link'  />
                </div>
                <div className=''>
                    <input type="text" className="form-control" placeholder='Project Overview' />
                </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn-success'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject