"use client"
import React, { useContext, useEffect, useState } from 'react'
import './SignUp.css'
import { redirect } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import AuthContext from '../Context/authContext'

export default function Page() {
  const { UserDetails,call_again_getuser,setcall_again_getuser} = useContext(AuthContext);
  
    useEffect(() => {
      // console.log("Login Page ",UserDetails)
      if(UserDetails){
        redirect('/')
      }
    }, [UserDetails])
    
    const [ user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        usernameoremail:"",
    })
 
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        // console.log(user)
    }

    async function register() {
      try {
        // console.log("Chal Gaya")
        const {username,email,password}=user;
         if(!username||!email||!password){
            alert("Incomplete Details");
            return;
         }
         if (password.length<8){
           alert("Password Minimum eight");
           return;
         }
         var emailregex=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (!emailregex.test(email)){
          alert("Invalid Email");
          return;
        }
        await axios.post("http://localhost:5000/auth/register",user,{withCredentials: true})
        .then((res)=>{ setcall_again_getuser(!call_again_getuser);});
      } catch (err) {
        console.error(err);
      }
    }
     
    async function login() {
      try {
        // console.log("Chal Gaya login")
        const {usernameoremail,password}=user;
         if(!usernameoremail||!password){
            alert("Incomplete Details");
            return;
         }
        await axios.post("http://localhost:5000/auth/login",user,{withCredentials: true})
        .then((res)=>{ setcall_again_getuser(!call_again_getuser);});
      } catch (err) {
        console.error(err);
      }
    }

    const [issignin, setissignin] = useState(true);
    return (
        <div className='signin-singup-outer-box'>

          <div class="container">
            <h1 class="title">Sign In</h1>
            <div class="card">
            <div className="social-container">
                <a href="http://localhost:5000/auth/google" className="social">
                <Image width={"24"} height={"24"} src="/images/google.png" />
                </a>
                <a href="https://github.com/login/oauth/authorize?client_id=3d9f7d55ad5a114d9913" className="social">
                  <Image width={"24"} height={"24"} src="/images/github.png" />
                <i className="fa-brands fa-github"></i>
                </a>
                {/* <a href="#" className="social">
                <Image width={"24"} height={"24"} src="/images/linkedin.png" />
                </a> */}
              </div>
                <div className='signin-form'>
                    
                   
                   {!issignin?<> 
                   <input type="text" placeholder="Username" name="username" value={user.username} onChange={ handleChange }/>
                    <input type="text" placeholder="Email" name="email" value={user.email} onChange={ handleChange } />
                    </>:<input type="text" placeholder="Email or Username"  name="usernameoremail" value={user.usernameoremail} onChange={ handleChange }/>}
                   
                    <input type="password" placeholder="Password"  name="password" value={user.password} onChange={ handleChange }/>
                    <div class="buttons">
                    {issignin?<button onClick={()=>{setissignin(!issignin)}} class="register-link">Register</button>:<button onClick={()=>{setissignin(!issignin)}} class="register-link">Login</button>}
                       {issignin?<button type="submit" class="login-button" onClick={()=>{login()}}>Login</button>:
                        <button type="submit" class="login-button" onClick={()=>{register()}}>Register</button>}
                    </div>
                </div>
            </div>
        </div>
        
      </div>
      
    )
}

