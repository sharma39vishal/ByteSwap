(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{1590:function(e,s,t){Promise.resolve().then(t.bind(t,1720))},1720:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var r=t(7437),c=t(2265),n=t(2173);t(3795),t(1396);var a=t(4033);function l(){let e=(0,a.useRouter)(),[s,t]=(0,c.useState)([]),l=async()=>{n.Z.get("https://byteswap-f4y5.onrender.com/discuss/").then(e=>{t(e.data),console.log("Discussion :",e.data)}).catch(e=>{console.log(e)})};(0,c.useEffect)(()=>{l()},[]);let[o,i]=(0,c.useState)("/images/dbmsDiscuss.png");return(0,r.jsxs)("div",{className:"flex justify-center items-center flex-col h-screen ",children:[(0,r.jsx)("h1",{className:"text-2xl text-gray-200 font-semibold m-2 uppercase ",children:"Discussion"}),(0,r.jsx)("button",{className:"absolute right-14 z-0 top-16 p-2 m-1 bg-blue-900 rounded-md ",onClick:()=>{e.push("/askquestion")},children:"ASK Question"}),(0,r.jsx)("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:(0,r.jsxs)("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[(0,r.jsx)("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",class:"px-6 py-3",children:"S No."}),(0,r.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Name"}),(0,r.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Category"})]})}),(0,r.jsx)("tbody",{children:s.map((s,t)=>(0,r.jsxs)("tr",{style:{cursor:"pointer"},onClick:()=>{e.push("/discussion/".concat(s._id))},class:"odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700",children:[(0,r.jsx)("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:++t}),(0,r.jsx)("td",{class:"px-6 py-4",children:s.Title}),(0,r.jsx)("td",{class:"px-6 py-4",children:s.tags.map(e=>(0,r.jsxs)(r.Fragment,{children:[e," "]}))})]},t))})]})})]})}},3795:function(){},1396:function(e,s,t){e.exports=t(8326)},4033:function(e,s,t){e.exports=t(94)}},function(e){e.O(0,[580,326,971,32,744],function(){return e(e.s=1590)}),_N_E=e.O()}]);