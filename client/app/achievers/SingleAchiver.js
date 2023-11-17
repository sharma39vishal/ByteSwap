import React from 'react'
import './Achievers.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SingleAchiever(props) {
  const router = useRouter();
  return (
    
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700 cursor-pointer" onClick={()=>router.push(`/achievers/${props.id}`)}>
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            {/* <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3> */}
            <p class="my-4">{props.achiever_story.slice(0, 250)} {props.achiever_story.length > 250 ? " ..." : null}</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src={props.achiever_image} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>{props.achiever_name}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 ">{props.achiver_designation}</div>
            </div>
        </figcaption>    
    </figure>

  )
}
