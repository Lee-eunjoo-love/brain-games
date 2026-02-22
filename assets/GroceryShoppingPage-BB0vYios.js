const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TimeoutResult-CeuvqbXg.js","assets/index-D1-CUQrh.js","assets/index-B7AUg1Ra.css","assets/index-BYK2rc6N.js","assets/Button-B8w3F5_q.js","assets/styled-components.browser.esm-DNwYwJhB.js","assets/CloseButton-CSvVSFZR.js","assets/SuccessResult-BQNNIWkX.js","assets/StudyStep-VSjZLFpa.js","assets/createLucideIcon-CenHI-TQ.js"])))=>i.map(i=>d[i]);
import{r as d,j as t,u as b,l,_ as u}from"./index-D1-CUQrh.js";import{a as f}from"./styled-components.browser.esm-DNwYwJhB.js";import{C as x}from"./CloseButton-CSvVSFZR.js";import{m as S,a as s,c as m,b as o,o as h}from"./index-BYK2rc6N.js";const P=[{id:1,name:"🍎 사과",price:1500},{id:2,name:"🍌 바나나",price:2e3},{id:3,name:"🥚 달걀",price:3500},{id:4,name:"🥛 우유",price:2800},{id:5,name:"🍞 식빵",price:2200}],g=()=>P;class _{products=[];cart=[];totalPrice=0;userPaid=0;gameState="shopping";timeLeft=30;modalMessage=null;get cartCount(){return this.cart.length}get disabledButton(){return this.gameState==="paying"||this.cartCount===0}get showModal(){return this.modalMessage!==null}constructor(){S(this,{products:o,cart:o,totalPrice:o,userPaid:o,gameState:o,timeLeft:o,modalMessage:o,cartCount:m,disabledButton:m,showModal:m,onAddToCart:s,onGoToCheckout:s,onPayment:s,onResetGame:s,onCountDown:s,onChangeGameState:s}),this.products=g()}onAddToCart=e=>{this.gameState==="shopping"&&(this.cart.push(e),this.totalPrice+=e.price)};onGoToCheckout=()=>{this.cartCount!==0&&(this.gameState="paying")};onPayment=e=>{if(this.gameState!=="paying")return;const n=this.userPaid+e;this.userPaid=n,n===this.totalPrice?this.gameState="success":n>this.totalPrice&&(this.modalMessage="금액이 초과되었습니다! 다시 지불해주세요.",this.userPaid=0)};onResetGame=()=>{this.products=g(),this.cart=[],this.totalPrice=0,this.userPaid=0,this.gameState="shopping",this.timeLeft=30};onCountDown=()=>{this.timeLeft--};onChangeGameState=e=>{this.gameState=e};onHideModal=()=>{this.modalMessage=null}}const a=new _,C=f.div`
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
`,y=h(()=>{const{timeLeft:i}=a;return t.jsxs(C,{className:`timerBox ${i<=10?"time-is-ticking":""}`,children:["⏱ 남은 시간: ",i,"초"]})}),v=d.memo(y),k=l(()=>u(()=>import("./TimeoutResult-CeuvqbXg.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),G=l(()=>u(()=>import("./SuccessResult-BQNNIWkX.js"),__vite__mapDeps([7,1,2,3,4,5,6]))),j=l(()=>u(()=>import("./StudyStep-VSjZLFpa.js"),__vite__mapDeps([8,1,2,3,4,5,9,6]))),T=f.div`
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
`,w=h(()=>{const i=b(),[e,n]=d.useState(!1),{timeLeft:c,gameState:r}=a;return d.useEffect(()=>{let p;return(r==="shopping"||r==="paying")&&c>0?p=setInterval(()=>{a.onCountDown()},1e3):c===0&&r!=="success"&&a.onChangeGameState("timeout"),()=>{clearInterval(p)}},[c,r]),d.useEffect(()=>()=>{e||a.onResetGame()},[e]),t.jsxs(T,{children:[t.jsxs("div",{className:"flex",children:[t.jsx("p",{className:"grocery-header mb-7 text-lime-700 dark:text-gray-300 font-bold ml-auto",children:"🛒 시간 내에 장보기"}),t.jsx(x,{onClick:()=>{a.onResetGame(),n(!0),i("/brain-games")}})]}),t.jsx(v,{}),r==="timeout"?t.jsx(k,{}):r==="success"?t.jsx(G,{}):t.jsx(j,{})]})}),B=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));export{B as G,a as g};
