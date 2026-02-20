import{e as d,o as u,z as t,j as e}from"./vendor-player-mobx-BpFE6djQ.js";import{r as i,a as g}from"./vendor-styled-components-nzWzLsK-.js";import{b as n}from"./brainVitaminsStore-B5ujejFC.js";import f from"./AskModal-BHK1rqSW.js";import"./Button-BRV95edO.js";const h=g.div`
  padding: 20px;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: 2rem;
    ${r=>r&&i`
        color: props.color || COLORS.primary;
      `}
    @media screen and (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .sub-card {
    background-color: white;
    padding: 30px;
    border-radius: 25px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .item-card {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    font-size: 24px;
    font-weight: bold;
    border: 7px solid #e0e0e0;
  }
  .next-btn {
    width: 100%;
    padding: 20px;
    border-radius: 50px;
    font-size: 24px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    ${r=>r&&i`
        background-color: props.backgroundColor || COLORS.accent;
      `}
  }
  .basket-summary {
    margin: 20px 0;
    font-weight: bold;
  }
`,y=u(()=>{const{palette:r,items:l,basket:o,listCount:c}=n,p=t({query:"(max-width:767px)"}),x=t({query:"(min-width:768px) and (max-width:1023px)"}),m=t({query:"(min-width:1024px)"}),[b,a]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx("div",{className:"title bg-amber-200 rounded-b-4xl mb-5 py-2",children:"물건을 바구니에 담으세요"}),e.jsx("div",{className:"grid",style:{gridTemplateColumns:p?void 0:x?"1fr 1fr 1fr":"1fr 1fr 1fr 1fr"},children:l.map(s=>e.jsxs("div",{className:"sub-card text-stone-700",style:{border:o.includes(s.name)?`8px solid ${r.accent}`:"none"},onClick:()=>{if(o.length>=c&&!o.includes(s.name)){a(!0);return}n.onToggleItem(s.name)},children:[e.jsx("span",{style:{fontSize:"50px"},children:s.image}),e.jsx("p",{children:s.name})]},s.id))}),e.jsxs("div",{className:"basket-summary bg-gray-200 rounded-b-3xl py-2",style:{color:r.secondary},children:[e.jsx("p",{className:"text-justify pl-7",children:"장바구니 (담은 물건):"}),e.jsx("hr",{className:"border-dotted border-gray-500 mx-7"}),e.jsx("p",{style:{fontSize:m?"2rem":void 0},children:o.join(", ")||"없음"})]}),e.jsx("button",{className:"next-btn",style:{backgroundColor:r.accent},onClick:()=>n.onChangeScreen("RESULT"),children:"장보기 완료!"})]}),e.jsx(f,{visible:b,title:"장바구니 수량 초과",message:"장바구니가 가득 찼어요! 하나를 내려 놓고 선택하세요!",confirmText:"확인",onConfirm:()=>a(!1)})]})}),v=d.memo(y);export{v as default};
