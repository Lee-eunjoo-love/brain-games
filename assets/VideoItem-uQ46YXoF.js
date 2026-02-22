import{r as d,u as l,j as e,c as m}from"./index-D1-CUQrh.js";import{a as r}from"./styled-components.browser.esm-DNwYwJhB.js";const c=r.li`
  display: grid;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  border-radius: 1rem;

  margin: 0.25rem;
`;r(m)`
  margin-left: 1rem;
  @media screen and (max-width: 767px) {
    margin-left: auto;
  }
`;const g=({isSelected:t=!1,id:s,title:a="",category:i="",bgColor:o=""})=>{const n=l();return e.jsxs(c,{className:`text-gray-600 hover:text-cyan-800 transition-all duration-300 transform hover:-translate-y-1 hover:rounded-2xl list-group-item text-left py-2 border-2 border-gray-200 hover:border-cyan-400 hover:bg-gray-50 cursor-pointer ${t?"list-group-item-secondary":""}${o}`,onClick:()=>n(`/brain-games/videos/${s}`),children:[e.jsxs("div",{className:"grid grid-cols-2 mb-3",style:{gridTemplateColumns:"5fr 1fr"},children:[e.jsxs("span",{className:"text-center bg-gray-200 opacity-90 rounded-2xl mr-3",style:{fontSize:"1rem"},children:[" ",i]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#efefef",stroke:"#5d86ad",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-youtube-icon lucide-youtube w-6",children:[e.jsx("path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}),e.jsx("path",{d:"m10 15 5-3-5-3z"})]})]}),e.jsx("hr",{style:{margin:"0 0.5rem",color:"#ccc"}}),e.jsx("div",{className:"font-bold text-center mt-3 mb-3 overflow-clip",style:{fontSize:"1.2rem",height:"1.5rem"},children:a})]})},f=d.memo(g);export{f as default};
