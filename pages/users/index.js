import React from 'react'
import Link from 'next/link'
import { getUsers } from '@/services/user.service'

function Users({users}) {
 
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user)=>{
        return (
           <Link href={'/users/' +  user.id} key = {user.id}>
            <h2>
                {user?.email} | {user?.username} | {user?.name?.firstname}
            </h2>
            </Link>
        )
      })}
      
     
    </div>
  )
}

export const getServerSideProps = async () => {
    const response = await  getUsers()
    // console.log(response)

    if(!response?.isError){
    return {
        props:{
            users:response,
        }
    }
  }
}
export default Users
