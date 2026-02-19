import{r as i,j as e,L as x,u as p}from"./index-DmFN59ZM.js";import{a as c,r as m}from"./styled-components.browser.esm-CyyfaXeg.js";import{b as n}from"./brainVitaminsStore-BVHV0j8Q.js";import{o as y}from"./index-B6Bos9t6.js";import{u as g}from"./index-GgHc0xr6.js";import{C as u}from"./CloseButton-znzDCNKy.js";import{c as t}from"./createLucideIcon-Bd24SHa-.js";import{T as b}from"./tree-deciduous-BeRfa-tr.js";const f=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],k=t("clipboard-list",f);const j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],v=t("disc",j);const N=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],$=t("grid-2x2-check",N);const w=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]],z=t("notebook-text",w);const M=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],C=t("shopping-cart",M);const S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],_=t("smile",S),h=m`
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
    opacity: 0.8;
  }

  outline: none;
  margin: 1rem 0.5rem;
`,L=c.div`
  ${h}
`,H=c(x)`
  ${h}
`,D=r=>r.to?e.jsx(H,{...r}):e.jsx(L,{...r}),o=i.memo(D),R="/brain-games/assets/main_image-DSsb3neE.png",T=c.div`
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
`,B=y(()=>{const r=p(),{palette:s}=n,a=g({query:"(max-width:767px)"}),d=i.useCallback(l=>{n.onSetLevel(l),n.onResetTimeLeft(),n.onResetList(l)},[]);return e.jsxs(T,{className:"bg-white dark:bg-gray-800",children:[e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx(u,{onClick:()=>{d(1),r("/brain-games")}})}),e.jsxs("section",{className:"mb-2 rounded-3xl p-8 text-white flex-1 items-center justify-center",style:{backgroundImage:`url(${R})`,backgroundSize:"100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"},children:[e.jsxs("p",{className:"mb-2 justify-center items-center flex",style:{fontSize:"1.5rem"},children:[e.jsx("span",{className:"font-bold",children:"복남"}),e.jsx("span",{children:"님, 반갑습니다!"}),e.jsx(_,{color:`${s.white}`,size:30,className:"ml-2"})]}),e.jsxs("div",{className:"opacity-90 bg-black/20 rounded-full w-fit",style:{margin:"0 auto",fontSize:`${a?"1rem":void 0}`,padding:"0 0.5rem"},children:["오늘도",`${a?"":" 활기차게"}`," 두뇌 운동을 시작해볼까요?"]}),e.jsx("div",{className:`${a?"h-20":"h-48"}`}),e.jsx("div",{className:"bg-black/30 w-fit rounded-full",style:{margin:"0 auto",fontSize:`${a?"1rem":void 0}`,padding:"0 0.5rem"},children:`${a?"건강한 두뇌를 위한 하루 10분":"하루 10분, 건강한 두뇌를 만듭니다."}`})]})]}),e.jsx("main",{children:e.jsxs("div",{className:` ${a?void 0:"grid grid-cols-3"}`,children:[e.jsxs(o,{to:"/brain-games/sudoku",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx($,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"스도쿠"})]}),e.jsxs(o,{onClick:()=>{r("/brain-games/vitamins"),d(1)},className:"transition-all duration-300 transform hover:-translate-y-1 border-blue-400",children:[e.jsx(k,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"장보기 목록"})]}),e.jsxs(o,{to:"/brain-games/shopping",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(C,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"시장 가기"})]}),e.jsxs(o,{to:"/brain-games/walk",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(b,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"동네한바퀴"})]}),e.jsxs(o,{to:"/brain-games/sentence",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(z,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"문장연결"})]}),e.jsxs(o,{to:"/brain-games/videos",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(v,{color:`${s.secondary}`,size:35,className:"mr-2"}),e.jsx("h3",{children:"추억의 노래"})]})]})})]})}),F=i.memo(B);export{F as default};
