import{r as d,j as r}from"./index-Bl8bo_Ae.js";import{r as s,a as c}from"./styled-components.browser.esm-yJ9f8FnG.js";import{b as t}from"./BrainVitaminsPage-BtsitgxP.js";import{b as l}from"./index-hAamA5tt.js";const p=c.div`
  padding: 20px;
  min-width: 450px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: 28px;
    ${e=>e&&s`
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
    border: 2px solid #e0e0e0;
  }
  .next-btn {
    width: 100%;
    padding: 20px;
    border-radius: 50px;
    font-size: 24px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    ${e=>e&&s`
        background-color: props.backgroundColor || COLORS.accent;
      `}
  }
  .basket-summary {
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;
  }
`,x=l(()=>{const{palette:e,items:a,basket:n,listCount:i}=t;return r.jsxs(p,{children:[r.jsx("h2",{className:"title",children:"물건을 바구니에 담으세요"}),r.jsx("div",{className:"grid",children:a.map(o=>r.jsxs("div",{className:"sub-card",style:{border:n.includes(o.name)?`4px solid ${e.accent}`:"none"},onClick:()=>{if(n.length>=i&&!n.includes(o.name)){alert("장바구니가 가득 찼어요! 하나를 내려 놓고 선택하세요!");return}t.onToggleItem(o.name)},children:[r.jsx("span",{style:{fontSize:"50px"},children:o.image}),r.jsx("p",{children:o.name})]},o.id))}),r.jsxs("div",{className:"basket-summary",style:{color:e.secondary},children:["담은 물건: ",n.join(", ")||"없음"]}),r.jsx("button",{className:"next-btn",style:{backgroundColor:e.accent},onClick:()=>t.onChangeScreen("RESULT"),children:"장보기 완료!"})]})}),h=d.memo(x);export{h as default};
