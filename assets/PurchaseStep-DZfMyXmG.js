import{r as d,j as e}from"./index-CNB9q87L.js";import{b as c,r as s,d as l}from"./index-DLhHdLF8.js";import{b as n}from"./BrainVitaminsPage-DIUziVd8.js";const p=l.div`
  padding: 20px;
  min-width: 450px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: 28px;
    ${r=>r&&s`
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
    ${r=>r&&s`
        background-color: props.backgroundColor || COLORS.accent;
      `}
  }
  .basket-summary {
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;
  }
`,x=c(()=>{const{palette:r,items:a,basket:t,listCount:i}=n;return e.jsxs(p,{children:[e.jsx("h2",{className:"title",children:"물건을 바구니에 담으세요"}),e.jsx("div",{className:"grid",children:a.map(o=>e.jsxs("div",{className:"sub-card text-stone-700",style:{border:t.includes(o.name)?`4px solid ${r.accent}`:"none"},onClick:()=>{if(t.length>=i&&!t.includes(o.name)){alert("장바구니가 가득 찼어요! 하나를 내려 놓고 선택하세요!");return}n.onToggleItem(o.name)},children:[e.jsx("span",{style:{fontSize:"50px"},children:o.image}),e.jsx("p",{children:o.name})]},o.id))}),e.jsxs("div",{className:"basket-summary",style:{color:r.secondary},children:["담은 물건: ",t.join(", ")||"없음"]}),e.jsx("button",{className:"next-btn",style:{backgroundColor:r.accent},onClick:()=>n.onChangeScreen("RESULT"),children:"장보기 완료!"})]})}),u=d.memo(x);export{u as default};
