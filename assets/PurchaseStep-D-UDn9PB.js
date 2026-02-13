import{r as d,j as r}from"./index-DE1jlgEg.js";import{r as a,a as u}from"./styled-components.browser.esm-CwPYtlM8.js";import{b as s}from"./BrainVitaminsPage-BPygXn_u.js";import{b as f}from"./index-DZxXIiXH.js";import{u as i}from"./index-B5E5EGiw.js";import{A as g}from"./AskModal-Bz8w7u0-.js";import"./Button-CM7-ESxM.js";import"./squirrel-BOHyP51v.js";import"./createLucideIcon-FT_Po_1P.js";const h=u.div`
  padding: 20px;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: 25px;
    ${e=>e&&a`
        color: props.color || COLORS.primary;
      `}
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
    ${e=>e&&a`
        background-color: props.backgroundColor || COLORS.accent;
      `}
  }
  .basket-summary {
    margin: 20px 0;
    font-weight: bold;
  }
`,y=f(()=>{const{palette:e,items:l,basket:t,listCount:c}=s,p=i({query:"(max-width:767px)"}),m=i({query:"(min-width:768px) and (max-width:1023px)"}),x=i({query:"(min-width:1024px)"}),[b,n]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(h,{children:[r.jsx("h2",{className:"title bg-amber-200 rounded-b-4xl mb-5 py-2",children:"물건을 바구니에 담으세요"}),r.jsx("div",{className:"grid",style:{gridTemplateColumns:p?void 0:m?"1fr 1fr 1fr":"1fr 1fr 1fr 1fr"},children:l.map(o=>r.jsxs("div",{className:"sub-card text-stone-700",style:{border:t.includes(o.name)?`8px solid ${e.accent}`:"none"},onClick:()=>{if(t.length>=c&&!t.includes(o.name)){n(!0);return}s.onToggleItem(o.name)},children:[r.jsx("span",{style:{fontSize:"50px"},children:o.image}),r.jsx("p",{children:o.name})]},o.id))}),r.jsxs("div",{className:"basket-summary bg-gray-200 rounded-b-3xl py-2",style:{color:e.secondary},children:[r.jsx("p",{className:"text-justify pl-7",children:"장바구니 (담은 물건):"}),r.jsx("hr",{className:"border-dotted border-gray-500 mx-7"}),r.jsx("p",{style:{fontSize:x?"2rem":void 0},children:t.join(", ")||"없음"})]}),r.jsx("button",{className:"next-btn",style:{backgroundColor:e.accent},onClick:()=>s.onChangeScreen("RESULT"),children:"장보기 완료!"})]}),r.jsx(g,{visible:b,title:"장바구니 수량 초과",description:"장바구니가 가득 찼어요! 하나를 내려 놓고 선택하세요!",confirmText:"확인",onConfirm:()=>n(!1)})]})}),O=d.memo(y);export{O as default};
