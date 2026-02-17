const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainScreen-DwxoT1Pu.js","assets/index-DaWVBbE4.js","assets/index-9Kx9xr0y.css","assets/index-D6m3-sr4.js","assets/createLucideIcon-D0qk1S9M.js","assets/flower-2-Bd0-4wj8.js","assets/styled-components.browser.esm-CPuqwdWy.js","assets/CloseButton-Bf1eZus4.js","assets/LevelScreen-UUJsaD9j.js","assets/index-BjEwEci1.js","assets/squirrel-Dmphu8Th.js","assets/GameScreen-CyPhJQI7.js","assets/ArrowButton-DxNTbLf0.js"])))=>i.map(i=>d[i]);
import{r as I,j as e,u as E,l as f,_ as p}from"./index-DaWVBbE4.js";import{a as M}from"./styled-components.browser.esm-CPuqwdWy.js";import{C as N}from"./CloseButton-Bf1eZus4.js";import{d as r,f as s,a as g,c as C,b as c,o as j}from"./index-D6m3-sr4.js";class P{idiomsProcess=null;flowersProcess=null;wordsProcess=null;fruitsProcess=null;idioms=[];flowers=[];words=[];fruits=[];GAME_DATA=null;NUMBERS=[];NUMBER_UINTS=[];gameData=[];view="MAIN";mode="";levelInfo={};grid=[];selected=[];highlightOn=!0;msg="";showAlert=!1;get SelectedVal(){const[o,t]=this.selected;return o&&o!==null?this.grid[o][t]:""}constructor(){r(this,{gameData:c,view:c,mode:c,levelInfo:c,grid:c,selected:c,highlightOn:c,msg:c,idiomsProcess:c,flowersProcess:c,wordsProcess:c,fruitsProcess:c,idioms:c,flowers:c,words:c,fruits:c,showAlert:c,SelectedVal:C,onStartLevel:g,onCheckSuccess:g,onCheckInput:g,onChangeGameMode:g,onChangeView:g,onToggleHighlightOn:g,onChangeSelected:g,onCloseGame:g,onToggleShowAlert:g,fetchIdiomsData:s,fetchWordsData:s,fetchFlowersData:s,fetchFruitsData:s}),this.NUMBERS=["","일","이","삼","사","오","육","칠","팔","구"],this.NUMBER_UINTS=["","십 ","백 ","천 ","만 ","십 ","백 ","천 ","억 "],this.GAME_DATA={SAJA:{title:"사자성어 (지혜)",levels:[{id:1,type:"IDIOM",level:1,name:"1단계"},{id:2,type:"IDIOM",level:2,name:"2단계"},{id:3,type:"IDIOM",level:3,name:"3단계"}]},NUMBER:{title:"숫자 놀이 (논리)",levels:[{id:1,type:"NUMBER",level:1,name:"1단계"},{id:2,type:"NUMBER",level:2,name:"2단계"},{id:3,type:"NUMBER",level:3,name:"3단계"}]},ENGLISH:{title:"영어 단어 (기억)",levels:[{id:1,type:"ENGLISH",level:1,name:"1단계"},{id:2,type:"ENGLISH",level:2,name:"2단계"},{id:3,type:"ENGLISH",level:3,name:"3단계"}]},FLOWER:{title:"꽃 이름 (정서)",levels:[{id:1,type:"FLOWER",level:1,name:"1단계"},{id:2,type:"FLOWER",level:2,name:"2단계"}]},FRUIT:{title:"과일 이름 (활력)",levels:[{id:1,type:"FRUIT",level:1,name:"1단계"}]}},this.gameData=this.getGameData()}fetchIdiomsData=s(function*(){const o="https://my-json-server.typicode.com/hyChunjae2023/brain-games-idioms-db/idioms";this.idiomsProcess=1,this.idioms=[];try{const i=yield(yield fetch(o)).json();this.idioms=i,this.idiomsProcess=3}catch(t){this.idiomProcess=null,console.error(t)}});fetchWordsData=s(function*(){const o="https://my-json-server.typicode.com/hyChunjae2023/brain-games-words-db/words";this.wordsProcess=1,this.words=[];try{const i=yield(yield fetch(o)).json();this.words=i,this.wordsProcess=3}catch(t){this.wordsProcess=null,console.error(t)}});fetchFlowersData=s(function*(){const o="https://my-json-server.typicode.com/hyChunjae2023/brain-games-flowers-db/flowers";this.flowersProcess=1,this.flowers=[];try{const i=yield(yield fetch(o)).json();this.flowers=i,this.flowersProcess=3}catch(t){this.flowersProcess=null,console.error(t)}});fetchFruitsData=s(function*(){const o="https://my-json-server.typicode.com/hyChunjae2023/brain-games-fruits-db/fruits";this.fruitsProcess=1,this.fruits=[];try{const i=yield(yield fetch(o)).json();this.fruits=i,this.fruitsProcess=3}catch(t){this.fruitsProcess=null,console.error(t)}});getIdioms=(o=1,t="kor")=>this.idioms.filter(i=>i.level===o).sort(()=>Math.random()-.5).slice(0,1).map(i=>{const l=t==="kor"?i.idiom.split(""):i.chinese.split("");return{type:"IDIOM",level:o,name:o===3?"3단계 (고급)":o===2?"2단계 (중급)":"1단계 (기초)",size:4,grid:[[l[0],"",l[2],""],["",l[3],"",l[1]],[l[3],"",l[1],""],["",l[0],"",l[2]]],sol:[[l[0],l[1],l[2],l[3]],[l[2],l[3],l[0],l[1]],[l[3],l[2],l[1],l[0]],[l[1],l[0],l[3],l[2]]],items:l,description:i.description,original:i.chinese,characters:i.characters}})[0];getGrid=(o=1,t,i=1)=>o===3?[[t[4],t[2],"","",t[6],"","","",""],[t[5],"","",t[0],t[8],t[4],"","",""],["",t[8],t[7],"","","","",t[5],""],[t[7],"","","",t[5],"","","",t[2]],[t[3],"","",t[7],"","","","",t[0]],[t[6],"","","",t[1],"","","",t[5]],["",t[5],"","","","",t[1],t[7],""],["","","",t[3],t[0],t[8],"","",t[4]],["","","","",t[7],"","",t[6],t[8]]]:o===2?i===4?[["",t[4],t[5],"","",""],[t[3],"","","","",""],["",t[3],t[4],"","",t[0]],[t[5],"","",t[1],t[3],""],["","","","","",t[1]],["","","",t[4],t[2],""]]:i===3?[[t[0],t[1],t[2],t[3],t[4],t[5]],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],[t[5],t[4],t[3],t[2],t[1],t[0]]]:i===2?[["",t[3],"",t[1],t[5],""],["",t[1],t[5],t[2],"",""],["",t[2],t[0],"","",""],["","","","",t[0],t[2]],[t[3],"",t[4],"","",t[1]],[t[2],"","",t[3],t[4],""]]:[[t[0],"","","","",""],["",t[1],"","","",""],["","",t[2],"","",""],["","","",t[3],"",""],["","","","",t[4],""],["","","","","",t[5]]]:i===3?[["",t[0],"",t[3]],["",t[2],t[0],t[1]],["",t[1],"",""],["","","",t[0]]]:i===2?[[t[0],"","",t[2]],["",t[1],"",""],[t[3],t[0],"",""],["","",t[0],""]]:[[t[0],"","",""],["",t[1],"",""],["","",t[2],""],["","","",t[3]]];getSolution=(o=1,t,i=1)=>o===3?[[t[4],t[2],t[3],t[5],t[6],t[7],t[8],t[0],t[1]],[t[5],t[6],t[1],t[0],t[8],t[4],t[2],t[3],t[7]],[t[0],t[8],t[7],t[2],t[3],t[1],t[4],t[5],t[6]],[t[7],t[4],t[8],t[6],t[5],t[0],t[3],t[1],t[2]],[t[3],t[1],t[5],t[7],t[4],t[2],t[6],t[8],t[0]],[t[6],t[0],t[2],t[8],t[1],t[3],t[7],t[4],t[5]],[t[8],t[5],t[0],t[4],t[2],t[6],t[1],t[7],t[3]],[t[1],t[7],t[6],t[3],t[0],t[8],t[5],t[2],t[4]],[t[2],t[3],t[4],t[1],t[7],t[5],t[0],t[6],t[8]]]:o===2?i===4?[[t[2],t[4],t[5],t[0],t[1],t[3]],[t[3],t[0],t[1],t[5],t[4],t[2]],[t[1],t[3],t[4],t[2],t[5],t[0]],[t[5],t[2],t[0],t[1],t[3],t[4]],[t[4],t[5],t[2],t[3],t[0],t[1]],[t[0],t[1],t[3],t[4],t[2],t[5]]]:i===3?[[t[0],t[1],t[2],t[3],t[4],t[5]],[t[3],t[5],t[4],t[0],t[2],t[1]],[t[4],t[0],t[1],t[5],t[3],t[2]],[t[2],t[3],t[5],t[1],t[0],t[4]],[t[1],t[2],t[0],t[4],t[5],t[3]],[t[5],t[4],t[3],t[0],t[1],t[2]]]:i===2?[[t[4],t[3],t[2],t[1],t[5],t[0]],[t[0],t[1],t[5],t[2],t[3],t[4]],[t[5],t[2],t[0],t[4],t[1],t[3]],[t[1],t[4],t[3],t[5],t[0],t[2]],[t[3],t[5],t[4],t[0],t[2],t[1]],[t[2],t[0],t[1],t[3],t[4],t[5]]]:[[t[0],t[3],t[5],t[4],t[1],t[2]],[t[2],t[1],t[4],t[5],t[0],t[3]],[t[3],t[4],t[2],t[1],t[5],t[0]],[t[1],t[5],t[0],t[3],t[2],t[4]],[t[5],t[2],t[3],t[0],t[4],t[1]],[t[4],t[0],t[1],t[2],t[3],t[5]]]:i===3?[[t[1],t[0],t[2],t[3]],[t[3],t[2],t[0],t[1]],[t[0],t[1],t[3],t[2]],[t[2],t[3],t[1],t[0]]]:i===2?[[t[0],t[3],t[1],t[2]],[t[2],t[1],t[3],t[0]],[t[3],t[0],t[2],t[1]],[t[1],t[2],t[0],t[3]]]:[[t[0],t[2],t[3],t[1]],[t[3],t[1],t[0],t[2]],[t[1],t[3],t[2],t[0]],[t[2],t[0],t[1],t[3]]];getNumberComma=o=>{try{return`${o.join("").replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",").split("").join(" ")}:`}catch{return""}};getNumberText=o=>{try{return o.map((t,i)=>{const l=o.length-i,h=Math.floor(l/4),a=l%4,d=parseInt(t);return(d===0||d===1&&l>1&&a!==1?"":this.NUMBERS[d])+(d===0?"":this.NUMBER_UINTS[l-1])+(d===0&&h>0&&a===1?"만":"")}).join("")}catch{return""}};getRandomNumber=(o=1,t=1)=>{const i=o===3?9:o===2?6:4,h=[0,1,2,3,4,5,6,7,8,9].sort(()=>Math.random()-.5).slice(0,i);if(h[0]===0){const d=Math.floor(Math.random()*(i-1))+1;h[0]=h[d],h[d]=0}const a=h.map(d=>d.toString());return o===3?{id:3,level:o,type:"NUMBER",name:"3단계 (9X9)",size:9,grid:this.getGrid(o,a,t),sol:this.getSolution(o,a,t),items:a,description:`${this.getNumberComma(a)}${this.getNumberText(a)}`}:o===2?{id:2,level:o,type:"NUMBER",name:"2단계 (6X6)",size:6,grid:this.getGrid(o,a,t),sol:this.getSolution(o,a,t),items:a,description:`${this.getNumberComma(a)}${this.getNumberText(a)}`}:{id:1,level:o,type:"NUMBER",name:"1단계 (4X4)",size:4,grid:this.getGrid(o,a,t),sol:this.getSolution(o,a,t),items:a,description:`${this.getNumberComma(a)}${this.getNumberText(a)}`}};getWords=(o=1,t=1,i="ENGLISH",l="")=>{const h=o===3?9:o===2?6:4,a=(i==="FRUIT"?this.fruits:i==="FLOWER"?this.flowers:this.words).filter(d=>d.level===o&&d.word.length===h&&(!l||l!==d.word)).sort(()=>Math.random()-.5).slice(0,1).map(d=>({...d,word:d.word.split("")}))[0];return o===3?{id:3,level:o,type:i,name:"3단계 (9X9)",size:9,grid:this.getGrid(o,a.word,t),sol:this.getSolution(o,a.word,t),items:a.word,description:a.description}:o===2?{id:2,level:o,type:i,name:"2단계 (6X6)",size:6,grid:this.getGrid(o,a.word,t),sol:this.getSolution(o,a.word,t),items:a.word,description:a.description}:{id:1,level:o,type:i,name:"1단계 (4X4)",size:4,grid:this.getGrid(o,a.word,t),sol:this.getSolution(o,a.word,t),items:a.word,description:a.description}};numberOfDuplicates=o=>o.map(t=>[...new Set(t.filter((i,l)=>t.indexOf(i)!==l))].length).filter(t=>t>0).length;isConsistentWithStokuLogic=o=>this.numberOfDuplicates(o)>0?!1:this.numberOfDuplicates(o[0].map((l,h)=>o.map(a=>a[h])))===0;getGameData=()=>({...this.GAME_DATA});onStartLevel(o){const t=Math.floor(Math.random()*3)+1;if(o.type==="IDIOM"?o=this.getIdioms(o.level):o.type==="NUMBER"?o=this.getRandomNumber(o.level,t):(o.type==="ENGLISH"||o.type==="FLOWER"||o.type==="FRUIT")&&(o=this.getWords(o.level,t,o.type,this.levelInfo.items?this.levelInfo.items.join(""):"")),!o.grid){alert("초기 데이터 설정 오류입니다.");return}this.selected=[],this.levelInfo=o,this.grid=o.grid.map(i=>[...i]),this.msg="빈칸을 채워보세요!",this.view="GAME"}onCheckSuccess=(o,t)=>o.length===0||t.length===0?!1:JSON.stringify(o)===JSON.stringify(t)?!0:o.flat().some(i=>i==="")?!1:this.isConsistentWithStokuLogic(o);onCheckInput=o=>{if(this.selected[0]===void 0||this.selected[0]===null||this.selected[1]===void 0||this.selected[1]===null){this.msg="먼저 빈칸을 선택하세요!",this.showAlert=!0;return}const[t,i]=this.selected,l=this.levelInfo;if(l.grid[t][i]!=="")return;const h=this.grid.map(y=>[...y]);h[t][i]=o,this.grid=h;const a=this.onCheckSuccess(h,l.sol),d=l.sol[t][i]===o;this.msg=a?"🎉 스도쿠를 모두 완성하셨습니다.":d?"참 잘하셨어요!":"다시 한번 생각해볼까요?",(a||!d)&&(this.showAlert=!0)};onChangeGameMode=o=>{this.mode=o,this.view="LEVEL"};onChangeView=o=>{this.view=o};onToggleHighlightOn=()=>{this.highlightOn=!this.highlightOn};onChangeSelected=o=>{this.selected=o};onCloseGame=()=>{this.gameData=this.getGameData(),this.view="MAIN",this.mode="",this.levelInfo={},this.grid=[],this.selected=[],this.highlightOn=!0,this.msg="",this.idioms=[],this.idiomsProcess=null,this.words=[],this.wordsProcess=null,this.flowers=[],this.flowersProcess=null,this.fruits=[],this.fruitsProcess=null};onToggleShowAlert=(o,t=null)=>{o&&(this.msg=o),this.showAlert=t||!this.showAlert}}const S=new P,v=()=>e.jsxs("button",{type:"button",class:"bg-indigo-500 ...",disabled:!0,children:[e.jsx("svg",{class:"animate-spin motion-reduce:hidden ...",viewBox:"0 0 24 24"}),"Loading ..."]}),w=I.memo(v),R=f(()=>p(()=>import("./MainScreen-DwxoT1Pu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),{fallback:e.jsx(w,{})}),D=f(()=>p(()=>import("./LevelScreen-UUJsaD9j.js"),__vite__mapDeps([8,1,2,3,9,10,4,5,6,7])),{fallback:e.jsx(w,{})}),O=f(()=>p(()=>import("./GameScreen-CyPhJQI7.js"),__vite__mapDeps([11,1,2,3,9,12,4,6,7])),{fallback:e.jsx(w,{})}),_=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ddd;
  min-height: 600px;
  font-family: Malgun Gothic;

  .title {
    margin-bottom: 30px;
    color: #6a50c9;
  }

  .menuBox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    //flex-direction: column;
    gap: 15px;
    width: 100%;
    //max-width: 350;
    button {
      border: 2px solid #efefef;
      background: #948eb3;
      min-height: 15vh;
      align-items: center;
      font-weight: 500;
      &:hover {
        opacity: 0.9;
        color: #2c97b8;
        font-weight: 800;
        border: 4px solid #b2c3c9;
      }
      outline: none;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .mainBtn {
    padding: 25px;
    font-size: 2rem;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 2px #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
  }

  .levelBtn {
    padding: 1rem;
    font-size: 1.5rem;
    width: 100%;
    margin: 0 auto;
    height: 10rem;
    //background-color: #fff;
    //border: 2px solid #333;
    border-radius: 2rem;
    border-color: transparent;
  }

  .backBtn {
    align-self: flex-start;
    margin-bottom: 10px;
    font-size: 1.5rem;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .gameTitle {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .toggleRow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .toggle {
    padding: 5px 15px;
    color: #fff;
    border: none;
    border-radius: 15px;
  }

  .msgText {
    font-size: 18px;
    color: #d32f2f;
    font-weight: bold;
    min-height: 24px;
    margin-bottom: 10px;
  }

  .grid {
    display: inline-block;
    background-color: #fff;
  }

  .row {
    display: flex;
  }

  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
  }

  .pad {
    display: flex;
    gap: 5px;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pad9 {
    background: none;
    padding: 0;
    button + button {
      margin-left: 0.2rem;
    }
    button {
      padding: 0;
    }
  }

  .padBtn {
    height: 50px;
    font-size: 18px;
    background-color: #ffd600;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    padding-left: 0;
    padding-right: 0;
    min-width: 35px;
  }
`,k=j(()=>{const x=E(),{view:o}=S;return e.jsxs(_,{children:[e.jsx(N,{onClick:()=>{S.onCloseGame(),x("/brain-games")}}),o==="MAIN"?e.jsx(R,{}):o==="LEVEL"?e.jsx(D,{}):e.jsx(O,{})]})}),U=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{U as S,S as s};
