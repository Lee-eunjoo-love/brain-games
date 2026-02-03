import{r as a,j as r}from"./index-BmN0Kvdu.js";import{a as d}from"./styled-components.browser.esm-CWaZs8N8.js";import{b as i}from"./BrainVitaminsPage-BK75kOzG.js";import{b as l,a as c}from"./index-DdAeXEzn.js";const m=d.div`
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
`,p=l(()=>{const{timeLeft:e,palette:n,list:o}=i;a.useEffect(()=>{const t=setInterval(()=>{e>0&&i.onSetTimeLeft(e)},1e3);return()=>{clearInterval(t),e<=1&&i.onChangeScreen("PURCHASE")}},[e]);const s=a.useMemo(()=>`${e*10}%`,[e]);return r.jsxs(m,{children:[r.jsx("div",{className:"time-bar bg-amber-500 rounded-4xl",style:{width:`${s}`}}),r.jsxs("h2",{className:"title",style:{color:n.primary},children:["오늘의 장보기 목록 (",e,"초)"]}),r.jsx("div",{className:"list",children:o&&o.map(t=>r.jsxs("div",{className:"item-card",children:[t.image," ",t.name," ",t.selected," 개"]},t.id))}),r.jsx("button",{className:"next-btn",style:{backgroundColor:n.accent},onClick:c(()=>i.onChangeScreen("PURCHASE")),children:"다 외웠어요!"})]})}),u=a.memo(p);export{u as default};
