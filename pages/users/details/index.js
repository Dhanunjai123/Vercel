import React from 'react'
import { useRouter } from "next/router"
import { getUserbyId } from '@/services/user.service';

function UserbyId({user}) {
    const router = useRouter()
    const userId = router.query.userId;
  return (
    <div>
       <h1>user Email  {user.email}</h1>
      <h2>user Id {user.id}</h2>
     
    </div>  
  )
}

export async function getServerSideProps(context){

     const id = context?.query?.id
     const response = await  getUserbyId (id)

     return {
        props:{
            user:response,
        }
    }
}
export default  UserbyId
