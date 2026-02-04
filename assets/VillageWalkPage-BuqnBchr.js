const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/StartScreen-yvHjQxdF.js","assets/index-C29dFLku.js","assets/index-DRIbd_2y.css","assets/index-DFl6re46.js","assets/CloseButton-DTF55Hmv.js","assets/MissionScreen-BSW8lyS-.js","assets/WalkScreen-DBV5O1-m.js","assets/QuizScreen-Cr-Uqptl.js","assets/ResultScreen-CA7Lc9KG.js"])))=>i.map(i=>d[i]);
import{u as g,r as p,j as o,l as m,_ as c}from"./index-C29dFLku.js";import{m as f,a as r,o as t,b as x,d as _}from"./index-DFl6re46.js";import{C as S}from"./CloseButton-DTF55Hmv.js";const T=[{id:1,name:"사과",image:"🍎",unit:"봉지",quanty:0},{id:2,name:"포도",image:"🍇",unit:"송이",quanty:0},{id:3,name:"우유",image:"🥛",unit:"병",quanty:0},{id:4,name:"빵",image:"🍞",unit:"봉지",quanty:0},{id:5,name:"고구마",image:"🍠",unit:"개",quanty:0},{id:6,name:"생선",image:"🐟",unit:"손",quanty:0},{id:7,name:"오이",image:"🥒",unit:"개",quanty:0},{id:8,name:"달걀",image:"🥚",unit:"개",quanty:0},{id:9,name:"막걸리",image:"🍶",unit:"병",quanty:0}],d=[{id:1,name:"과수원길",image:"orchard_tree",correct:!0},{id:2,name:"논둑길",image:"levee_tree",correct:!0},{id:3,name:"과수원길",image:"orchard_hut",correct:!1},{id:4,name:"논둑길",image:"levee_hut",correct:!1}],u=(i=2,e=4)=>T.sort(()=>Math.random()-.5).slice(0,i).map(n=>({...n,quanty:Math.floor(Math.random()*e+1)})),h=()=>{const i=[...d].filter(s=>s.correct===!0).sort(()=>Math.random()-.5).slice(0,1),e=[...d].filter(s=>s.correct===!1&&s.name!==i[0].name).slice(0,1);return i.concat(...e).concat({...i[0],id:i[0].id+101,correct:!1,image:null,name:e[0].name}).concat({...e[0],id:e[0].id+202,correct:!1,image:null,name:i[0].name}).map((s,a)=>({...s,direction:a%2===0?"왼쪽":"오른쪽",display:s.image?a:999+a})).sort(()=>Math.random()-.5)},b=()=>["START","MISSION","WALK","QUIZ","RESULT"];class w{items=[];directions=[];steps=[];step="START";timerOn=!0;TIME_LIMIT=30;timeLeft=30;score={total:0,mission:0,walk:0};mission=[];direction=[];duration=30;success={mission:!1,walk:!1};quantities=[1,2,3,4,5];constructor(){f(this,{items:t,directions:t,steps:t,step:t,timerOn:t,timeLeft:t,score:t,mission:t,direction:t,duration:t,success:t,onResetMission:r,onAddScore:r,onChangeStep:r,onSetTimeLeft:r,onToggleTimerOn:r,onResetTimeLeft:r})}onResetMission=()=>{this.success={mission:!1,walk:!1},this.mission=u(),this.direction=h()};onAddScore=e=>{e.total&&this.score.total++,e.walk&&e.walk>0?(this.score.walk++,this.success.walk=!0):e.mission&&e.mission>0&&(this.score.mission++,this.success.mission=!0)};onChangeStep=e=>{this.steps.indexOf(e)&&(this.step=e)};onSetTimeLeft=()=>{const e=this.timeLeft>0?this.timeLeft-1:0;this.timeLeft=e,this.duration=30-e};onToggleTimerOn=()=>{this.timerOn=!this.timerOn};onResetTimeLeft=()=>{this.timeLeft=30};onCloseGame=()=>{this.items=u(),this.directions=h(),this.steps=b(),this.step="START",this.timerOn=!0,this.timeLeft=30,this.score={total:0,mission:0,walk:0},this.mission=[],this.direction=[],this.duration=30,this.success={mission:!1,walk:!1}}}const l=new w,L=m(()=>c(()=>import("./StartScreen-yvHjQxdF.js"),__vite__mapDeps([0,1,2,3,4]))),k=m(()=>c(()=>import("./MissionScreen-BSW8lyS-.js"),__vite__mapDeps([5,1,2,3,4]))),v=m(()=>c(()=>import("./WalkScreen-DBV5O1-m.js"),__vite__mapDeps([6,1,2,3,4]))),O=m(()=>c(()=>import("./QuizScreen-Cr-Uqptl.js"),__vite__mapDeps([7,1,2,3,4]))),A=m(()=>c(()=>import("./ResultScreen-CA7Lc9KG.js"),__vite__mapDeps([8,1,2,3,4]))),R=_.div`
  font-family: sans-serif;
  padding: 20px;
  min-width: 600px;
  margin: 0 auto;
  background-color: #f9f5e7;
  min-height: 700px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 400px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    max-width: 600px;
  }

  .title {
    font-size: 28px;
    color: #2d5a27;
    margin-bottom: 20px;
  }

  .card {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  button {
    display: block;
    width: 100%;
    padding: 20px;
    font-size: 22px;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    background-color: #4a7c44;
    color: white;
    font-weight: bold;
  }

  .timer {
    font-size: 24px;
    color: #e67e22;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .report-line {
    text-align: left;
    font-size: 1.2rem;
    margin: 10px 0;
  }
`,E=x(()=>{const i=g(),{step:e,timeLeft:n,timerOn:s}=l;return p.useEffect(()=>{let a;return s&&e==="WALK"&&n>0&&(a=setInterval(()=>l.onSetTimeLeft(),1e3)),()=>clearInterval(a)},[s,e,n]),o.jsxs(R,{children:[o.jsx(S,{onClick:()=>{l.onCloseGame(),i("/brain-games")}}),e==="MISSION"&&n!==0&&o.jsx(k,{}),e==="WALK"&&n!==0&&o.jsx(v,{}),e==="QUIZ"&&n!==0&&o.jsx(O,{}),(e==="RESULT"||n===0)&&o.jsx(A,{}),!e||e==="START"&&o.jsx(L,{})]})}),j=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{j as V,l as v};
