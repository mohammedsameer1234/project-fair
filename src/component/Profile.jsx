import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import uploadProfile from '../assets/images/P.jpg'
function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className='d-flex rounded p-2 justify-content-between'>
      <h2>PROFILE</h2>
      <button  onClick={() => setOpen(!open)}   className='btn btn-outline-warning'><i className='fa-solid fa-chevron-down'></i></button>
    </div>
    <Collapse in={open}>
        <div className='row  shadow p-3 justify-content-center mt-3' id="example-collapse-text">
      <label className='text-center'>
        <input style={{display:'none'}} type='file'/>
        <img className='rounded-circle' width={'200px'} height={'200px'} src={uploadProfile} alt='uploaded image'/>
      </label>
      <input type='text' placeholder='enter Github URL' className='form-contol'/>
      <input type='text' placeholder='enter Linked in URL' className='form-contol mt-3'/>
      <button className='btn btn-danger mt-3'>update</button>
        </div>
      </Collapse>
    </>
  )
}

export default Profile