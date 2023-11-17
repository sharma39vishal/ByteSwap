'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Discussion.css'
import SingleLiveDiscuss from './SingleLiveDiscuss';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  const [content, setcontent] = useState([]);
  const callapi = async () => {
    axios.get("https://byteswap-f4y5.onrender.com/discuss/")
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
    <div className='flex justify-center items-center flex-col h-screen '>
      <h1 className='text-2xl text-gray-200 font-semibold m-2 uppercase '>Discussion</h1>
      <button className='absolute right-14 z-0 top-16 p-2 m-1 bg-blue-900 rounded-md ' onClick={() => { router.push(`/askquestion`) }}>ASK Question</button>

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
                <tr key={index} style={{ cursor: "pointer" }} onClick={() => { router.push(`/discussion/${item._id}`) }} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
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
