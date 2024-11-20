import Authfrom from "./Authfrom"

const Footer = ({type}: {type:string}) => {
  function handleSignupClick(type:string){
    console.log("Handle CLick ");
    
    <Authfrom type={type}/>
  }

  return (
    <div>
      {type== 'sign-in' ?
       <p className='cursor-pointer'>Dont have an Account? <button onClick={()=>handleSignupClick('sign-up')}> SignUp</button></p> :
       <p className='cursor-pointer'>Already have an Account? <button onClick={()=>handleSignupClick('sign-up')}> Signin</button></p>
      }
      
     
    </div>
  )
}

export default Footer
