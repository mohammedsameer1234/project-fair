

//register
import {SERVER_URL} from "./Serverurl"
import { commonAPI } from "./commonAPI"

export const registerAPI= async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")

}
// login API
export const loginAPI =async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}
// add project
export const addProjectAPI =async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addproject`,reqBody,reqHeader)
}

//get home projects

export const getHomeProjectsAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-projects`,"","")
}

//allproject

export const getAllprojectsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects`,"",reqHeader)
}

//get userprojects 

export const getUserprojectsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
}


