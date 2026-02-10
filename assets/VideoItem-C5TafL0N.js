import{r as i,j as e,L as n}from"./index-BgT-bLNt.js";import{a as t}from"./styled-components.browser.esm-BNEzqUzp.js";import{F as d,e as l}from"./index-CGJG7uDB.js";const m=t.li`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`,c=t(n)`
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`,p=({isSelected:o=!1,id:r,title:s="",category:a=""})=>e.jsxs(m,{className:`bg-white rounded-b-2xl list-group-item text-left py-2 border-b-2 border-dotted border-gray-200 hover:border-b-violet-500 hover:bg-violet-100 ${o?"list-group-item-secondary":""}`,children:[e.jsx("span",{className:"font-bold",style:{fontSize:"1.5rem",color:"#333"},children:s}),e.jsxs("span",{className:"ml-3",children:["/ ",a]}),e.jsx(c,{to:`/brain-games/videos/${r}`,children:e.jsx(d,{icon:l,size:"1x",color:"gray",className:"flot-end badge bg-secondary opacity-70 hover:opacity-100 hover:text-purple-500"})})]}),b=i.memo(p);export{b as default};
