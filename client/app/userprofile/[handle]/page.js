"use client"
import React, {  useContext, useEffect, useState } from 'react'
import './UserProfile.css'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import axios from 'axios';
import DeleteAccount from './DeleteAccount';
import AuthContext from '@/app/Context/authContext';

export default function Page({params}) {
  const { UserDetails,call_again_getuser,setcall_again_getuser} = useContext(AuthContext);
  const [CurrDetails, setCurrDetails] = useState(null)
  const [delacc, setdelacc] = useState(false);
  
//   console.log("USERNAME ",params.handle)
  // useEffect(() => {
    // if(!CurrDetails){
    //   redirect('/')
    // }
    // console.log(CurrDetails)
  // }, [CurrDetails])

  useEffect(async () => {
    await axios.get(`https://byteswap-f4y5.onrender.com/profile/${params.handle}`,{withCredentials: true})
    .then((res)=>{setCurrDetails(res.data)});
  }, [])
  
  
  return (
    <div className="userprofile-outer-box">
      <div class="container">
            <div class="card">
                <div className='signin-form'>
                <Image width={"150"} height={"150"}  src={CurrDetails?.profilePic} alt="User image" className="image" />
                </div>
                  <h2>@{CurrDetails?.username}</h2>
                  <p>{CurrDetails?.email}</p>
                  {UserDetails&&CurrDetails&&UserDetails?._id===CurrDetails?._id?<div class="buttons">
                <button type="submit" class="login-button" onClick={()=>{setdelacc(true)}}>Change Password</button>
                <button type="submit" class="login-button" onClick={()=>{setdelacc(true)}}>Delete Account</button>
                </div>:null}
            </div>
        </div>
      <DeleteAccount setdelacc={setdelacc} delacc={delacc}/>
    </div>
  )
}
