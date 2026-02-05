const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TimeoutResult-DEkWj2A3.js","assets/index-Dk3huhtS.js","assets/index-Cbj90Bpe.css","assets/index-BkOrEXm0.js","assets/CloseButton-BuR0yKd5.js","assets/SuccessResult-BN71dXQg.js","assets/StudyStep-RrZ8-lJl.js"])))=>i.map(i=>d[i]);
import{r as u,j as o,u as f,l as n,_ as c}from"./index-Dk3huhtS.js";import{m as h,a as r,c as m,o as a,b as l,d as g}from"./index-BkOrEXm0.js";import{C as x}from"./CloseButton-BuR0yKd5.js";const b=[{id:1,name:"🍎 사과",price:1500},{id:2,name:"🍌 바나나",price:2e3},{id:3,name:"🥚 달걀",price:3500},{id:4,name:"🥛 우유",price:2800},{id:5,name:"🍞 식빵",price:2200}],p=()=>b;class S{products=p();cart=[];totalPrice=0;userPaid=0;gameState="shopping";timeLeft=30;get cartCount(){return this.cart.length}get disabledButton(){return this.gameState==="paying"||this.cartCount===0}constructor(){h(this,{products:a,cart:a,totalPrice:a,userPaid:a,gameState:a,timeLeft:a,cartCount:m,disabledButton:m,onAddToCart:r,onGoToCheckout:r,onPayment:r,onResetGame:r,onCountDown:r,onChangeGameState:r})}onAddToCart=t=>{this.gameState==="shopping"&&(this.cart.push(t),this.totalPrice+=t.price)};onGoToCheckout=()=>{this.cartCount!==0&&(this.gameState="paying")};onPayment=t=>{if(this.gameState!=="paying")return;const e=this.userPaid+t;this.userPaid=e,e===this.totalPrice?this.gameState="success":e>this.totalPrice&&(alert("금액이 초과되었습니다! 다시 지불해주세요."),this.userPaid=0)};onResetGame=()=>{this.products=p(),this.cart=[],this.totalPrice=0,this.userPaid=0,this.gameState="shopping",this.timeLeft=30};onCountDown=()=>{this.timeLeft--};onChangeGameState=t=>{this.gameState=t}}const s=new S,P=g.div`
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
`,_=l(()=>{const{timeLeft:i}=s;return o.jsxs(P,{className:`timerBox ${i<=10?"time-is-ticking":""}`,children:["⏱ 남은 시간: ",i,"초"]})}),y=u.memo(_),C=n(()=>c(()=>import("./TimeoutResult-DEkWj2A3.js"),__vite__mapDeps([0,1,2,3,4]))),v=n(()=>c(()=>import("./SuccessResult-BN71dXQg.js"),__vite__mapDeps([5,1,2,3,4]))),j=n(()=>c(()=>import("./StudyStep-RrZ8-lJl.js"),__vite__mapDeps([6,1,2,3,4]))),k=g.div`
  padding: 20px;
  //margin: 0 auto;
  font-family: Pretendard, sans-serif;
  text-align: center;

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
`,G=l(()=>{const i=f(),{timeLeft:t,gameState:e}=s;return u.useEffect(()=>{let d;return(e==="shopping"||e==="paying")&&t>0?d=setInterval(()=>{s.onCountDown()},1e3):t===0&&e!=="success"&&s.onChangeGameState("timeout"),()=>{clearInterval(d)}},[t,e]),o.jsxs(k,{children:[o.jsxs("div",{className:"flex",children:[o.jsx("p",{className:"grocery-header mb-7 text-lime-700 font-bold ml-auto",children:"🛒 시간 내에 장보기"}),o.jsx(x,{onClick:()=>{s.onResetGame(),i("/brain-games")}})]}),o.jsx(y,{}),e==="timeout"?o.jsx(C,{}):e==="success"?o.jsx(v,{}):o.jsx(j,{})]})}),R=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{R as G,s as g};
