import{e as i,j as e,L as x,o as h,n as p,z as g,$ as u,a0 as b,a1 as f,a2 as j,T as v,a3 as y,a4 as N}from"./vendor-player-mobx-BpFE6djQ.js";import{a as t,r as c}from"./vendor-styled-components-nzWzLsK-.js";import{b as n}from"./brainVitaminsStore-B5ujejFC.js";import{C as k}from"./CloseButton-JPnA-Wkb.js";const d=c`
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
`,w=t.div`
  ${d}
`,z=t(x)`
  ${d}
`,C=s=>s.to?e.jsx(z,{...s}):e.jsx(w,{...s}),r=i.memo(C),S="/brain-games/assets/main_image-DSsb3neE.png",$=t.div`
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
      ${s=>s.color&&c`
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
`,L=h(()=>{const s=p(),{palette:m}=n,a=g({query:"(max-width:767px)"}),o=i.useCallback(l=>{n.onSetLevel(l),n.onResetTimeLeft(),n.onResetList(l)},[]);return e.jsxs($,{className:"bg-white dark:bg-gray-800",children:[e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx(k,{onClick:()=>{o(1),s("/brain-games")}})}),e.jsxs("section",{className:"mb-2 rounded-3xl p-8 text-white flex-1 items-center justify-center",style:{backgroundImage:`url(${S})`,backgroundSize:"100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"},children:[e.jsxs("p",{className:"mb-2 justify-center items-center flex",style:{fontSize:"1.5rem"},children:[e.jsx("span",{className:"font-bold",children:"복남"}),e.jsx("span",{children:"님, 반갑습니다!"}),e.jsx(u,{color:`${m.white}`,size:30,className:"ml-2"})]}),e.jsxs("div",{className:"opacity-90 bg-black/20 rounded-full w-fit",style:{margin:"0 auto",fontSize:`${a?"1rem":void 0}`,padding:"0 0.5rem"},children:["오늘도",`${a?" 두뇌운동":" 활기차게 두뇌 운동을"}`," ","시작해볼까요?"]}),e.jsx("div",{className:`${a?"h-20":"h-48"}`}),e.jsx("div",{className:"bg-black/30 w-fit rounded-full",style:{margin:"0 auto",fontSize:`${a?"1rem":void 0}`,padding:"0 0.5rem"},children:`${a?"건강한 두뇌를 위한 하루 10분":"하루 10분, 건강한 두뇌를 만듭니다."}`})]})]}),e.jsx("main",{children:e.jsxs("div",{className:` ${a?void 0:"grid grid-cols-3"}`,children:[e.jsxs(r,{to:"/brain-games/sudoku",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(b,{size:35,className:"mr-2"}),e.jsx("h3",{children:"스도쿠"})]}),e.jsxs(r,{onClick:()=>{s("/brain-games/vitamins"),o(1)},className:"transition-all duration-300 transform hover:-translate-y-1 border-blue-400",children:[e.jsx(f,{size:35,className:"mr-2"}),e.jsx("h3",{children:"장보기 목록"})]}),e.jsxs(r,{to:"/brain-games/shopping",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(j,{size:35,className:"mr-2"}),e.jsx("h3",{children:"시장 가기"})]}),e.jsxs(r,{to:"/brain-games/walk",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(v,{size:35,className:"mr-2"}),e.jsx("h3",{children:"동네한바퀴"})]}),e.jsxs(r,{to:"/brain-games/sentence",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(y,{size:35,className:"mr-2"}),e.jsx("h3",{children:"문장연결"})]}),e.jsxs(r,{to:"/brain-games/videos",className:"transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx(N,{size:35,className:"mr-2"}),e.jsx("h3",{children:"추억의 노래"})]})]})})]})}),B=i.memo(L);export{B as default};
