const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/StartScreen-D1PCdWZU.js","assets/index-PT2eweAl.js","assets/index-gjizToz6.css","assets/index-D7q9_1VA.js","assets/Button-SAYEDmhx.js","assets/styled-components.browser.esm-ChLb7_kS.js","assets/CloseButton-BDuBcpz-.js","assets/MissionScreen-BvDGh0BN.js","assets/index-C4mVLx_O.js","assets/WalkScreen-Z4PziIOk.js","assets/createLucideIcon-BHiKyBI1.js","assets/tree-deciduous-DdyotojW.js","assets/QuizScreen-DgvE4o_0.js","assets/ResultScreen-DtmNuYL-.js"])))=>i.map(i=>d[i]);
import{u as _,r as u,j as n,l as r,_ as m}from"./index-PT2eweAl.js";import{a as x}from"./styled-components.browser.esm-ChLb7_kS.js";import{C as S}from"./CloseButton-BDuBcpz-.js";import{m as T,a,b as i,o as b}from"./index-D7q9_1VA.js";const L=[{id:1,name:"사과",image:"🍎",unit:"봉지",quanty:0},{id:2,name:"포도",image:"🍇",unit:"송이",quanty:0},{id:3,name:"우유",image:"🥛",unit:"병",quanty:0},{id:4,name:"빵",image:"🍞",unit:"봉지",quanty:0},{id:5,name:"고구마",image:"🍠",unit:"개",quanty:0},{id:6,name:"생선",image:"🐟",unit:"손",quanty:0},{id:7,name:"오이",image:"🥒",unit:"개",quanty:0},{id:8,name:"달걀",image:"🥚",unit:"개",quanty:0},{id:9,name:"막걸리",image:"🍶",unit:"병",quanty:0}],g=[{id:1,name:"과수원길",image:"orchard_tree",correct:!0},{id:2,name:"논둑길",image:"levee_tree",correct:!0},{id:3,name:"과수원길",image:"orchard_hut",correct:!1},{id:4,name:"논둑길",image:"levee_hut",correct:!1}],h=(s=2,e=4)=>L.sort(()=>Math.random()-.5).slice(0,s).map(c=>({...c,quanty:Math.floor(Math.random()*e+1)})),p=()=>{const s=[...g].filter(t=>t.correct===!0).sort(()=>Math.random()-.5).slice(0,1),e=[...g].filter(t=>t.correct===!1&&t.name!==s[0].name).slice(0,1);return s.concat(...e).concat({...s[0],id:s[0].id+101,correct:!1,image:null,name:e[0].name}).concat({...e[0],id:e[0].id+202,correct:!1,image:null,name:s[0].name}).map((t,o)=>({...t,direction:o%2===0?"왼쪽":"오른쪽",display:t.image?o:999+o})).sort(()=>Math.random()-.5)},k=()=>["START","MISSION","WALK","QUIZ","RESULT"];class v{items=[];directions=[];steps=[];step="START";timerOn=!0;TIME_LIMIT=30;timeLeft=30;score={total:0,mission:0,walk:0};mission=[];direction=[];duration=30;success={mission:!1,walk:!1};quantities=[1,2,3,4,5];constructor(){T(this,{items:i,directions:i,steps:i,step:i,timerOn:i,timeLeft:i,score:i,mission:i,direction:i,duration:i,success:i,onResetMission:a,onAddScore:a,onChangeStep:a,onSetTimeLeft:a,onToggleTimerOn:a,onResetTimeLeft:a})}onResetMission=()=>{this.success={mission:!1,walk:!1},this.mission=h(),this.direction=p()};onAddScore=e=>{e.total&&this.score.total++,e.walk&&e.walk>0?(this.score.walk++,this.success.walk=!0):e.mission&&e.mission>0&&(this.score.mission++,this.success.mission=!0)};onChangeStep=e=>{this.steps.indexOf(e)&&(this.step=e)};onSetTimeLeft=()=>{const e=this.timeLeft>0?this.timeLeft-1:0;this.timeLeft=e,this.duration=30-e};onToggleTimerOn=()=>{this.timerOn=!this.timerOn};onResetTimeLeft=()=>{this.timeLeft=30};onCloseGame=()=>{this.items=h(),this.directions=p(),this.steps=k(),this.step="START",this.timerOn=!0,this.timeLeft=30,this.score={total:0,mission:0,walk:0},this.mission=[],this.direction=[],this.duration=30,this.success={mission:!1,walk:!1}}}const l=new v,w=r(()=>m(()=>import("./StartScreen-D1PCdWZU.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),O=r(()=>m(()=>import("./MissionScreen-BvDGh0BN.js"),__vite__mapDeps([7,1,2,3,4,5,8,6]))),A=r(()=>m(()=>import("./WalkScreen-Z4PziIOk.js"),__vite__mapDeps([9,1,2,3,8,4,5,10,11,6]))),E=r(()=>m(()=>import("./QuizScreen-DgvE4o_0.js"),__vite__mapDeps([12,1,2,3,4,5,8,6]))),I=r(()=>m(()=>import("./ResultScreen-DtmNuYL-.js"),__vite__mapDeps([13,1,2,3,4,5,8,10,6]))),R=x.div`
  font-family: sans-serif;
  padding: 20px;
  margin: 0 auto;
  background-color: #f9f5e7;
  min-height: 700px;
  text-align: center;

  .title {
    font-size: 2.5rem;
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
`,y=b(()=>{const s=_(),[e,c]=u.useState(!1),{step:t,timeLeft:o,timerOn:d}=l;return u.useEffect(()=>{let f;return d&&t==="WALK"&&o>0&&(f=setInterval(()=>l.onSetTimeLeft(),1e3)),()=>clearInterval(f)},[d,t,o]),u.useEffect(()=>()=>{e||l.onCloseGame()},[e]),n.jsxs(R,{children:[n.jsx(S,{onClick:()=>{l.onCloseGame(),c(!0),s("/brain-games")}}),t==="MISSION"&&o!==0&&n.jsx(O,{}),t==="WALK"&&o!==0&&n.jsx(A,{}),t==="QUIZ"&&o!==0&&n.jsx(E,{}),(t==="RESULT"||o===0)&&n.jsx(I,{}),!t||t==="START"&&n.jsx(w,{})]})}),P=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));export{P as V,l as v};
