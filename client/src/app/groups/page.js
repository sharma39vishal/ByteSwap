'use client'
import React from 'react'
import './groups.css'
import { useRouter } from 'next/navigation';
export default function Page() {
    const router=useRouter();
  return (
    <div className='live-dicussion'>

    <div class="container">
      <h1 class="title">Discussion Page</h1>
      <div class="card">
      <div className="social-container">
        </div>
          <div className='signin-form'>
          <h4 className='single-live-dis'><h4>Bug Destroyer</h4> <h4 style={{textAlign:"end"}}><button type="submit" onClick={()=>{router.push("/groups/Bug_Destroyer")}} class="login-button">Join</button></h4> </h4>
          <h4 className='single-live-dis'><h4>Data Structure and Algorithm</h4> <h4 style={{textAlign:"end"}}><button type="submit"  onClick={()=>{router.push("/groups/Data_Structures_&_Algo")}} class="login-button">Join</button></h4> </h4>
          <h4 className='single-live-dis'><h4>Core Subjects</h4> <h4 style={{textAlign:"end"}}><button type="submit"  onClick={()=>{router.push("/groups/Core_subjects")}} class="login-button">Join</button></h4> </h4>
          <h4 className='single-live-dis'><h4>Language C/C++</h4> <h4 style={{textAlign:"end"}}><button type="submit"  onClick={()=>{router.push("/groups/C_And_CPP")}} class="login-button">Join</button></h4> </h4>
         
            
          </div>
      </div>
  </div>
  
</div>
  )
}
