const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TimeoutResult-Bb9a4K_F.js","assets/index-BKOw1k5d.js","assets/index-Cf73rmD4.css","assets/index-DtxwxNSj.js","assets/CloseButton-CZRpDIYN.js","assets/SuccessResult-CkhY4EZm.js","assets/StudyStep-BBPgGeCX.js"])))=>i.map(i=>d[i]);
import{r as u,j as o,u as f,l as n,_ as c}from"./index-BKOw1k5d.js";import{m as h,a as r,c as m,o as a,b as l,d as g}from"./index-DtxwxNSj.js";import{C as b}from"./CloseButton-CZRpDIYN.js";const x=[{id:1,name:"🍎 사과",price:1500},{id:2,name:"🍌 바나나",price:2e3},{id:3,name:"🥚 달걀",price:3500},{id:4,name:"🥛 우유",price:2800},{id:5,name:"🍞 식빵",price:2200}],p=()=>x;class S{products=p();cart=[];totalPrice=0;userPaid=0;gameState="shopping";timeLeft=30;get cartCount(){return this.cart.length}get disabledButton(){return this.gameState==="paying"||this.cartCount===0}constructor(){h(this,{products:a,cart:a,totalPrice:a,userPaid:a,gameState:a,timeLeft:a,cartCount:m,disabledButton:m,onAddToCart:r,onGoToCheckout:r,onPayment:r,onResetGame:r,onCountDown:r,onChangeGameState:r})}onAddToCart=e=>{this.gameState==="shopping"&&(this.cart.push(e),this.totalPrice+=e.price)};onGoToCheckout=()=>{this.cartCount!==0&&(this.gameState="paying")};onPayment=e=>{if(this.gameState!=="paying")return;const t=this.userPaid+e;this.userPaid=t,t===this.totalPrice?this.gameState="success":t>this.totalPrice&&(alert("금액이 초과되었습니다! 다시 지불해주세요."),this.userPaid=0)};onResetGame=()=>{this.products=p(),this.cart=[],this.totalPrice=0,this.userPaid=0,this.gameState="shopping",this.timeLeft=30};onCountDown=()=>{this.timeLeft--};onChangeGameState=e=>{this.gameState=e}}const s=new S,P=g.div`
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
`,_=l(()=>{const{timeLeft:i}=s;return o.jsxs(P,{className:`timerBox ${i<=10?"time-is-ticking":""}`,children:["⏱ 남은 시간: ",i,"초"]})}),v=u.memo(_),y=n(()=>c(()=>import("./TimeoutResult-Bb9a4K_F.js"),__vite__mapDeps([0,1,2,3,4]))),C=n(()=>c(()=>import("./SuccessResult-CkhY4EZm.js"),__vite__mapDeps([5,1,2,3,4]))),k=n(()=>c(()=>import("./StudyStep-BBPgGeCX.js"),__vite__mapDeps([6,1,2,3,4]))),j=g.div`
  padding: 20px;
  //margin: 0 auto;
  font-family: Pretendard, sans-serif;
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
`,G=l(()=>{const i=f(),{timeLeft:e,gameState:t}=s;return u.useEffect(()=>{let d;return(t==="shopping"||t==="paying")&&e>0?d=setInterval(()=>{s.onCountDown()},1e3):e===0&&t!=="success"&&s.onChangeGameState("timeout"),()=>{clearInterval(d)}},[e,t]),o.jsxs(j,{children:[o.jsxs("div",{className:"flex",children:[o.jsx("p",{className:"grocery-header mb-7 text-lime-700 font-bold ml-auto",children:"🛒 시간 내에 장보기"}),o.jsx(b,{onClick:()=>{s.onResetGame(),i("/brain-games")}})]}),o.jsx(v,{}),t==="timeout"?o.jsx(y,{}):t==="success"?o.jsx(C,{}):o.jsx(k,{})]})}),R=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{R as G,s as g};
