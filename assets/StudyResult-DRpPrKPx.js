import{e as l,o as b,n as u,z as g,j as e,t as r}from"./vendor-player-mobx-BpFE6djQ.js";import{a as p}from"./vendor-styled-components-nzWzLsK-.js";import{b as t}from"./brainVitaminsStore-B5ujejFC.js";const h="/brain-games/assets/result_title_image-BCdw29Xg.png",f=p.div`
  padding: 20px;
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
`,y=b(()=>{const c=u(),{levels:d,level:n,palette:o,list:a,successCount:s}=t,x=g({query:"(max-width:767px)"}),m=l.useMemo(()=>n===3?["힘내요! 다시 한번 해볼까요?","힘내요! 다시 한번 해볼까요?","조금만 힘내요! 다시 한번 해볼까요?","아쉬워요! 다시 한번 해볼까요?","참 잘하셨어요! 또 한번 해볼까요?"]:n===2?["힘내요! 다시 한번 해볼까요?","조금만 힘내요! 다시 한번 해볼까요?","아쉬워요! 다시 한번 해볼까요?","참 잘하셨어요! 또 한번 해볼까요?"]:["힘내요! 다시 한번 해볼까요?","아쉬워요! 다시 한번 해볼까요?","참 잘하셨어요! 또 한번 해볼까요?"],[n]);return e.jsxs(f,{children:[e.jsx("div",{className:"bg-gray-200 flex justify-center rounded-2xl mb-6",children:e.jsx("img",{src:h,className:"w-[calc(200px)]",alt:"result title"})}),e.jsxs("div",{className:"bg-gray-100 rounded-2xl py-5",children:[e.jsxs("div",{className:`flex justify-center mb-2 ${x?"text-[calc(1.2rem)]":"text-3xl"}`,children:["👍 ",m[s<1?0:s-1]," "]}),e.jsxs("p",{children:["총 ",a.length,"개 중 ",s,"개를 맞혔습니다"]})]}),e.jsx("div",{className:`py-5 my-5 text-5xl border-3 rounded-2xl border-stone-500 dark:border-stone-200 ${s===a.length?"":"opacity-10"}`,children:"🥇"}),a.length>s&&e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.accent},onClick:r(()=>{t.onResetTimeLeft(),t.onChangeScreen("STUDY")}),children:"다시 도전하기"}),a.length===s&&d.includes(n+1)&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.accent},onClick:r(()=>{t.onResetList(n),t.onEmptyBasket(),t.onResetTimeLeft(),t.onChangeScreen("STUDY")}),children:"다시 도전하기"}),e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.accent},onClick:r(()=>{const i=n+1;t.onSetLevel(i),t.onResetList(i),t.onEmptyBasket(),t.onResetTimeLeft(),t.onChangeScreen("STUDY")}),children:"다음 단계 도전하기"})]}),e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.button},onClick:r(()=>{t.onInit(1),c("/brain-games/vitamins")}),children:"기억쏙쏙 메인화면"})]})}),v=l.memo(y);export{v as default};
