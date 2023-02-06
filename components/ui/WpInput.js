import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea'

function WpInput({label,type,placeholder,value,error,id,changeCallback}) {


  const onChange = (e) =>{
    if(changeCallback){
      changeCallback(e.target.value,id)
    }
  }
  
  return (
    <div>
        <div>
            {label&& <p>{label}</p>}
            
            {type==="text-area" ?
            <InputTextarea placeholder={placeholder}  onChange={onChange}  value={value}/>
            :
            <InputText className='w-full' placeholder={placeholder} type={type} onChange={onChange}  value={value} /> 
            }
           
        </div>

           {error&&<small id="username2-help" className="p-error block">{error}</small>}
    
    </div>
  )
}

export default WpInput
