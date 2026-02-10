import{r as a,j as t,L as l,c as d}from"./index-a8TO8Ni5.js";import{a as i}from"./styled-components.browser.esm-Bh6T-alR.js";import{F as m,f as c,v as p}from"./videoPlayerStore-DHXHPB96.js";import{b as f}from"./index-DPW6c1tB.js";const x=i.li`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`,g=i(l)`
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`,u=({isSelected:s=!1,id:r,title:e="",category:o="",isEvenItem:n=!1})=>t.jsxs(x,{className:`list-group-item text-left py-2 border-b-2 border-dotted border-gray-200 hover:border-b-violet-500 hover:bg-violet-100 ${s?"list-group-item-secondary":""}`,style:{backgroundColor:""},children:[t.jsx("span",{className:"font-bold",style:{fontSize:"1.5rem",color:"#333"},children:e}),t.jsxs("span",{className:"ml-3",children:["/ ",o]}),t.jsx(g,{to:`/brain-games/videos/${r}`,children:t.jsx(m,{icon:c,size:"1x",color:"gray",className:"flot-end badge bg-secondary opacity-70 hover:opacity-100 hover:text-purple-500"})})]}),y=a.memo(u),b=f(()=>{const s=d(),{videos:r}=p;return t.jsx("ul",{className:"list-group",children:r&&r.map((e,o)=>t.jsx(y,{isSelected:s.id&&e.id===parseInt(s.id),id:e.id,title:e.title,category:e.category,isEvenItem:o%2===1},e.id))})}),N=a.memo(b);export{N as default};
