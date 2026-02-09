import{r as o,j as r}from"./index-D8bgO0PL.js";import{b as l,a as c,d as m}from"./index-CfSuF5a-.js";import{b as i}from"./BrainVitaminsPage-CsbGRUC1.js";import{u as p}from"./index-CnlUEylY.js";const x=m.div`
  padding: 20px;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: 25px;
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
`,b=l(()=>{const{timeLeft:e,palette:n,list:s}=i,a=p({query:"(min-width:1024px)"});o.useEffect(()=>{const t=setInterval(()=>{e>0&&i.onSetTimeLeft(e)},1e3);return()=>{clearInterval(t),e<=1&&i.onChangeScreen("PURCHASE")}},[e]);const d=o.useMemo(()=>`${e*10}%`,[e]);return r.jsxs(x,{children:[r.jsx("div",{className:"time-bar bg-amber-500 rounded-4xl",style:{width:`${d}`}}),r.jsxs("h2",{className:"title bg-amber-200 rounded-b-4xl mb-5 py-2",style:{color:n.primary},children:["오늘의 장보기 목록 (",e,"초)"]}),r.jsx("div",{className:"list",children:s&&s.map(t=>r.jsxs("div",{className:"item-card text-stone-700",style:{fontSize:a?"2rem":void 0},children:[t.image," ",t.name," ",t.selected," 개"]},t.id))}),r.jsx("button",{className:"next-btn",style:{backgroundColor:n.accent},onClick:c(()=>i.onChangeScreen("PURCHASE")),children:"다 외웠어요!"})]})}),y=o.memo(b);export{y as default};
