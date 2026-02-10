import{r as i,j as t,L as m,c as l}from"./index-BHUCzvGA.js";import{a as o}from"./styled-components.browser.esm-CuPv368i.js";import{b as d}from"./index-w3x6JC1w.js";import{v as c}from"./videoPlayerStore-D0ASSw57.js";const f=o.li`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`,p=o(m)`
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`,x=({isSelected:s=!1,id:a,title:e="",category:r="",isEvenItem:n=!1})=>t.jsxs(f,{className:`list-group-item text-left ${s?"list-group-item-secondary":""}`,style:{backgroundColor:n?"#efefef":""},children:[e," (",r,")",t.jsx(p,{to:`/brain-games/videos/${a}`,children:t.jsx("span",{className:"flot-end badge bg-secondary",children:"듣기"})})]}),u=i.memo(x),g=d(()=>{const s=l(),{videos:a}=c;return t.jsx("ul",{className:"list-group",children:a&&a.map((e,r)=>t.jsx(u,{isSelected:s.id&&e.id===parseInt(s.id),id:e.id,title:e.title,category:e.category,isEvenItem:r%2===1},e.id))})}),I=i.memo(g);export{I as default};
