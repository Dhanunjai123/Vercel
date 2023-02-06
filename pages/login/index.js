import React, { useState } from "react";
import { Button } from "primereact/button";
import { setCookie } from "cookies-next"
import { useRouter } from "next/router";
import WpInput from "@/components/ui/WpInput";
import { validateEmail,validatePassword } from "@/common";
import { users } from "@/utils/constants/users";


function Login() {

     const [values, setValues] = useState({email:"",password:""});
     const [errors, setErrors] = useState({email:"",password:""})
     const router = useRouter()
     const [pageError, setPageError] = useState("");
   

     const onClick = () =>{
      router.push('/signup')
     }

     const onChangeValues = (value,key) =>{  
      setErrors(state=>({...state,[key]:""}))
      setValues(state=>({...state,[key]:value}))
     }

    const onSubmitForm = (e) => {
       e.preventDefault();
  
       let emailError = validateEmail(values?.email)
       let passwordError = validatePassword(values?.password)

       setErrors(state =>({...state,["email"] : emailError}))
       setErrors(state =>({...state,["password"] : passwordError}))

       if(emailError==="" && passwordError===""){
            vaidateUser()
       }
    };
  

    const vaidateUser = () =>{
        const userEmail = users.filter((x) => x.email === values?.email)[0];
        if((userEmail?.email === values?.email) && (userEmail?.password === values?.password)){
              setCookie('isLoggedIn',JSON.stringify(true),{ maxAge: 36000})
              router.push('/')
              return
        }else{
          setPageError("invalid credentials")
        }
        
    }


  return (
    <form onSubmit={onSubmitForm} >
      <h1>Login</h1>
      <div >
      <WpInput placeholder="Email Address" id="email" type="email" changeCallback={onChangeValues} error={errors.email} />
      </div>
      <br></br>
      <div >
      <WpInput placeholder="Password" id="password" type="password" changeCallback={onChangeValues} error={errors.password} />
      </div>
      <div>
      <Button label="Login" className="p-button-secondary"/>
      </div>
      <div className="lg__sp pt-2">Don't have an account? &nbsp;  <span className='il text-primary-200 cursor-pointer inline-block' onClick={onClick}>Sign Up </span></div>
      {pageError&&  <p className="lg__er text-red-500">{pageError}</p>}

      
    </form>
  );
  }

export default Login;
