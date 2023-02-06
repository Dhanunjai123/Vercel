import { useRouter } from 'next/router'


function  InlineLink({ link, text, callback }) {

  const router = useRouter()

  const onClick = () =>{
    if(callback){callback()}
    if(!link){return}
    router.push(link)
  }

  return <>
  
    <span className='il text-primary-200 cursor-pointer inline-block' onClick={onClick} href={link}>
      {text}
    </span>

    <style jsx>{
      `
      .il{transition:color 350ms ease-in-out,box-shadow 350ms;}
      .il:hover{box-shadow:inset 0 -2px 0 0 #f5a327;}
      `
    }</style>

  </>
}

export default InlineLink