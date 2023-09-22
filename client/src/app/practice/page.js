'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Practice.css'
import DsaSheet from './DsaSheet'
import CoreSubject from './CoreSubject'
import PracticeSingle from './PracticeSingle';
import Link from 'next/link';
import TopicTags from './TopicTags';
import TrendCompany from './TrendCompany';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router=useRouter();
  const [content, setcontent] = useState([]);
  const callapi = async () => {
    axios.get("https://byteswap-f4y5.onrender.com/questions/")
      .then((res) => {
        setcontent(res.data);
        console.log("QUESTION :", res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    callapi();
  }, [])

  return (
    <div className='practice-main'>
      <div className="discussion-section-2-container">
      <h1 style={{textAlign:"center"}}>Questions</h1>
      <br/>
      <br/>
      <table class="w3-table" style={{width:"40%"}}>
  <tr>
    <th>S No.</th>
    <th>Title</th>
    <th>Tags</th>
  </tr>
            {content.map((item,index)=>{
              return  (
          //     <div className='singlediscuss' onClick={()=>{router.push(`/practice/${item._id}`)}} key={index} style={{cursor:"pointer"}}>
          //     <h3 className='title-one1'><p>{++index}. {item.Title}</p><p>{item.tags[0]}</p></h3>
          // </div> 
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
