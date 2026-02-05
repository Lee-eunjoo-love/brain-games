import{r as l,j as e}from"./index-B8m8T8rI.js";import{b as x,a as r,d as m}from"./index-BgDPyGW3.js";import{b as t}from"./BrainVitaminsPage-GwjKX05h.js";const p="/brain-games/assets/result_title_image-BCdw29Xg.png",b=m.div`
  padding: 20px;
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
`,u=x(()=>{const{levels:c,level:n,palette:o,list:a,successCount:s}=t,d=l.useMemo(()=>n===3?["힘내요! 다시 한번 해볼까요?","힘내요! 다시 한번 해볼까요?","조금만 힘내요! 다시 한번 해볼까요?","아쉬워요! 다시 한번 해볼까요?","참 잘하셨어요! 또 한번 해볼까요?"]:n===2?["힘내요! 다시 한번 해볼까요?","조금만 힘내요! 다시 한번 해볼까요?","아쉬워요! 다시 한번 해볼까요?","참 잘하셨어요! 또 한번 해볼까요?"]:["힘내요! 다시 한번 해볼까요?","아쉬워요! 다시 한번 해볼까요?","참 잘하셨어요! 또 한번 해볼까요?"],[n]);return e.jsxs(b,{children:[e.jsx("div",{className:"bg-gray-200 flex justify-center rounded-2xl min-w-[calc(450px)] mb-6",children:e.jsx("img",{src:p,className:"w-[calc(200px)]",alt:"result title"})}),e.jsxs("div",{children:[e.jsxs("h1",{style:{fontSize:"20px"},className:"text-stone-700",children:["👍 ",d[s<1?0:s-1]]}),e.jsxs("p",{className:"text-stone-700",children:["총 ",a.length,"개 중 ",s,"개를 맞혔습니다"]})]}),e.jsx("div",{className:"p-5 m-5",children:e.jsx("span",{className:`text-5xl border-3 rounded-2xl border-stone-200 p-1 ${s===a.length?"":"opacity-10"}`,children:"🥇"})}),a.length>s&&e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.accent},onClick:r(()=>{t.onResetTimeLeft(),t.onChangeScreen("STUDY")}),children:"다시 도전하기"}),a.length===s&&c.includes(n+1)&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.accent},onClick:r(()=>{t.onResetList(n),t.onEmptyBasket(),t.onResetTimeLeft(),t.onChangeScreen("STUDY")}),children:"다시 도전하기"}),e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.accent},onClick:r(()=>{const i=n+1;t.onSetLevel(i),t.onResetList(i),t.onEmptyBasket(),t.onResetTimeLeft(),t.onChangeScreen("STUDY")}),children:"다음 단계 도전하기"})]}),e.jsx("button",{className:"next-btn mb-3",style:{backgroundColor:o.button},onClick:r(()=>{t.onInit(1)}),children:"기억쏙쏙 메인화면"})]})}),j=l.memo(u);export{j as default};
