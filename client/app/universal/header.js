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
    await axios.get("/api/auth/logout",{withCredentials: true}).then(() => { window.location.reload(); })
  }

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          {/* <Image src={"/images/logo.png"} width={"140"} height={"40"} /> */}
          <svg
  width="180"
  height="52.04672843384711"
  viewBox="0 0 369.66666666666663 83.33307324078893"
  className="css-1j8o68f"
>
  <defs id="SvgjsDefs1333" />
  <g
    id="SvgjsG1334"
    featurekey="HdFLvg-0"
    transform="matrix(0.9469680549713106,0,0,0.9469680549713106,-5.681734727250197,-5.681750531484665)"
    fill="#eaedf1"
  >
    <g xmlns="http://www.w3.org/2000/svg" transform="translate(0,-952.36218)">
      <path
        style={{
          textIndent: 0,
          textTransform: "none",
          direction: "ltr",
          blockProgression: "tb",
          baselineShift: "baseline",
          color: "",
          enableBackground: "accumulate"
        }}
        d="m 13.540789,1013.168 c -4.1612604,0 -7.5408665,3.3922 -7.5408665,7.5693 0,4.1771 3.3796061,7.605 7.5408665,7.605 0.813543,0 1.613976,-0.1361 2.383228,-0.3928 12.281102,18.8997 36.649842,23.2608 54.493227,13.032 0.521221,-0.2991 0.724607,-1.0475 0.426614,-1.571 -0.297992,-0.5234 -1.043503,-0.7275 -1.565078,-0.4284 -16.772953,9.6153 -39.67122,5.6292 -51.327282,-12.1037 1.894251,-1.3812 3.130157,-3.6195 3.130157,-6.1411 0,-4.1771 -3.379252,-7.5693 -7.540866,-7.5693 z"
        fill="#eaedf1"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="none"
        marker="none"
        visibility="visible"
        display="inline"
        overflow="visible"
      />
      <path
        style={{
          textIndent: 0,
          textTransform: "none",
          direction: "ltr",
          blockProgression: "tb",
          baselineShift: "baseline",
          color: "",
          enableBackground: "accumulate"
        }}
        d="m 70.417244,970.57299 c -0.951023,0.12132 -1.237323,1.69026 -0.391181,2.14225 13.429842,8.21899 20.928543,24.30182 17.64248,40.55986 -0.392953,-0.067 -0.80185,-0.107 -1.209331,-0.107 -4.161259,0 -7.540866,3.3922 -7.540866,7.5692 0,4.1771 3.379607,7.605 7.540866,7.605 4.16126,0 7.540866,-3.4279 7.540866,-7.605 0,-2.9516 -1.686968,-5.51 -4.161614,-6.748 3.607441,-17.29107 -4.331338,-34.48188 -18.638503,-43.23773 -0.189921,-0.12122 -0.415984,-0.18423 -0.64063,-0.17852 -0.04784,-0.003 -0.09425,-0.003 -0.142087,0 z"
        fill="#eaedf1"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="none"
        marker="none"
        visibility="visible"
        display="inline"
        overflow="visible"
      />
      <path
        style={{
          textIndent: 0,
          textTransform: "none",
          direction: "ltr",
          blockProgression: "tb",
          baselineShift: "baseline",
          color: "",
          enableBackground: "accumulate"
        }}
        d="m 50.000001,958.36218 c -4.012441,0 -7.27441,3.16987 -7.505079,7.14083 -17.197086,3.19362 -29.727637,16.85266 -32.5821254,33.06201 a 1.1383515,1.1426463 0 1 0 2.2407874,0.39275 c 2.681221,-15.22486 14.388307,-28.07084 30.518858,-31.1697 0.826653,3.28539 3.802677,5.71266 7.327559,5.71266 4.161259,0 7.540866,-3.39219 7.540866,-7.56928 0,-4.17708 -3.379607,-7.56927 -7.540866,-7.56927 z"
        fill="#eaedf1"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="none"
        marker="none"
        visibility="visible"
        display="inline"
        overflow="visible"
      />
    </g>
  </g>
  <g
    id="SvgjsG1335"
    featurekey="VomJeJ-0"
    transform="matrix(3.2695760760085637,0,0,3.2695760760085637,99.07650855288419,-6.2633623673095755)"
    fill="#e2e8ef"
  >
    <path d="M1.2 19.5 l0 -14.08 l0.14 -0.14 l1.18 0 q0.92 0 1.32 0.42 t0.4 1.46 l0 3.34 q1.04 -0.68 2.32 -0.68 q1.76 0 2.65 1.42 t0.89 3.82 q0 1.14 -0.36 2.08 t-1 1.62 t-1.56 1.05 t-2.02 0.37 q-2.28 0 -3.96 -0.68 z M5.62 12.32 q-0.78 0 -1.38 0.66 l0 4.88 q0.2 0.04 0.43 0.06 t0.49 0.02 q1.74 0 1.74 -3.02 q0 -2.58 -1.28 -2.6 z M20.54 10.34 l-2.46 9.4 q-0.58 2.16 -1.54 3.32 q-1.1 1.32 -3.38 1.32 q-1.22 0 -2.42 -0.4 q-0.06 -0.54 0.12 -1.21 t0.5 -1.03 q0.9 0.3 1.8 0.3 q1.48 0 1.96 -1.62 l0.08 -0.28 q-1.74 0 -2.08 -1.26 l-2.32 -8.62 q0.92 -0.42 1.72 -0.42 t1.17 0.3 t0.55 1.04 l0.92 3.84 q0.14 0.54 0.46 2.64 q0.02 0.14 0.16 0.14 l1.74 -7.76 q0.48 -0.14 1.3 -0.14 q0.92 0 1.6 0.22 z M28.259999999999998 10 q0.12 0.56 0.12 1.12 t-0.12 1.1 l-2.38 -0.04 l0 4.6 q0 0.94 0.88 0.94 l1.12 0 q0.26 0.72 0.26 1.32 t-0.08 0.86 q-1.48 0.2 -2.72 0.2 q-2.52 0 -2.52 -2.78 l0 -5.12 l-1.56 0.02 q-0.14 -0.5 -0.14 -1.09 t0.14 -1.13 l1.56 0.04 l0 -1.16 q0 -1.02 0.39 -1.45 t1.31 -0.43 l1.22 0 l0.14 0.14 l0 2.9 z M37.56 16.02 l-5.22 0 q0.04 0.9 0.46 1.4 t1.38 0.5 q0.48 0 1.11 -0.14 t1.45 -0.46 q0.66 0.68 0.82 1.84 q-1.6 1.14 -3.92 1.14 q-1.26 0 -2.11 -0.4 t-1.38 -1.12 t-0.75 -1.7 t-0.22 -2.14 q0 -1.12 0.27 -2.07 t0.82 -1.65 t1.4 -1.1 t1.99 -0.4 q0.96 0 1.73 0.32 t1.31 0.88 t0.83 1.34 t0.29 1.7 q0 1.22 -0.26 2.06 z M32.32 13.86 l2.64 0 l0 -0.22 q0 -0.74 -0.33 -1.22 t-0.99 -0.48 q-0.64 0 -0.95 0.45 t-0.37 1.47 z M38.919999999999995 19.32 q0.02 -0.52 0.27 -1.14 t0.59 -0.98 q1.6 0.84 2.78 0.84 q0.56 0 0.86 -0.19 t0.3 -0.51 q0 -0.6 -0.92 -0.9 l-1.1 -0.42 q-2.5 -0.92 -2.5 -3 q0 -1.52 1.05 -2.41 t2.83 -0.89 q0.88 0 1.94 0.25 t1.74 0.59 q0.04 0.56 -0.22 1.23 t-0.64 0.95 q-1.68 -0.76 -2.8 -0.76 q-0.4 0 -0.61 0.18 t-0.21 0.46 q0 0.48 0.76 0.76 l1.24 0.44 q2.66 0.94 2.66 3.22 q0 1.5 -1.1 2.38 t-3.14 0.88 t-3.78 -0.98 z M49.419999999999995 18.66 l-1.94 -8.46 q0.98 -0.36 1.7 -0.36 q0.74 0 1.06 0.32 t0.46 1.02 l0.62 3.22 q0.44 2.18 0.52 3.12 q0.02 0.18 0.16 0.18 l1.1 -7.58 q0.7 -0.14 1.84 -0.14 t1.82 0.14 l1.12 7.4 q0.02 0.18 0.16 0.18 q0.36 -2.38 0.54 -3.3 l0.9 -4.36 q0.48 -0.14 1.3 -0.14 q1.02 0 1.54 0.26 l0.1 0.2 l-2.34 9.64 q-0.74 0.12 -2 0.12 t-1.7 -0.28 t-0.56 -1.14 l-0.32 -2.14 q-0.3 -1.86 -0.52 -3.78 l-0.12 0 q-0.02 0.16 -0.52 3.74 l-0.56 3.48 q-0.96 0.12 -2.12 0.12 t-1.61 -0.3 t-0.63 -1.16 z M72.06 18.56 q-0.1 0.42 -0.38 0.9 t-0.58 0.7 q-1.4 -0.04 -2.16 -1.06 q-1.3 1.2 -2.82 1.2 q-0.78 0 -1.36 -0.25 t-0.98 -0.67 t-0.6 -0.97 t-0.2 -1.15 q0 -0.86 0.31 -1.51 t0.85 -1.08 t1.26 -0.65 t1.54 -0.22 q0.46 0 0.81 0.01 t0.61 0.03 l0 -0.38 q0 -1.26 -1.3 -1.26 q-0.84 0 -2.94 0.64 q-0.6 -0.7 -0.76 -2.18 q0.48 -0.18 1.07 -0.34 t1.21 -0.28 t1.22 -0.19 t1.08 -0.07 q0.7 0 1.35 0.2 t1.14 0.61 t0.78 1.06 t0.29 1.55 l0 4.06 q0 0.92 0.56 1.3 z M66.02 17.06 q0 0.94 1.08 0.94 q0.56 0 1.26 -0.58 l0 -1.6 q-0.4 -0.02 -0.67 -0.03 t-0.41 -0.01 q-1.26 0 -1.26 1.28 z M78.74 20.2 q-0.92 0 -1.84 -0.42 l0 2.66 q0 1.04 -0.38 1.46 t-1.34 0.42 l-1.2 0 l-0.14 -0.14 l0 -14.16 l0.14 -0.14 l0.82 0 q1.14 0 1.7 0.98 q1.14 -1.14 2.78 -1.14 q0.84 0 1.48 0.37 t1.09 1.05 t0.68 1.64 t0.23 2.16 t-0.31 2.18 t-0.85 1.66 t-1.27 1.05 t-1.59 0.37 z M78.36 12.219999999999999 q-0.84 0 -1.46 0.8 l0 4.4 q0.76 0.46 1.3 0.46 q1.36 0 1.36 -3.02 q0 -2.64 -1.2 -2.64 z" />
  </g>
</svg>

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



