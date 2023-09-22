'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Discussion.css'
import SingleLiveDiscuss from './SingleLiveDiscuss';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router=useRouter();
  const [content, setcontent] = useState([]);
  const callapi = async () => {
    axios.get("http://localhost:5000/discuss/")
      .then((res) => {
        setcontent(res.data);
        console.log("Discussion :", res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    callapi();
  }, [])
  const [image, setimage] = useState('/images/dbmsDiscuss.png');
  return (
    <div className='discussion-main'>
      {/* <div className="discussion-section-1-container">
        <h1 style={{color:"#0288D1",margin:"1em 4em 0em 4em"}}>Click below links to join Live Discussion</h1>
        <div className="live-single-discuss-container">
          <div className='discussion-description'>
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Database_Management_System' discussImage='\images\dbmsDiscuss.png' />
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Data_Structure_And_Algo.' discussImage='\images\dsa-discuss.jpg' />
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Computer_Networks' discussImage='\images\networkDiscuss.png' />
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Operating_Systems' discussImage='\images\OsDiscuss.jpg' />
            <SingleLiveDiscuss image={image} setimage={setimage} discussDescription='Object_Oriented_Programming' discussImage='\images\discussOops.png' />
          </div>
          <div className="live-discussion-image">
            <img src={image} alt="Loading Error" />
          </div>
        </div>
      </div> */}

      {/* Section 2 Discussion Page */}
      <h1 className='ask-discussion' style={{textAlign:"end"}}>
        <button className='add-query-button-que' onClick={()=>{router.push(`/askquestion`)}}>ASK Question</button>
      </h1>
      <div className="discussion-section-2-container">
      <h1 style={{textAlign:"center"}}>Discussion Questions</h1>
      <br/>
      <br/>
      <table class="w3-table">
  <tr>
    <th>S No.</th>
    <th>Title</th>
    <th>Tags</th>
  </tr>
            {content.map((item,index)=>{
              return  (
          <tr key={index} style={{cursor:"pointer"}} onClick={()=>{router.push(`/discussion/${item._id}`)}}>
          <td>{++index}</td>
          <td>{item.Title}</td>
          <td>
            {item.tags.map((singletags)=>{
              return <>{singletags} </>
            })}
            </td>
        </tr>
          )
            })}
      </table>
      </div>
    </div>
  )
}
