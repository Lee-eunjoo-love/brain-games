const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TimeoutResult-lZHT7k9D.js","assets/index-CpQLY7nh.js","assets/index-Dr2ZW4gd.css","assets/index-BVTA4wJF.js","assets/Button-KHBYqA6v.js","assets/styled-components.browser.esm-F6ZMPFnP.js","assets/CloseButton-CafWXU1-.js","assets/SuccessResult-D1Gr-fGn.js","assets/StudyStep-Dq8v-Xr0.js","assets/createLucideIcon-DPcSdfjF.js"])))=>i.map(i=>d[i]);
import{r as u,j as o,u as h,l as d,_ as c}from"./index-CpQLY7nh.js";import{a as p}from"./styled-components.browser.esm-F6ZMPFnP.js";import{C as f}from"./CloseButton-CafWXU1-.js";import{m as b,a,c as n,b as r,o as g}from"./index-BVTA4wJF.js";const x=[{id:1,name:"🍎 사과",price:1500},{id:2,name:"🍌 바나나",price:2e3},{id:3,name:"🥚 달걀",price:3500},{id:4,name:"🥛 우유",price:2800},{id:5,name:"🍞 식빵",price:2200}],l=()=>x;class S{products=[];cart=[];totalPrice=0;userPaid=0;gameState="shopping";timeLeft=30;modalMessage=null;get cartCount(){return this.cart.length}get disabledButton(){return this.gameState==="paying"||this.cartCount===0}get showModal(){return this.modalMessage!==null}constructor(){b(this,{products:r,cart:r,totalPrice:r,userPaid:r,gameState:r,timeLeft:r,modalMessage:r,cartCount:n,disabledButton:n,showModal:n,onAddToCart:a,onGoToCheckout:a,onPayment:a,onResetGame:a,onCountDown:a,onChangeGameState:a}),this.products=l()}onAddToCart=e=>{this.gameState==="shopping"&&(this.cart.push(e),this.totalPrice+=e.price)};onGoToCheckout=()=>{this.cartCount!==0&&(this.gameState="paying")};onPayment=e=>{if(this.gameState!=="paying")return;const t=this.userPaid+e;this.userPaid=t,t===this.totalPrice?this.gameState="success":t>this.totalPrice&&(this.modalMessage="금액이 초과되었습니다! 다시 지불해주세요.",this.userPaid=0)};onResetGame=()=>{this.products=l(),this.cart=[],this.totalPrice=0,this.userPaid=0,this.gameState="shopping",this.timeLeft=30};onCountDown=()=>{this.timeLeft--};onChangeGameState=e=>{this.gameState=e};onHideModal=()=>{this.modalMessage=null}}const i=new S,P=p.div`
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
`,_=g(()=>{const{timeLeft:s}=i;return o.jsxs(P,{className:`timerBox ${s<=10?"time-is-ticking":""}`,children:["⏱ 남은 시간: ",s,"초"]})}),y=u.memo(_),v=d(()=>c(()=>import("./TimeoutResult-lZHT7k9D.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),C=d(()=>c(()=>import("./SuccessResult-D1Gr-fGn.js"),__vite__mapDeps([7,1,2,3,4,5,6]))),k=d(()=>c(()=>import("./StudyStep-Dq8v-Xr0.js"),__vite__mapDeps([8,1,2,3,4,5,9,6]))),j=p.div`
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
`,G=g(()=>{const s=h(),{timeLeft:e,gameState:t}=i;return u.useEffect(()=>{let m;return(t==="shopping"||t==="paying")&&e>0?m=setInterval(()=>{i.onCountDown()},1e3):e===0&&t!=="success"&&i.onChangeGameState("timeout"),()=>{clearInterval(m)}},[e,t]),o.jsxs(j,{children:[o.jsxs("div",{className:"flex",children:[o.jsx("p",{className:"grocery-header mb-7 text-lime-700 dark:text-gray-300 font-bold ml-auto",children:"🛒 시간 내에 장보기"}),o.jsx(f,{onClick:()=>{i.onResetGame(),s("/brain-games")}})]}),o.jsx(y,{}),t==="timeout"?o.jsx(v,{}):t==="success"?o.jsx(C,{}):o.jsx(k,{})]})}),M=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{M as G,i as g};
