(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{1860:function(e,t,n){Promise.resolve().then(n.bind(n,1929))},7630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},unstable_getImgProps:function(){return o}});let s=n(6927),a=n(5468),r=n(3579),i=n(3240),l=s._(n(4489)),o=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=i.Image},3976:function(e,t,n){"use strict";n.d(t,{H:function(){return l}});var s=n(9268),a=n(4214),r=n(6006);let i=(0,r.createContext)();function l(e){let[t,n]=(0,r.useState)(null);async function l(){try{let e=await a.Z.get("https://byteswap-f4y5.onrender.com/auth/isauthentic",{withCredentials:!0});n(e.data)}catch(e){n(null)}}(0,r.useEffect)(()=>{l()},[]);let[o,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{l()},[o]),(0,s.jsx)(i.Provider,{value:{UserDetails:t,setUserDetails:n,call_again_getuser:o,setcall_again_getuser:c},children:e.children})}t.Z=i},1929:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n(9268),a=n(6006);n(6368);var r=n(6008),i=n(4214),l=n(6394),o=n.n(l),c=n(3976);function u(){let{UserDetails:e,call_again_getuser:t,setcall_again_getuser:n}=(0,a.useContext)(c.Z);(0,a.useEffect)(()=>{e&&(0,r.redirect)("/")},[e]);let[l,u]=(0,a.useState)({username:"",email:"",password:"",usernameoremail:""}),d=e=>{let{name:t,value:n}=e.target;u({...l,[t]:n})};async function h(){try{let{username:e,email:s,password:a}=l;if(!e||!s||!a){alert("Incomplete Details");return}if(a.length<8){alert("Password Minimum eight");return}if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(s)){alert("Invalid Email");return}await i.Z.post("https://byteswap-f4y5.onrender.com/auth/register",l,{withCredentials:!0}).then(e=>{n(!t)})}catch(e){console.error(e)}}async function m(){try{let{usernameoremail:e,password:s}=l;if(!e||!s){alert("Incomplete Details");return}await i.Z.post("https://byteswap-f4y5.onrender.com/auth/login",l,{withCredentials:!0}).then(e=>{n(!t)})}catch(e){console.error(e)}}let[f,g]=(0,a.useState)(!0);return(0,s.jsx)("div",{className:"signin-singup-outer-box",children:(0,s.jsxs)("div",{class:"container",children:[(0,s.jsx)("h1",{class:"title",children:"Sign In"}),(0,s.jsxs)("div",{class:"card",children:[(0,s.jsxs)("div",{className:"social-container",children:[(0,s.jsx)("a",{href:"https://byteswap-f4y5.onrender.com/auth/google",className:"social",children:(0,s.jsx)(o(),{width:"24",height:"24",src:"/images/google.png"})}),(0,s.jsxs)("a",{href:"https://github.com/login/oauth/authorize?client_id=3d9f7d55ad5a114d9913",className:"social",children:[(0,s.jsx)(o(),{width:"24",height:"24",src:"/images/github.png"}),(0,s.jsx)("i",{className:"fa-brands fa-github"})]})]}),(0,s.jsxs)("div",{className:"signin-form",children:[f?(0,s.jsx)("input",{type:"text",placeholder:"Email or Username",name:"usernameoremail",value:l.usernameoremail,onChange:d}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"text",placeholder:"Username",name:"username",value:l.username,onChange:d}),(0,s.jsx)("input",{type:"text",placeholder:"Email",name:"email",value:l.email,onChange:d})]}),(0,s.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:l.password,onChange:d}),(0,s.jsxs)("div",{class:"buttons",children:[f?(0,s.jsx)("button",{onClick:()=>{g(!f)},class:"register-link",children:"Register"}):(0,s.jsx)("button",{onClick:()=>{g(!f)},class:"register-link",children:"Login"}),f?(0,s.jsx)("button",{type:"submit",class:"login-button",onClick:()=>{m()},children:"Login"}):(0,s.jsx)("button",{type:"submit",class:"login-button",onClick:()=>{h()},children:"Register"})]})]})]})]})})}},6368:function(){},6394:function(e,t,n){e.exports=n(7630)},6008:function(e,t,n){e.exports=n(8170)}},function(e){e.O(0,[348,240,253,961,744],function(){return e(e.s=1860)}),_N_E=e.O()}]);