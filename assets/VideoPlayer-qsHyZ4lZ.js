const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CsWv6j0x.js","assets/index-BgT-bLNt.js","assets/index-CSLHzNwl.css"])))=>i.map(i=>d[i]);
import{r as s,u as w,c as k,j as e,l as N,_ as P}from"./index-BgT-bLNt.js";import{a as z}from"./styled-components.browser.esm-BNEzqUzp.js";import{v as R}from"./videoPlayerStore-DO9_g5ks.js";import{F as o,f as _,a as x,b as p,c as C,d as u}from"./index-CGJG7uDB.js";import"./index-D843qDk6.js";const V=N(()=>P(()=>import("./index-CsWv6j0x.js"),__vite__mapDeps([0,1,2]))),E=z.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  .box {
    background-color: white;
    margin: 80px auto;
    max-width: 500px;
    min-width: 100px;
    min-height: 350px;
    font: 13px "verdana";
    padding: 10px;
    border-radius: 0.7rem;
    div {
      padding: 0;
      display: block;
      margin: 10px 0 0 0;
    }
    .heading {
      background-color: #695aa0;
      font-weight: 300;
      text-align: left;
      color: #fff;
      margin: 5px 0 5px 0;
      padding: 0.5rem;
      min-width: 200px;
      max-width: 500px;
      border-radius: 0.5rem 0.5rem 0 0;
    }
    .player {
      background-color: rgba(0, 0, 0, 1);
    }
  }
  .pointer {
    cursor: pointer;
  }
`,$=s.memo(V),F=()=>{const r=w(),v=k().id,f=s.useRef(null),[c,l]=s.useState(!1),[m,h]=s.useState(!1),{videos:a}=R,g=s.useCallback(()=>{l(!0),h(!0)},[]),b=s.useCallback(()=>{l(t=>!t),r("/brain-games/videos")},[r]),y=s.useCallback(()=>{l(t=>!t)},[]);if(!a)return null;const n=a.findIndex(t=>t.id===v),i=a[n];if(!i)return e.jsx("div",{children:"유효하지 않은 영상입니다."});let d=a[n+1];d||(d=a[0]);const j=n<=0?a[a.length-1]:a[n-1];return e.jsx(E,{children:e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"title text-violet-100 font-semibold",children:i.title||"제목"}),e.jsxs("span",{className:"category text-violet-200",children:[" / ",i.category||"카테고리"]}),e.jsx(o,{icon:_,size:"1x",className:"float-end badge bg-secondary pointer mt-1.5",onClick:b})]}),e.jsx("div",{className:"player",children:e.jsx($,{src:`https://www.youtube.com/watch?v=${i.id}`,volume:.5,controls:!0,playing:c,width:"100%",height:300,onReady:g,ref:f},i.id)}),e.jsxs("div",{children:[m&&e.jsxs("div",{children:[e.jsx(o,{icon:x,size:"1x",className:"ml-2 pointer hover:text-violet-700",onClick:()=>r(`/brain-games/videos/${j.id}`)}),e.jsx(o,{icon:c?p:C,size:"1x",className:"ml-2 pointer hover:text-violet-700",onClick:y}),e.jsx(o,{icon:u,size:"1x",className:"ml-2 pointer hover:text-violet-700",onClick:()=>r(`/brain-games/videos/${d.id}`)})]}),!m&&e.jsxs("div",{children:[e.jsx(o,{icon:x,size:"1x",className:"ml-2"}),e.jsx(o,{icon:p,size:"1x",className:"ml-2"}),e.jsx(o,{icon:u,size:"1x",className:"ml-2"})]})]})]})})},L=s.memo(F);export{L as default};
