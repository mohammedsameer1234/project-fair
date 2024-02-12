import React, { useEffect, useState } from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject'




function MyProjects() {

  
  const[allprojects,setallprojects] = useState([])
  const getUserprojectsAPI = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader ={
        "Content-Type": "multipart/form-data",
        "Authorization" : `Bearer  ${token}`
      }
      const result =await getUserprojectsAPI(reqHeader)
      if(result.status === 200){
        setallprojects(result.data)
      }else{
        console.log(result);
      }
    }
  }
  console.log(allprojects);
  useEffect(()=>{
    getUserprojects();

  },[]);
  return (
    <div className='card shadow p-3 '>
       <div className='d-flex justify-content-between '>
        <h2>MY PROJECTS</h2>
        <div> <AddProject/> </div>
       </div>
       <div className='mt-4'>
        <div className='d-flex border rounded justify-content-between align-items-center text-danger mb-3 p-2'>
          <h5>Project title</h5>
          <div className='d-flex icons align-items-center'>
            <EditProject/>
            <a target='_blank' className='btn' href="https://github.com/sanchu-git/Project-Fair"><i className="fa-brands fa-github fa-2x"></i></a>
          <button className='btn'><i className="fa-solid fa-trash fa-2x"></i></button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default MyProjects