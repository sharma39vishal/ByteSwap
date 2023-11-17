(()=>{var e={};e.id=583,e.ids=[583],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6137:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>l});var r=s(7096),a=s(6132),i=s(7284),n=s.n(i),o=s(2564),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);s.d(t,c);let l=["",{children:["userprofile",{children:["[handle]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3717)),"D:\\My Projects\\ByteSwap\\client\\src\\app\\userprofile\\[handle]\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7857)),"D:\\My Projects\\ByteSwap\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\My Projects\\ByteSwap\\client\\src\\app\\userprofile\\[handle]\\page.js"],d="/userprofile/[handle]/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/userprofile/[handle]/page",pathname:"/userprofile/[handle]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7678:(e,t,s)=>{Promise.resolve().then(s.bind(s,1061))},1061:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Page});var r=s(784),a=s(9885);s(1199);var i=s(2451),n=s.n(i);s(7114);var o=s(4997);function DeleteAccount({delacc:e,setdelacc:t}){let callapi=async()=>{console.log("API Call"),await o.Z.get("https://byteswap-f4y5.onrender.com/profile/deleteaccount",{withCredentials:!0}).then(e=>{alert("Account was successfuly deactivated"),window.location.reload()}).catch(e=>{console.log(e)})};return r.jsx("div",{className:e?"card":"card make-display-none",children:(0,r.jsxs)("div",{className:"header",children:[r.jsx("div",{className:"image",children:r.jsx("svg",{"aria-hidden":"true",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",strokeLinejoin:"round",strokeLinecap:"round"})})}),(0,r.jsxs)("div",{className:"content",children:[r.jsx("span",{className:"title",children:"Deactivate account"}),r.jsx("p",{className:"message",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."})]}),(0,r.jsxs)("div",{className:"actions",children:[r.jsx("button",{className:"desactivate",onClick:()=>{callapi()},type:"button",children:"Deactivate"}),r.jsx("button",{className:"cancel",type:"button",onClick:()=>{t(!1)},children:"Cancel"})]})]})})}s(9886);var c=s(2853);function Page({params:e}){let{UserDetails:t,call_again_getuser:s,setcall_again_getuser:i}=(0,a.useContext)(c.Z),[l,u]=(0,a.useState)(null),[d,p]=(0,a.useState)(!1);return(0,a.useEffect)(async()=>{await o.Z.get(`https://byteswap-f4y5.onrender.com/profile/${e.handle}`,{withCredentials:!0}).then(e=>{u(e.data)})},[]),(0,r.jsxs)("div",{className:"userprofile-outer-box",children:[r.jsx("div",{class:"container",children:(0,r.jsxs)("div",{class:"card",children:[r.jsx("div",{className:"signin-form",children:r.jsx(n(),{width:"150",height:"150",src:l?.profilePic,alt:"User image",className:"image"})}),(0,r.jsxs)("h2",{children:["@",l?.username]}),r.jsx("p",{children:l?.email}),t&&l&&t?._id===l?._id?(0,r.jsxs)("div",{class:"buttons",children:[r.jsx("button",{type:"submit",class:"login-button",onClick:()=>{p(!0)},children:"Change Password"}),r.jsx("button",{type:"submit",class:"login-button",onClick:()=>{p(!0)},children:"Delete Account"})]}):null]})}),r.jsx(DeleteAccount,{setdelacc:p,delacc:d})]})}},3717:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>c});var r=s(5153);let a=(0,r.createProxy)(String.raw`D:\My Projects\ByteSwap\client\src\app\userprofile\[handle]\page.js`),{__esModule:i,$$typeof:n}=a,o=a.default,c=o},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},1199:()=>{},9886:()=>{},7114:(e,t,s)=>{e.exports=s(4979)}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[75,323,432],()=>__webpack_exec__(6137));module.exports=s})();