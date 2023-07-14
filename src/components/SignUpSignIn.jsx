import React, { useState,useRef,useEffect } from 'react'
import BackG from './BackG'
const SignUpSignIn = () => {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const [showHome , setShowHome] = useState(false)
    const LocalSignUp = localStorage.getItem("signUp")
    useEffect(()=>{
        if(LocalSignUp){
            setShowHome(true)
        }

    })
    const handleSignUp = ()=> {
        if(name.current.value&&email.current.value&&password.current.value){
            localStorage.setItem("name" , name.current.value)
            localStorage.setItem("email" , email.current.value)
            localStorage.setItem("password" , password.current.value)
            localStorage.setItem("signUp" , email.current.value)
            alert("Account Created Successfully")
            window.location.reload()
        }

    }
  return (
    <div>
    {showHome?<BackG></BackG>:
    <div>
    <div><input placeholder="name" type="text" ref={name}></input></div>
    <div><input placeholder="email" type="email" ref={email}></input></div>
    <div><input placeholder="password" type="password" ref={password}></input></div>
    <div><button onClick={handleSignUp}>Sign Up</button></div>
    
    </div>
  }
    </div>
  )
}

export default SignUpSignIn
