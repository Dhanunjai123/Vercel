import { getUsersApi } from "@/api/users.api"
import { getUserbyIdApi } from "@/api/users.api"

export const getUsers = async() =>{
    try{
      const resp = await getUsersApi()
    //   console.log(resp)
      return resp
    }
    catch(e){
      return {isError:true,message:"error"}
    }
  }

  export const getUserbyId = async(id) =>{
    try{
      const resp = await getUserbyIdApi(id)
    //   console.log(resp)
      return resp
    }
    catch(e){
      return {isError:true,message:"error"}
    }
  }