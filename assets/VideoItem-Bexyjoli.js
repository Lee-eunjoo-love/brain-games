import{r as l,u as d,j as e,L as c}from"./index-CIX3c_Oj.js";import{a as t}from"./styled-components.browser.esm-DLkA8i6Z.js";const m=t.li`
  display: grid;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  border: 1px solid #ccc;
  border-radius: 1rem;

  margin: 0.25rem;
`;t(c)`
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`;const g=({isSelected:r=!1,id:i,title:s="",category:o="",isEvenItem:a=!1})=>{const n=d();return e.jsxs(m,{className:` hover:rounded-2xl list-group-item text-left py-2 border-gray-200 hover:border-b-violet-500 hover:bg-violet-100 cursor-pointer ${r?"list-group-item-secondary":""}${a?"bg-stone-50":"bg-indigo-50"}`,onClick:()=>n(`/brain-games/videos/${i}`),children:[e.jsxs("div",{className:"grid grid-cols-2 mb-3",style:{gridTemplateColumns:"5fr 1fr"},children:[e.jsxs("span",{className:"text-center bg-violet-100 rounded-2xl opacity-80 mr-3",style:{fontSize:"1rem"},children:[" ",o]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#efefef",stroke:"#e290ec",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-youtube-icon lucide-youtube w-6",children:[e.jsx("path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}),e.jsx("path",{d:"m10 15 5-3-5-3z"})]})]}),e.jsx("hr",{style:{margin:"0 0.5rem",color:"#ccc"}}),e.jsx("div",{className:"font-bold text-center mt-3 mb-5 overflow-clip",style:{fontSize:"1.5rem",color:"#5c51bb",height:"2rem"},children:s})]})},f=l.memo(g);export{f as default};
