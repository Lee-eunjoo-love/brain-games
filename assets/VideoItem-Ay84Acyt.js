import{r as n,j as e,L as l}from"./index-C22LRyQ1.js";import{a as t}from"./styled-components.browser.esm-GobmjZxI.js";import{F as d,e as m}from"./index-C7Q0M8Vz.js";const c=t.li`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`,p=t(l)`
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`,x=({isSelected:o=!1,id:r,title:s="",category:a="",isEvenItem:i=!1})=>e.jsxs(c,{className:`bg-white rounded-b-2xl list-group-item text-left py-2 border-b-2 border-dotted border-gray-200 hover:border-b-violet-500 hover:bg-violet-100 ${o?"list-group-item-secondary":""}`,style:{backgroundColor:""},children:[e.jsx("span",{className:"font-bold",style:{fontSize:"1.5rem",color:"#333"},children:s}),e.jsxs("span",{className:"ml-3",children:["/ ",a]}),e.jsx(p,{to:`/brain-games/videos/${r}`,children:e.jsx(d,{icon:m,size:"1x",color:"gray",className:"flot-end badge bg-secondary opacity-70 hover:opacity-100 hover:text-purple-500"})})]}),u=n.memo(x);export{u as default};
