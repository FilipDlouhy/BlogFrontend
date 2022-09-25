import React from 'react'
import { useState } from 'react'





function SignUpForm() {
    const [username,setUserName] = useState()
const [errorText,setrErrorText] = useState()
const [password,setPassword] = useState()

const [checkPassword,setCheckPassword] = useState()

  return (
    <form className='signUpForm'>
        <div>
        <h1>Sing Up Form</h1>
        <p className='errorText'>{errorText}</p>
        </div>
    
<div>
    <label for="username">Your Username:</label>
    <input onChange={(e)=>{
     setUserName (e.target.value)

    }} type="Text" name="username" id="username" placeholder='username'></input>
</div>
<div>
    <label for="password">Your Password:</label>
    <input onChange={(e)=>{
    setPassword(e.target.value)

    }} type="password" name="password" id="password" placeholder='password'></input>
</div>
<div>
    <label for="checkPassword">Confirm Password:</label>
    <input onChange={(e)=>{
     setCheckPassword(e.target.value)

    }} type="password" name="checkPassword" id="checkPassword" placeholder='checkPassword'></input>
</div>

<button onClick={(e)=>{
    e.preventDefault()

if (password === checkPassword){

   
let user = {username:username,password:password}

fetch('/api/UserCreate', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  }).then(() => {
    console.log('new blog added');
  })

}else{
    setrErrorText("Wrong Password Chap")
}




}} >Register</button>

    </form>
  )
}

export default SignUpForm