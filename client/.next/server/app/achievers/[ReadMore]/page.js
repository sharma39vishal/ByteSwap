(()=>{var e={};e.id=181,e.ids=[181],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9255:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>l,routeModule:()=>x,tree:()=>d});var s=t(7096),i=t(6132),a=t(7284),n=t.n(a),c=t(2564),o={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>c[e]);t.d(r,o);let d=["",{children:["achievers",{children:["[ReadMore]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,938)),"D:\\My Projects\\ByteSwap\\client\\src\\app\\achievers\\[ReadMore]\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,7857)),"D:\\My Projects\\ByteSwap\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["D:\\My Projects\\ByteSwap\\client\\src\\app\\achievers\\[ReadMore]\\page.js"],p="/achievers/[ReadMore]/page",u={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/achievers/[ReadMore]/page",pathname:"/achievers/[ReadMore]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},42:(e,r,t)=>{Promise.resolve().then(t.bind(t,9840))},9840:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>Page});var s=t(784),i=t(4997);t(6175);var a=t(9885);function Page({params:e}){let[r,t]=(0,a.useState)(null);return(0,a.useEffect)(()=>{i.Z.get(`https://byteswap-f4y5.onrender.com/achiver/${e.ReadMore}`).then(e=>{t(e.data)})},[]),s.jsx("div",{className:"achiever-read-more-page",children:(0,s.jsxs)("div",{className:"selected-achiever-page-container",children:[(0,s.jsxs)("div",{className:"achiever-fixed-section-container",children:[s.jsx("div",{className:"achiever-fixed-image",children:s.jsx("img",{src:r?.images,alt:""})}),(0,s.jsxs)("div",{className:"achiever-fixed-description",children:[s.jsx("h2",{children:r?.name}),s.jsx("h4",{children:r?.designation})]}),(0,s.jsxs)("div",{className:"achiever-fixed-connect",children:[s.jsx("a",{href:r?.connect,target:"_blank",children:"linked"}),s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3536/3536505.png",alt:""})]})]}),(0,s.jsxs)("div",{className:"achiever-dynamic-section-container",children:[s.jsx("div",{className:"fixed-inside-dynamic-achiever-before"}),s.jsx("p",{children:r?.discription}),s.jsx("div",{className:"fixed-inside-dynamic-achiever-after"})]})]})})}},938:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>n,__esModule:()=>a,default:()=>o});var s=t(5153);let i=(0,s.createProxy)(String.raw`D:\My Projects\ByteSwap\client\src\app\achievers\[ReadMore]\page.js`),{__esModule:a,$$typeof:n}=i,c=i.default,o=c},3881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=t(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let r=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:r+""}]}},6175:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[75,323,432],()=>__webpack_exec__(9255));module.exports=t})();