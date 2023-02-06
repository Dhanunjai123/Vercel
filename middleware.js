import { NextResponse } from "next/server";


const noAuthPages = ['/login']
const authPages = [ '/', '/users' ]

const Auth = (request) => {
    try{

      let cookies = request?.cookies?.getAll()
      // console.log(cookies)

      let isLoggedInPresent = JSON.parse(cookies?.filter(e => e?.name === 'isLoggedIn')[0]?.value)===true
      //  console.log(isLoggedInPresent);

      if(isLoggedInPresent){return true}
         return false
      }
    catch(e){
      return false
    }
  }

export function middleware(request){
  
    let pathName = request?.nextUrl?.pathname

    if (noAuthPages?.includes(pathName)){
        if(Auth(request)){
          return NextResponse.redirect(new URL('/', request.url))
        }
    }

    if(authPages?.includes(pathName)){
        if(!Auth(request)){
          return NextResponse.redirect(new URL('/login', request.url))
        }
    } 
}


