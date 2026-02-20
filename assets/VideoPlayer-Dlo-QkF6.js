import{e as a,n as j,Q as w,j as e,U as N,V as m,W as x,X as z,Y as g,Z as C}from"./vendor-player-mobx-BpFE6djQ.js";import{a as P}from"./vendor-styled-components-nzWzLsK-.js";import{v as R}from"./videoPlayerStore-D2gUx9eF.js";const V=P.div`
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
    border-radius: 1rem;
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
      margin: 0 0 1px 0;
      padding: 1rem;
      min-width: 200px;
      max-width: 500px;
      border-radius: 0.8rem 0.8rem 0 0;
    }
    .player {
      background-color: rgba(0, 0, 0, 1);
    }
  }
`,S=a.memo(C),$=()=>{const t=j(),h=w().id,y=a.useRef(null),[d,c]=a.useState(!1),[p,f]=a.useState(!1),{videos:s}=R,r=30,v=a.useCallback(()=>{c(!0),f(!0)},[]),k=a.useCallback(()=>{t("/brain-games/videos")},[t]),u=a.useCallback(()=>{c(n=>!n)},[]);if(!s)return null;const i=s.findIndex(n=>n.id===h),o=s[i];if(!o)return e.jsx("div",{children:"유효하지 않은 영상입니다."});let l=s[i+1];l||(l=s[0]);const b=i<=0?s[s.length-1]:s[i-1];return e.jsx(V,{children:e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"heading",children:[e.jsx("span",{className:"title text-violet-100 font-semibold",style:{fontSize:"2rem"},children:o.title||"제목"}),e.jsx("span",{className:"category text-violet-200 border-gray-400 border-dotted border-l-2 ml-3 pl-3",children:o.category||"카테고리"}),e.jsx(N,{className:"float-end badge bg-secondary stroke-purple-200 hover:stroke-purple-300 cursor-pointer",size:r,style:{cursor:"pointer"},onClick:()=>k()})]}),e.jsx("div",{className:"player",children:e.jsx(S,{src:`https://www.youtube.com/watch?v=${o.id}`,volume:.5,controls:!0,playing:d,width:"100%",height:300,onReady:v,ref:y},o.id)}),e.jsxs("div",{children:[p&&e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(m,{className:"stroke-purple-500 hover:stroke-purple-900 cursor-pointer",size:r,onClick:()=>t(`/brain-games/videos/${b.id}`)}),d?e.jsx(x,{className:"stroke-purple-500 hover:stroke-purple-900 cursor-pointer",size:r,onClick:()=>u()}):e.jsx(z,{className:"stroke-purple-500 hover:stroke-purple-900 cursor-pointer",size:r,onClick:()=>u()}),e.jsx(g,{className:"stroke-purple-500 hover:stroke-purple-900 cursor-pointer",size:r,onClick:()=>t(`/brain-games/videos/${l.id}`)})]}),!p&&e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(m,{size:r,className:"stroke-gray-400"}),e.jsx(x,{size:r,className:"stroke-gray-400"}),e.jsx(g,{size:r,className:"stroke-gray-400"})]})]})]})})},_=a.memo($);export{_ as default};
