import{r as i,j as e,L as x,u as p}from"./index-DaWVBbE4.js";import{a as c,r as m}from"./styled-components.browser.esm-CPuqwdWy.js";import{b as t}from"./brainVitaminsStore-B1CpZBTN.js";import{o as y}from"./index-D6m3-sr4.js";import{u as g}from"./index-BjEwEci1.js";import{C as u}from"./CloseButton-Bf1eZus4.js";import{c as o}from"./createLucideIcon-D0qk1S9M.js";import{T as b}from"./tree-deciduous-NbG-QReV.js";const f=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],k=o("clipboard-list",f);const j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],N=o("disc",j);const v=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],w=o("grid-2x2-check",v);const M=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]],$=o("notebook-text",M);const z=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],C=o("shopping-cart",z);const _=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],S=o("smile",_),h=m`
  background-color: white;
  padding: 20px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  min-height: 150px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  &:hover {
    border: 3px solid #27c1f8;
    color: #1f9ac6;
    background: #f8f8f8;
  }
  outline: none;
  margin: 1rem 0.5rem;
`,L=c.div`
  ${h}
`,H=c(x)`
  ${h}
`,D=r=>r.to?e.jsx(H,{...r}):e.jsx(L,{...r}),a=i.memo(D),R="/brain-games/assets/main_image-DSsb3neE.png",T=c.div`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: clamp(1rem, 2vw + 1rem, 2rem);

  .header {
    margin-bottom: 40px;
    padding-top: 20px;
    h1 {
      font-size: clamp(1rem, 2vw + 1rem, 2rem);
    }
    h2 {
      font-size: clamp(1rem, 1.5vw + 1rem, 1.5rem);
    }
    h3 {
      font-size: clamp(1rem, 1vw + 1rem, 1.2rem);
    }

    .subtitle {
      ${r=>r.color&&m`
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
`,B=y(()=>{const r=p(),{palette:s}=t,n=g({query:"(max-width:767px)"}),l=i.useCallback(d=>{t.onSetLevel(d),t.onResetTimeLeft(),t.onResetList(d)},[]);return e.jsxs(T,{className:"bg-white dark:bg-gray-800",children:[e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx(u,{onClick:()=>{l(1),r("/brain-games")}})}),e.jsxs("section",{className:"mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white flex-1 justify-center",style:{backgroundImage:`url(${R})`,backgroundSize:"100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"},children:[e.jsxs("h2",{className:"font-bold mb-3 flex justify-center items-center",children:["복남 어르신, 반갑습니다!",e.jsx(S,{color:`${s.white}`,size:30,className:"ml-2"})]}),e.jsxs("p",{className:"text-xl opacity-90 mb-6 bg-black/20 px-4 py-2 rounded-full",children:[`${n?"":"오늘도 활기차게"}`," 두뇌 운동을 시작해볼까요?"]}),e.jsx("div",{className:"flex items-center justify-center gap-3 bg-black/30 w-fit px-4 py-2 rounded-full mt-25",children:e.jsx("span",{className:"font-medium",children:`${n?"건강한 두뇌를 위한 하루 10분":"하루 10분, 건강한 두뇌를 만듭니다."}`})})]})]}),e.jsx("main",{children:e.jsxs("div",{className:` ${n?void 0:"grid grid-cols-3"}`,children:[e.jsxs(a,{to:"/brain-games/sudoku",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(w,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"스도쿠"})]}),e.jsxs(a,{onClick:()=>{r("/brain-games/vitamins"),l(1)},className:"transition-all duration-300 transform hover:-translate-y-1 border-blue-400",children:[e.jsx(k,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"장보기 목록"})]}),e.jsxs(a,{to:"/brain-games/shopping",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(C,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"시장 가기"})]}),e.jsxs(a,{to:"/brain-games/walk",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(b,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"동네한바퀴"})]}),e.jsxs(a,{to:"/brain-games/sentence",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx($,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"문장연결"})]}),e.jsxs(a,{to:"/brain-games/videos",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(N,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"추억의 노래"})]})]})})]})}),F=i.memo(B);export{F as default};
