// import axios from 'axios'

const baseURL = process.env.USERS_API_ENDPOINT

// const API = axios.create({baseURL:baseURL})


export const getUsersApi = async () =>{
    const response = await fetch(baseURL+'/users')
    const data = await response.json()
    return data
}
  
export const getUserbyIdApi = async (id) =>{
    const response = await fetch(baseURL + `/users/${id}`)
    const data = await response.json()
    return data
}
  