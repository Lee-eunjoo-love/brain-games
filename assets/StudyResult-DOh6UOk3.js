import{r as l,u,j as e}from"./index-BSG3KDjV.js";import{a as b}from"./styled-components.browser.esm-BoRxZwK-.js";import{b as t}from"./brainVitaminsStore-BK2AjWiW.js";import{o as g,a}from"./index-HCPN0Hp3.js";import{u as p}from"./index-Dnq2giMe.js";const h="/brain-games/assets/result_title_image-CpAmggwx.png",f=b.div`
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
`,y=g(()=>{const c=u(),{levels:d,level:n,palette:o,list:r,successCount:s}=t,m=p({query:"(max-width:767px)"}),x=l.useMemo(()=>n===3?["힘내요! 다시 한번 해볼까요?","힘내요! 다시 한번 해볼까요?","조금만 힘내요! 다시 한번 해볼까요?","아쉬워요! 다시 한번 해볼까요?","참 잘하셨어요! 또 한번 해볼까요?"]:n===2?["힘내요! 다시 한번 해볼까요?","조금만 힘내요! 다시 한번 해볼까요?","아쉬워요! 다시 한번 해볼까요?","참 잘하셨어요! 또 한번 해볼까요?"]:["힘내요! 다시 한번 해볼까요?","아쉬워요! 다시 한번 해볼까요?","참 잘하셨어요! 또 한번 해볼까요?"],[n]);return e.jsxs(f,{children:[e.jsx("div",{className:"bg-gray-200 flex justify-center rounded-2xl mb-6",children:e.jsx("img",{src:h,className:"w-[calc(200px)]",alt:"result title"})}),e.jsxs("div",{className:"bg-gray-100 rounded-2xl py-5",children:[e.jsxs("div",{className:`flex justify-center mb-2 ${m?"text-[calc(1.2rem)]":"text-3xl"}`,children:["👍 ",x[s<1?0:s-1]," "]}),e.jsxs("p",{children:["총 ",r.length,"개 중 ",s,"개를 맞혔습니다"]})]}),e.jsx("div",{className:`py-5 my-5 text-5xl border-3 rounded-2xl border-stone-500 dark:border-stone-200 ${s===r.length?"":"opacity-10"}`,children:"🥇"}),r.length>s&&e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.accent},onClick:a(()=>{t.onResetTimeLeft(),t.onChangeScreen("STUDY")}),children:"다시 도전하기"}),r.length===s&&d.includes(n+1)&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.accent},onClick:a(()=>{t.onResetList(n),t.onEmptyBasket(),t.onResetTimeLeft(),t.onChangeScreen("STUDY")}),children:"다시 도전하기"}),e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.accent},onClick:a(()=>{const i=n+1;t.onSetLevel(i),t.onResetList(i),t.onEmptyBasket(),t.onResetTimeLeft(),t.onChangeScreen("STUDY")}),children:"다음 단계 도전하기"})]}),e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.button},onClick:a(()=>{t.onInit(1),c("/brain-games/vitamins")}),children:"기억쏙쏙 메인화면"})]})}),S=l.memo(y);export{S as default};
