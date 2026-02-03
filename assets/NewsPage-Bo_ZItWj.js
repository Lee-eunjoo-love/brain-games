const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NewsList-BRbvQG6j.js","assets/index-Vpb440Aw.js","assets/index-DRIbd_2y.css","assets/styled-components.browser.esm-Dx1MRBwr.js"])))=>i.map(i=>d[i]);
import{r,j as a,u as n,c as m,l as x,_ as l}from"./index-Vpb440Aw.js";import{a as d}from"./styled-components.browser.esm-Dx1MRBwr.js";import{C as p}from"./CloseButton-DmCeBfDT.js";const h=({name:e,text:o,category:t,onSelect:s})=>a.jsx("div",{className:`text-[calc(1.125rem)] cursor-pointer whitespace-pre decoration-0 text-inherit pb-[calc(0.25rem)] [&+&]:ml-[calc(1rem)] ${t===e?"font-semibold border-b-2 border-[#22b8cf] text-[#22b8cf] hover:text-[#3bc9db] ":"hover:text-[#495057]"} `,active:t===e?"true":"false",onClick:()=>s(e),children:o},e),u=({category:e,onSelect:o})=>{const t=r.useMemo(()=>[{name:"all",text:"전체보기"},{name:"business",text:"비즈니스"},{name:"entertainment",text:"엔터테인먼트"},{name:"health",text:"건강"},{name:"science",text:"과학"},{name:"sports",text:"스포츠"},{name:"technology",text:"기술"}],[]);return a.jsx("div",{className:"flex p-[calc(1rem)] w-[calc(768px)] mx-0 my-auto max-[768px]:w-[calc(100%)] max-[768px]:overflow-x-auto",children:t&&t.map(({name:s,text:c})=>a.jsx(h,{name:s,text:c,category:e,onSelect:o},s))})},b=r.memo(u),w=x(()=>l(()=>import("./NewsList-BRbvQG6j.js"),__vite__mapDeps([0,1,2,3])),{fallback:a.jsx("div",{children:"loading ..."})}),v=d.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 500px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    max-width: 600px;
  }
`,C=()=>{const e=n(),o=m(),[t,s]=r.useState(o.category||"all"),c=r.useCallback(i=>s(i),[]);return a.jsxs(v,{children:[a.jsx(p,{onClick:()=>{e("/brain-games")}}),a.jsx(b,{category:t,onSelect:c}),a.jsx(w,{category:t})]})};export{C as default};
