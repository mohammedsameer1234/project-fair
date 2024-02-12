import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div style={{height:"40vh",background:"#90ee90" }} className='d-flex justify-content-between container-fluid'>
      <div className='footer-content d-flex justify-content-between container-fluid mt-5 m-lg-5 '>
        <div className='title w-25'>
            
          <h4>
               <i  class="fa-solid fa-cloud-arrow-up  me-2"></i>
                Project fair 
         </h4>
               <p>Designed and build with all the love in the world by the bootstrap team with help of contributors.</p>
               <p>coed lincecnsed MIT,does CC BY 3.0</p> 
              <p>Currently v5.3.2</p>
         </div>
        <div className='links d-flex flex-column' >
          <h3>Links </h3>
          <a style={{color:"white"}} className='text-decoration-none' >
            <Link to={'/'} style={{textDecoration:'none',color:'black'}}>landing pages</Link></a>
          <a style={{color:"white"}}className='text-decoration-none' >
            <Link to={'/home'}  style={{textDecoration:'none',color:'black'}}>Home</Link></a>
          <a style={{color:"white"}}className='text-decoration-none'>
            <Link to={'/history'}  style={{textDecoration:'none',color:'black'}}>Watch history</Link></a>
        </div>
        <div className='Guides'>
          <h3>
            Guides
          </h3>
          <h6>React</h6>
          <h6>React Bootsrap</h6>
          <h6>Vite</h6>
        </div>
        <div className=''>
          <h3>Contact Us</h3>
          <div className='d-flex   '>
            <input type="text" placeholder='enter your mail' className='form-control'/>
            <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div style={{height:'50px'}} className="fs-5 text-white d-flex justify-content-between mt-3">
              <i class="fa-solid fa-envelope"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>

        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Footer