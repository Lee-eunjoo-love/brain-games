const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CardMenu-lLH5ZfJq.js","assets/index-PT2eweAl.js","assets/index-gjizToz6.css","assets/styled-components.browser.esm-ChLb7_kS.js"])))=>i.map(i=>d[i]);
import{r as o,u as d,j as e,l as m,_ as h}from"./index-PT2eweAl.js";import{r as p,a as x}from"./styled-components.browser.esm-ChLb7_kS.js";import{b as t}from"./brainVitaminsStore-B9pAnnPg.js";import{o as y}from"./index-D7q9_1VA.js";import{u as g}from"./index-C4mVLx_O.js";import{c as r}from"./createLucideIcon-BHiKyBI1.js";import{T as u}from"./tree-deciduous-DdyotojW.js";const b=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],k=r("clipboard-list",b);const f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],j=r("disc",f);const v=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],N=r("grid-2x2-check",v);const _=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]],w=r("notebook-text",_);const z=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],M=r("shopping-cart",z);const $=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],C=r("smile",$),S="/brain-games/assets/main_image-Cl_-Z9QQ.png",s=m(()=>h(()=>import("./CardMenu-lLH5ZfJq.js"),__vite__mapDeps([0,1,2,3]))),L=x.div`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: clamp(1rem, 2vw + 1rem, 2rem);

  .greeting1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
  }
  .greeting2 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }
  .greeting3 {
    font-size: clamp(1rem, 1vw + 1rem, 1.2rem);
  }

  .header {
    margin-bottom: 40px;
    padding-top: 20px;

    .subtitle {
      ${i=>i.color&&p`
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
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
  }
`,H=y(()=>{const i=d(),{palette:c}=t,a=g({query:"(max-width:767px)"}),l=o.useCallback(n=>{t.onSetLevel(n),t.onResetTimeLeft(),t.onResetList(n)},[]);return e.jsxs(L,{className:"bg-white dark:bg-gray-800",children:[e.jsx("header",{className:"header",children:e.jsxs("section",{className:"mb-2 rounded-3xl p-8 text-white flex-1 items-center justify-center",style:{backgroundImage:`url(${S})`,backgroundSize:"100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"},children:[e.jsxs("p",{className:"mb-2 justify-center items-center flex",style:{fontSize:"1.5rem"},children:[e.jsx("span",{className:"font-bold",children:"복남"}),e.jsx("span",{children:"님, 반갑습니다!"}),e.jsx(C,{color:`${c.white}`,size:30,className:"ml-2"})]}),e.jsxs("div",{className:"opacity-90 bg-black/20 rounded-full w-fit",style:{margin:"0 auto",fontSize:`${a?"1rem":void 0}`,padding:"0 0.5rem"},children:["오늘도",`${a?" 두뇌운동":" 활기차게 두뇌 운동을"}`," ","시작해볼까요?"]}),e.jsx("div",{className:`${a?"h-20":"h-48"}`}),e.jsx("div",{className:"bg-black/30 w-fit rounded-full",style:{margin:"0 auto",fontSize:`${a?"1rem":void 0}`,padding:"0 0.5rem"},children:`${a?"건강한 두뇌를 위한 하루 10분":"하루 10분, 건강한 두뇌를 만듭니다."}`})]})}),e.jsx("main",{children:e.jsxs("div",{className:` ${a?void 0:"grid grid-cols-3"}`,children:[e.jsxs(s,{to:"/brain-games/sudoku",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(N,{size:35,className:"mr-2"}),e.jsx("h3",{children:"스도쿠"})]}),e.jsxs(s,{onClick:()=>{i("/brain-games/vitamins"),l(1)},className:"transition-all duration-300 transform hover:-translate-y-1 border-blue-400",children:[e.jsx(k,{size:35,className:"mr-2"}),e.jsx("h3",{children:"장보기 목록"})]}),e.jsxs(s,{to:"/brain-games/shopping",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(M,{size:35,className:"mr-2"}),e.jsx("h3",{children:"시장 가기"})]}),e.jsxs(s,{to:"/brain-games/walk",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(u,{size:35,className:"mr-2"}),e.jsx("h3",{children:"동네한바퀴"})]}),e.jsxs(s,{to:"/brain-games/sentence",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(w,{size:35,className:"mr-2"}),e.jsx("h3",{children:"문장연결"})]}),e.jsxs(s,{to:"/brain-games/videos",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(j,{size:35,className:"mr-2"}),e.jsx("h3",{children:"추억의 노래"})]})]})})]})}),Q=o.memo(H);export{Q as default};
