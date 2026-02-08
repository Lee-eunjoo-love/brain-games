import{r as x,j as r}from"./index-DoibdHHY.js";import{b as m,r as a,d as b}from"./index-D7_kMMtS.js";import{b as t}from"./BrainVitaminsPage-BF_gkLov.js";import{u as n}from"./index-BkIGAp9u.js";const u=b.div`
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
`,g=m(()=>{const{palette:e,items:i,basket:s,listCount:d}=t,l=n({query:"(max-width:767px)"}),c=n({query:"(min-width:768px) and (max-width:1023px)"}),p=n({query:"(min-width:1024px)"});return r.jsxs(u,{children:[r.jsx("h2",{className:"title bg-amber-200 rounded-b-4xl mb-5 py-2",children:"물건을 바구니에 담으세요"}),r.jsx("div",{className:"grid",style:{gridTemplateColumns:l?void 0:c?"1fr 1fr 1fr":"1fr 1fr 1fr 1fr"},children:i.map(o=>r.jsxs("div",{className:"sub-card text-stone-700",style:{border:s.includes(o.name)?`8px solid ${e.accent}`:"none"},onClick:()=>{if(s.length>=d&&!s.includes(o.name)){alert("장바구니가 가득 찼어요! 하나를 내려 놓고 선택하세요!");return}t.onToggleItem(o.name)},children:[r.jsx("span",{style:{fontSize:"50px"},children:o.image}),r.jsx("p",{children:o.name})]},o.id))}),r.jsxs("div",{className:"basket-summary bg-gray-200 rounded-b-3xl py-2",style:{color:e.secondary},children:[r.jsx("p",{className:"text-justify pl-7",children:"장바구니 (담은 물건):"}),r.jsx("hr",{className:"border-dotted border-gray-500 mx-7"}),r.jsx("p",{style:{fontSize:p?"2rem":void 0},children:s.join(", ")||"없음"})]}),r.jsx("button",{className:"next-btn",style:{backgroundColor:e.accent},onClick:()=>t.onChangeScreen("RESULT"),children:"장보기 완료!"})]})}),w=x.memo(g);export{w as default};
