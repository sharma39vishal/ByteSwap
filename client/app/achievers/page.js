"use client"
import React, { useEffect, useState } from 'react'
import SingleAchiever from './SingleAchiver'
import './Achievers.css'
import axios from 'axios';

export default function Page() {
  const [content, setcontent] = useState([]);

  const callapi = async () => {
    axios.get("https://byteswap-f4y5.onrender.com/achiver/")
      .then((res) => {
        setcontent(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    callapi();
  }, [])

  return (
    <div className='achievers-main'>
      <div class="grid mb-8 border border-gray-200  shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        {content.map((item,index) => {
          return <SingleAchiever key={index} achiever_image={item.images}
            achiever_name={item.name} achiver_designation={item.designation}
            achiever_story={item.discription}
            connect={item.connect} id={item._id}/>
        })}
      </div>
    </div>
  )
}