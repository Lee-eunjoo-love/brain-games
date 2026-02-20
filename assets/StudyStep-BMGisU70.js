import{e as n,o as l,z as c,j as r,t as m}from"./vendor-player-mobx-BpFE6djQ.js";import{a as x}from"./vendor-styled-components-nzWzLsK-.js";import{b as i}from"./brainVitaminsStore-B5ujejFC.js";const p=x.div`
  padding: 20px;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: 2rem;
    @media screen and (max-width: 767px) {
      font-size: 1.5rem;
    }
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
`,b=l(()=>{const{timeLeft:e,palette:o,list:a}=i,s=c({query:"(min-width:1024px)"});n.useEffect(()=>{const t=setInterval(()=>{e>0&&i.onSetTimeLeft(e)},1e3);return()=>{clearInterval(t),e<=1&&i.onChangeScreen("PURCHASE")}},[e]);const d=n.useMemo(()=>`${e*10}%`,[e]);return r.jsxs(p,{children:[r.jsx("div",{className:"time-bar bg-amber-500 rounded-4xl",style:{width:`${d}`}}),r.jsxs("div",{className:"title bg-amber-200 rounded-b-4xl mb-5 py-2",style:{color:o.primary},children:["오늘의 장보기 목록 (",e,"초)"]}),r.jsx("div",{className:"list",children:a&&a.map(t=>r.jsxs("div",{className:"item-card text-stone-700",style:{fontSize:s?"2rem":void 0},children:[t.image," ",t.name," ",t.selected," 개"]},t.id))}),r.jsx("button",{className:"next-btn",style:{backgroundColor:o.accent},onClick:m(()=>i.onChangeScreen("PURCHASE")),children:"다 외웠어요!"})]})}),h=n.memo(b);export{h as default};
