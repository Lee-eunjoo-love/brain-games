import{r as d,j as e}from"./index-PT2eweAl.js";import{r as i,a as u}from"./styled-components.browser.esm-ChLb7_kS.js";import{b as t}from"./brainVitaminsStore-B9pAnnPg.js";import{o as f}from"./index-D7q9_1VA.js";import{u as n}from"./index-C4mVLx_O.js";import g from"./AskModal-DjQ9G2hV.js";import"./Button-SAYEDmhx.js";const h=u.div`
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
`,y=f(()=>{const{palette:r,items:l,basket:s,listCount:c}=t,p=n({query:"(max-width:767px)"}),m=n({query:"(min-width:768px) and (max-width:1023px)"}),x=n({query:"(min-width:1024px)"}),[b,a]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx("div",{className:"title bg-amber-200 rounded-b-4xl mb-5 py-2",children:"물건을 바구니에 담으세요"}),e.jsx("div",{className:"grid",style:{gridTemplateColumns:p?void 0:m?"1fr 1fr 1fr":"1fr 1fr 1fr 1fr"},children:l.map(o=>e.jsxs("div",{className:"sub-card text-stone-700",style:{border:s.includes(o.name)?`8px solid ${r.accent}`:"none"},onClick:()=>{if(s.length>=c&&!s.includes(o.name)){a(!0);return}t.onToggleItem(o.name)},children:[e.jsx("span",{style:{fontSize:"50px"},children:o.image}),e.jsx("p",{children:o.name})]},o.id))}),e.jsxs("div",{className:"basket-summary bg-gray-200 rounded-b-3xl py-2",style:{color:r.secondary},children:[e.jsx("p",{className:"text-justify pl-7",children:"장바구니 (담은 물건):"}),e.jsx("hr",{className:"border-dotted border-gray-500 mx-7"}),e.jsx("p",{style:{fontSize:x?"2rem":void 0},children:s.join(", ")||"없음"})]}),e.jsx("button",{className:"next-btn",style:{backgroundColor:r.accent},onClick:()=>t.onChangeScreen("RESULT"),children:"장보기 완료!"})]}),e.jsx(g,{visible:b,title:"장바구니 수량 초과",message:"장바구니가 가득 찼어요! 하나를 내려 놓고 선택하세요!",confirmText:"확인",onConfirm:()=>a(!1)})]})}),N=d.memo(y);export{N as default};
