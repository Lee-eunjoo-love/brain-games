import{e as n,z as p,j as e,o as u,A as h,S as g,F as y,C as j}from"./vendor-player-mobx-BpFE6djQ.js";import{a as f,r as v}from"./vendor-styled-components-nzWzLsK-.js";import{b as s}from"./brainVitaminsStore-B5ujejFC.js";const S=f.div`
  &.container {
    background: #ffffff;
    color: #999;
  }
  .label {
    font-size: 2rem;
  }
  .icon {
    border-color: #fbfbfb;
    display: none;
    background: #fbfbfb;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .icon-label {
    padding: 0 1rem;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    background: #ddd;
    border-radius: 50%;
    border: 5px solid none;
  }
  &:hover {
    &.container {
      background: #f1f1f9;
      border-color: #1f9ac6;
      border-width: 5px;
    }
    .label {
      color: #1f9ac6;
    }
    .icon {
      border-color: #f1f1f9;
      display: inline;
      background: #1f9ac6;
    }
    .icon-label {
      display: none;
    }
  }
`,N=({step:t,selectedStep:i,onChangeStep:a,onMouseEnterStep:c,icons:x,stepCount:l})=>{const r=p({query:"(max-width:767px)"}),d=[{id:1,title:"1단계",description:"3가지 장보기 기억하기"},{id:2,title:"2단계",description:"4가지 장보기 기억하기"},{id:3,title:"3단계",description:"5가지 장보기 기억하기"}];return e.jsxs(S,{onClick:t>l?void 0:r?()=>{c(t),a()}:a,className:"container cursor-pointer p-3 pb-5 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1",children:[e.jsxs("div",{className:"w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold",style:{fontSize:`${r?"2rem":void 0}`},children:[e.jsx("div",{className:"icon",children:x[t-1]}),e.jsx("div",{className:"icon-label",children:t})]}),e.jsx("h3",{className:`label levelButtonText text-xl font-semibold mb-2 ${i===t?"text-cyan-700":"text-gray-700"}`,style:{fontSize:`${r?"2rem":void 0}`,marginTop:`${r?"-2.5rem":void 0}`},children:d[t-1].title}),e.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",style:{fontSize:`${r?"1.5rem":"1.35rem"}`},children:t.id>l?"준비중입니다.":d[t-1].description})]})},k=n.memo(N),z=f.div`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  text-align: center;

  .header {
    margin-bottom: 40px;
    padding-top: 20px;
    h1 {
      font-size: 28px;
    }

    .subtitle {
      font-size: 20px;
      ${t=>t.color&&v`
          color: props.color || palete.secondary;
        `}
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .main-btn {
      color: white;
      padding: 40px;
      border-radius: 30px;
      border: none;
      cursor: pointer;
      transition: 0.3s;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .next-btn {
      width: 100%;
      padding: 20px;
      border-radius: 50px;
      font-size: 24px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
  }
`,w=u(()=>{const t=h().locale("ko"),{levels:i}=s,[a,c]=n.useState(1),x=p({query:"(max-width:767px)"}),l=[e.jsx(g,{size:50,color:"#5d68c5",className:"opacity-50"}),e.jsx(y,{size:50,color:"#608db6",className:"opacity-50"}),e.jsx(j,{size:50,color:"#3ccaf5",className:"opacity-50"})],r=n.useCallback(()=>{s.onChangeScreen("STUDY"),s.onResetTimeLeft()},[]),d=n.useCallback(o=>{s.onSetLevel(o),s.onResetTimeLeft(),s.onResetList(o)},[]),m=n.useMemo(()=>{const o=t.get("hour");return o>6&&o<=12?"아침":o>12&&o<=14?"점심":o>14&&o<=17?"오후":o>17&&o<=20?"저녁":"밤"},[t]);return e.jsxs(z,{children:[e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"text-2xl text-gray-800 dark:text-gray-300 mb-5 ",children:"기억 쏙쏙"}),e.jsxs("p",{className:"subtitle text-gray-700 dark:text-stone-200",children:[e.jsx("strong",{children:"복남"}),"님, 참 좋은",e.jsx("span",{className:"font-bold text-stone-500 ml-2",children:m}),"입니다."]})]}),e.jsx("main",{children:e.jsx("div",{className:"grid gap-1",style:{gridTemplateColumns:x?"1fr":"1fr 1fr 1fr"},children:i&&i.map((o,L,b)=>e.jsx(k,{step:o,selectedStep:a,onChangeStep:()=>{d(o),r()},onMouseEnterStep:()=>c(o),icons:l,stepCount:b.length},o))})})]})}),T=n.memo(w);export{T as default};
