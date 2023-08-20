'use client'
import React, { useContext, useState } from 'react'
import './header.css'
import AuthContext from '../Context/authContext'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';



export default function Header() { 
  const [showNavbar, setShowNavbar] = React.useState(false);

  const { UserDetails } = useContext(AuthContext);
  // console.log(UserDetails);
  const [avatardropdown, setavatardropdown] = useState(false);

  const logout = async () => {
    await axios.get("/auth/logout").then(() => { window.location.reload(); })
  }

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          <Image src={"/images/logo.png"} width={"140"} height={"40"} />
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link href="/groups">Live Chat</Link>
            </li>
            <li>
              <Link href="/discussion">Discussion</Link>
            </li>
            <li>
              <Link href="/practice">Problems</Link>
            </li>
            <li>
              <Link href="/achievers">Guidance</Link>
            </li>
            <li>
              
            {!UserDetails ? <Link  href="/signin">
              <div className='login-button'>
                Sign In
              </div>
                </Link> : <>
                <Link  href="" onClick={() => { logout() }}>
              <div className='login-button'>
                LogOut
              </div>
                </Link>
                {/* <div >
                  <Image width={"40"} height={"40"} src={UserDetails?.profilePic} alt="profile Photo" onClick={() => { setavatardropdown(!avatardropdown) }} />
                </div>
                {avatardropdown ?
                  <div className='avatar-dropdown'>
                    <a href={`/userprofile/${UserDetails.username}`}>Profile</a>
                    <a onClick={() => { logout() }}>LogOut</a>
                  </div> : null} */}
              </>}
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);



