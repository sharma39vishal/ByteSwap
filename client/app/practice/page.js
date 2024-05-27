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
    axios.get("/api/questions/")
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
  //   <div className='practice-main'>
  //     <div className="discussion-section-2-container">
  //     <h1 style={{textAlign:"center"}}>Questions</h1>
  //     <br/>
  //     <br/>
  //     <table class="w3-table" style={{width:"40%"}}>
  // <tr>
  //   <th>S No.</th>
  //   <th>Title</th>
  //   <th>Tags</th>
  // </tr>
  //           {content.map((item,index)=>{
  //             return  (
  //         //     <div className='singlediscuss' onClick={()=>{router.push(`/practice/${item._id}`)}} key={index} style={{cursor:"pointer"}}>
  //         //     <h3 className='title-one1'><p>{++index}. {item.Title}</p><p>{item.tags[0]}</p></h3>
  //         // </div> 
  //         <tr key={index} style={{cursor:"pointer"}} onClick={()=>{router.push(`/discussion/${item._id}`)}}>
  //         <td>{++index}</td>
  //         <td>{item.Title}</td>
  //         <td>
  //           {item.tags.map((singletags)=>{
  //             return <>{singletags} </>
  //           })}
  //           </td>
  //       </tr>
  //         )
  //           })}
  //     </table>
  //     </div>
  //   </div>
  <div className='flex justify-center items-center flex-col h-screen '>
  <h1 className='text-2xl text-gray-200 font-semibold m-2 uppercase '>Practice Question</h1>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            S No.
          </th>
          <th scope="col" class="px-6 py-3">
            Name
          </th>
          <th scope="col" class="px-6 py-3">
            Category
          </th>
        </tr>
      </thead>
      <tbody>
        {content.map((item, index) => {
          return (
            <tr key={index} style={{ cursor: "pointer" }} onClick={() => { router.push(`/practice/${item._id}`) }} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {++index}
              </th>
              <td class="px-6 py-4">
                {item.Title}
              </td>
              <td class="px-6 py-4">
                {item.tags.map((singletags) => {
                  return <>{singletags} </>
                })}
              </td>
            </tr>
          )
        })}

      </tbody>
    </table>
  </div>




</div>

  )
}
