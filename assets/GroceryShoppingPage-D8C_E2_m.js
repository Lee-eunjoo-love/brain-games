const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TimeoutResult-DyoXbk5N.js","assets/vendor-player-mobx-BpFE6djQ.js","assets/Button-BRV95edO.js","assets/vendor-styled-components-nzWzLsK-.js","assets/CloseButton-JPnA-Wkb.js","assets/SuccessResult-Da0V5Kj7.js","assets/StudyStep-B5b728_A.js"])))=>i.map(i=>d[i]);
import{q as h,t as a,v as n,w as r,e as u,o as p,j as o,n as f,l as d,f as c}from"./vendor-player-mobx-BpFE6djQ.js";import{a as g}from"./vendor-styled-components-nzWzLsK-.js";import{C as b}from"./CloseButton-JPnA-Wkb.js";const x=[{id:1,name:"🍎 사과",price:1500},{id:2,name:"🍌 바나나",price:2e3},{id:3,name:"🥚 달걀",price:3500},{id:4,name:"🥛 우유",price:2800},{id:5,name:"🍞 식빵",price:2200}],l=()=>x;class S{products=[];cart=[];totalPrice=0;userPaid=0;gameState="shopping";timeLeft=30;modalMessage=null;get cartCount(){return this.cart.length}get disabledButton(){return this.gameState==="paying"||this.cartCount===0}get showModal(){return this.modalMessage!==null}constructor(){h(this,{products:r,cart:r,totalPrice:r,userPaid:r,gameState:r,timeLeft:r,modalMessage:r,cartCount:n,disabledButton:n,showModal:n,onAddToCart:a,onGoToCheckout:a,onPayment:a,onResetGame:a,onCountDown:a,onChangeGameState:a}),this.products=l()}onAddToCart=e=>{this.gameState==="shopping"&&(this.cart.push(e),this.totalPrice+=e.price)};onGoToCheckout=()=>{this.cartCount!==0&&(this.gameState="paying")};onPayment=e=>{if(this.gameState!=="paying")return;const t=this.userPaid+e;this.userPaid=t,t===this.totalPrice?this.gameState="success":t>this.totalPrice&&(this.modalMessage="금액이 초과되었습니다! 다시 지불해주세요.",this.userPaid=0)};onResetGame=()=>{this.products=l(),this.cart=[],this.totalPrice=0,this.userPaid=0,this.gameState="shopping",this.timeLeft=30};onCountDown=()=>{this.timeLeft--};onChangeGameState=e=>{this.gameState=e};onHideModal=()=>{this.modalMessage=null}}const i=new S,P=g.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffebee;
  border: 2px solid #d32f2f;
  color: #d32f2f;
  margin-bottom: 20px;
  .time-is-ticking {
    background-color: #e3f2fd;
    color: #1976d2;
    border-color: #1976d2;
  }
`,_=p(()=>{const{timeLeft:s}=i;return o.jsxs(P,{className:`timerBox ${s<=10?"time-is-ticking":""}`,children:["⏱ 남은 시간: ",s,"초"]})}),v=u.memo(_),y=d(()=>c(()=>import("./TimeoutResult-DyoXbk5N.js"),__vite__mapDeps([0,1,2,3,4]))),C=d(()=>c(()=>import("./SuccessResult-Da0V5Kj7.js"),__vite__mapDeps([5,1,2,3,4]))),k=d(()=>c(()=>import("./StudyStep-B5b728_A.js"),__vite__mapDeps([6,1,2,3,4]))),j=g.div`
  padding: 20px;
  //margin: 0 auto;
  font-family: Pretendard, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  .sales-rack button {
    background: #efefef;
    border-radius: 1rem;
    margin: 0.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    border-width: 5px;
    &:hover {
      border: 5px solid #eb9e39;
      color: #33588f;
    }
    outline: none;
  }

  .section {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    background-color: #fff;
  }

  .confirmBtn {
    width: 100%;
    padding: 15px;
    font-size: 1.2rem;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .overlay {
    padding: 40px 20px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`,G=p(()=>{const s=f(),{timeLeft:e,gameState:t}=i;return u.useEffect(()=>{let m;return(t==="shopping"||t==="paying")&&e>0?m=setInterval(()=>{i.onCountDown()},1e3):e===0&&t!=="success"&&i.onChangeGameState("timeout"),()=>{clearInterval(m)}},[e,t]),o.jsxs(j,{children:[o.jsxs("div",{className:"flex",children:[o.jsx("p",{className:"grocery-header mb-7 text-lime-700 dark:text-gray-300 font-bold ml-auto",children:"🛒 시간 내에 장보기"}),o.jsx(b,{onClick:()=>{i.onResetGame(),s("/brain-games")}})]}),o.jsx(v,{}),t==="timeout"?o.jsx(y,{}):t==="success"?o.jsx(C,{}):o.jsx(k,{})]})}),L=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{L as G,i as g};
