import{r as t,j as o}from"./index-f_fVk6cW.js";import{a as s}from"./styled-components.browser.esm-XALuEXWq.js";import{u as c}from"./index-DaijRw3C.js";const f=s.div`
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
`,m=({step:e,onChangeStep:i,onMouseEnterStep:d,icons:a,stepCount:n})=>{const r=c({query:"(max-width:767px)"}),l=["초급 단계를 시작합니다","중급 실력을 쌓아보세요","고급 마스터 단계입니다"];return o.jsxs(f,{onClick:e.id>n?void 0:r?()=>{d(e),i()}:i,className:"container cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1",children:[o.jsxs("div",{className:"w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold",style:{fontSize:`${r?"2rem":void 0}`},children:[o.jsx("div",{className:"icon",children:a[e.id-1]}),o.jsx("div",{className:"icon-label",children:e.id})]}),o.jsx("div",{className:"label text-xl font-semibold mb-2",style:{fontSize:`${r?"2.5rem":void 0}`,marginTop:"-30px"},children:e.name}),o.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",style:{fontSize:`${r?"1.5rem":"1.35rem"}`},children:e.id>n?"준비중입니다.":e.description||l[e.id-1]})]})},h=t.memo(m);export{h as default};
