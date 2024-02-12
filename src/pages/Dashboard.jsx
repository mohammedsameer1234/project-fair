import React, {useState, useEffect} from 'react'
import Header from '../component/Header'
import MyProjects from '../component/MyProjects'
import Profile from '../component/Profile'

function Dashboard() {
  const [username,setusername]=useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setusername(sessionStorage.getItem("username"))
    }
    else{
      setusername("")
    }
  },[])
  return (
   <>
      <Header insideDashboard/>
      <div style={{marginTop:'60px'}} className='dashboard container'>
        <h1 className='fw-bolder'> Welcome <span className='text-warning'> {username} </span></h1>
        <div className="row mt-5">
          <div className="col-lg-8">
            <MyProjects/>
          </div>
          <div className="col-lg-4">
            <Profile/>
          </div>
        </div>
      </div>
   </>
  )
}

export default Dashboard