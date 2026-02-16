import{r as i,j as e,L as h,u as p}from"./index-BS47MSj6.js";import{a as c,r as m}from"./styled-components.browser.esm-CJiAjboZ.js";import{b as n}from"./brainVitaminsStore-C8iMxR9s.js";import{o as y}from"./index-LZWkmOnd.js";import{u as b}from"./index-B3QMt020.js";import{C as g}from"./CloseButton-DzTolStc.js";import{c as o}from"./createLucideIcon-BI129ZVy.js";import{T as u}from"./tree-deciduous-BgPhK6mO.js";const f=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],k=o("clipboard-list",f);const j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],N=o("disc",j);const v=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],M=o("grid-2x2-check",v);const $=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]],w=o("notebook-text",$);const z=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],C=o("shopping-cart",z);const _=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],S=o("smile",_),x=m`
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
  border: 1px solid transparent;
  &:hover {
    border: 3px solid #27c1f8;
    color: #1f9ac6;
    background: #f8f8f8;
  }
  outline: none;
  margin: 1rem 0.5rem;
`,L=c.div`
  ${x}
`,H=c(h)`
  ${x}
`,D=s=>s.to?e.jsx(H,{...s}):e.jsx(L,{...s}),a=i.memo(D),R="/brain-games/assets/main_image-DSsb3neE.png",T=c.div`
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
      ${s=>s.color&&m`
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
`,B=y(()=>{const s=p(),{palette:r}=n,t=b({query:"(max-width:767px)"}),d=i.useCallback(l=>{n.onSetLevel(l),n.onResetTimeLeft(),n.onResetList(l)},[]);return e.jsxs(T,{children:[e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx(g,{onClick:()=>{d(1),s("/brain-games")}})}),e.jsxs("section",{className:"mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white",style:{backgroundImage:`url(${R})`,backgroundSize:"100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"},children:[e.jsxs("h2",{className:"text-4xl font-bold mb-3 flex justify-center items-center",children:["복남 어르신, ",t?e.jsx("br",{}):void 0,"반갑습니다!",e.jsx(S,{color:`${r.white}`,size:30,className:"ml-2"})]}),e.jsxs("p",{className:"text-xl opacity-90 mb-6 bg-black/20 px-4 py-2 rounded-full",children:["오늘도 활기차게 ",t?e.jsx("br",{}):void 0,"두뇌 운동을 시작해볼까요?"]}),e.jsx("div",{className:"flex items-center gap-3 bg-black/30 w-fit px-4 py-2 rounded-full mt-25",children:e.jsxs("span",{className:"font-medium",children:["하루 10분, ",t?e.jsx("br",{}):void 0,"건강한 두뇌를 만듭니다."]})})]})]}),e.jsx("main",{children:e.jsxs("div",{className:` ${t?void 0:"grid grid-cols-3"}`,children:[e.jsxs(a,{to:"/brain-games/sudoku",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(M,{color:`${r.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"스도쿠"})]}),e.jsxs(a,{onClick:()=>{s("/brain-games/vitamins"),d(1)},className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(k,{color:`${r.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"장보기 목록"})]}),e.jsxs(a,{to:"/brain-games/shopping",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(C,{color:`${r.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"시장 가기"})]}),e.jsxs(a,{to:"/brain-games/walk",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(u,{color:`${r.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"동네한바퀴"})]}),e.jsxs(a,{to:"/brain-games/sentence",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(w,{color:`${r.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"문장연결"})]}),e.jsxs(a,{to:"/brain-games/videos",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(N,{color:`${r.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"추억의 노래"})]})]})})]})}),F=i.memo(B);export{F as default};
