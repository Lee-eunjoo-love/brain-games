import{r as n,j as r}from"./index-CNB9q87L.js";import{b as d,a as l,d as c}from"./index-DLhHdLF8.js";import{b as i}from"./BrainVitaminsPage-DIUziVd8.js";const m=c.div`
  padding: 20px;
  min-width: 450px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: 28px;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }
  .item-card {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    font-size: 24px;
    font-weight: bold;
    border: 2px solid #e0e0e0;
  }
  .time-bar {
    height: 10px;
    transition: white 1s linear;
    margin-bottom: 20px;
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
`,x=d(()=>{const{timeLeft:e,palette:a,list:o}=i;n.useEffect(()=>{const t=setInterval(()=>{e>0&&i.onSetTimeLeft(e)},1e3);return()=>{clearInterval(t),e<=1&&i.onChangeScreen("PURCHASE")}},[e]);const s=n.useMemo(()=>`${e*10}%`,[e]);return r.jsxs(m,{children:[r.jsx("div",{className:"time-bar bg-amber-500 rounded-4xl",style:{width:`${s}`}}),r.jsxs("h2",{className:"title",style:{color:a.primary},children:["오늘의 장보기 목록 (",e,"초)"]}),r.jsx("div",{className:"list",children:o&&o.map(t=>r.jsxs("div",{className:"item-card text-stone-700",children:[t.image," ",t.name," ",t.selected," 개"]},t.id))}),r.jsx("button",{className:"next-btn",style:{backgroundColor:a.accent},onClick:l(()=>i.onChangeScreen("PURCHASE")),children:"다 외웠어요!"})]})}),h=n.memo(x);export{h as default};
