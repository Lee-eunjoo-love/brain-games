const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SentenceOrder-ilAuvrtX.js","assets/index-DMJvM2X8.js","assets/index-gjizToz6.css","assets/index-CKtccCyl.js","assets/styled-components.browser.esm-CEi6kdvb.js","assets/CloseButton-CoHRGhAX.js","assets/Loading-Cu7S2Exr.js"])))=>i.map(i=>d[i]);
import{u,r as l,j as n,l as p,_ as f}from"./index-DMJvM2X8.js";import{a as g}from"./styled-components.browser.esm-CEi6kdvb.js";import{m,f as d,a as i,c as x,b as o,o as b}from"./index-CKtccCyl.js";import{C as w}from"./CloseButton-CoHRGhAX.js";import{L as v}from"./Loading-Cu7S2Exr.js";class y{isLoading=null;quizData=[];currentLevel=0;data=[];shuffledWords=[];selectedWords=[];isCorrect=null;volume=0;showNext=null;isReplay=null;initialConsonant=[];voices=[];get playing(){return this.data&&this.currentLevel<this.data.length-1}constructor(){m(this,{currentLevel:o,shuffledWords:o,selectedWords:o,isCorrect:o,volume:o,showNext:o,isReplay:o,initialConsonant:o,quizData:o,isLoading:o,voices:o,playing:x,onSelectedWordClick:i,onWordClick:i,onNextLevel:i,onChangeVolume:i,onInit:i,onCloseGame:i,fetchData:d}),window.speechSynthesis.onvoiceschanged=()=>{this.voices=window.speechSynthesis.getVoices()}}fetchData=d(function*(){this.isLoading=!0,this.quizData=[];try{const s=yield(yield fetch("https://my-json-server.typicode.com/hyChunjae2023/brain-games-sentence-db/sentence")).json();this.quizData=s,this.isLoading=!1}catch(t){console.error(t)}});changeQuizData=(t=1,s=5)=>{this.quizData.length!==0&&(this.data=this.quizData.filter(e=>e.level===t).sort(()=>Math.random()-.5).slice(0,s).map(e=>e.words.length===0?{...e,words:e.sentence.split(" ")}:e))};changeShuffledWords=()=>{this.quizData.length!==0&&(this.shuffledWords=this.data[this.currentLevel].words.sort(()=>Math.random()-.5))};speak=(t,s)=>{try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance;e.lang="ko-KR",e.rate=.9,e.text=t,e.volume=this.volume,window.speechSynthesis.speak(e)}catch(e){console.log("speak error",e)}typeof s=="function"&&s()};onSelectedWordClick=t=>{this.selectedWords=this.selectedWords.filter(s=>s.id!==t)};onWordClick=(t,s)=>{this.selectedWords.map(e=>e.id).includes(s)||(this.speak(t),this.selectedWords.push({id:s,word:t}),this.selectedWords.length===this.data[this.currentLevel].words.length&&(this.selectedWords.map(h=>this.shuffledWords[h.id]).join(" ")===this.data[this.currentLevel].sentence?(this.isCorrect=!0,setTimeout(()=>this.speak(this.playing?"정답입니다! 참 잘하셨어요.":"대단하세요! 모든 문제를 완료했습니다.",()=>this.showNext=!0),2e3)):setTimeout(()=>this.speak("다시 한번 해볼까요?",()=>{this.isCorrect=!1,this.selectedWords=[],this.isCorrect=null,this.showNext=null}),2e3)))};onNextLevel=()=>{window.speechSynthesis.cancel(),this.playing?(this.currentLevel++,this.onInit()):(this.changeQuizData(),this.currentLevel=0,this.onInit())};onChangeVolume=t=>{this.volume=t};onInit=()=>{this.quizData.length!==0&&(this.changeShuffledWords(),this.selectedWords=[],this.isCorrect=null,this.showNext=null,this.initialConsonant=this.data[this.currentLevel].initialConsonant,this.volume>0&&setTimeout(()=>this.speak(this.currentLevel===0?"문장을 완성해보세요.":"",this.onReplay()),this.currentLevel===0?2e3:500))};onReplay=async(t=2e3,s)=>{setTimeout(()=>this.speak(this.data[this.currentLevel].sentence,()=>{typeof s=="function"&&s()}),t)};onCloseGame=()=>{window.speechSynthesis.cancel(),this.currentLevel=0,this.volume=0};onStartGame=()=>{this.changeQuizData(),this.volume=.8,this.onInit()}}const r=new y,C=p(()=>f(()=>import("./SentenceOrder-ilAuvrtX.js"),__vite__mapDeps([0,1,2,3,4,5,6])),{fallback:n.jsx(v,{})}),c=g.div`
  padding: 20px;
  text-align: center;
  background-color: #f0f4f8;
  min-height: 100vh;
  font-family:
    Malgun Gothic,
    sans-serif;

  .volumeControl {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .slider {
    cursor: pointer;
    width: 100px;
  }
  .volume-text {
    font-size: 1rem;
    font-weight: bold;
    width: 40px;
  }
  .title {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-top: 40px;
  }
  .info {
    font-size: 2rem;
    color: #555;
    margin: 0.5rem 0rem 1rem 1rem;
  }
  .quiz-box {
    width: 100%;
    margin: 30px auto;
    padding: 30px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 1024px) {
      max-width: 860px;
    }
  }
  .display-area {
    min-height: 80px;
    border: 4px dashed;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
  .word-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
  .word-button {
    padding: 15px 25px;
    font-size: 1.4rem;
    border: 3px solid #3498db;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
    color: #333;
    background: #fff;
    opacity: 1;
  }
  .select-word-button {
    color: #aaa;
    background: #eee;
    opacity: 0.6;
  }
  .selected-word {
    font-size: 1.6rem;
    font-weight: bold;
    color: #2c3e50;
    padding: 8px 15px;
    background: #e1f5fe;
    border-radius: 10px;
  }
  .success-msg {
    margin-top: 20px;
  }
  .next-button {
    padding: 15px 40px;
    font-size: 1.3rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
`,S=b(()=>{const a=u(),[t,s]=l.useState(!1),{isLoading:e}=r;return l.useEffect(()=>(r.fetchData(),()=>{t||r.onCloseGame()}),[t]),e?n.jsx(c,{children:"Loading..."}):n.jsxs(c,{children:[n.jsx(w,{onClick:()=>{r.onCloseGame(),s(!0),a("/brain-games")}}),n.jsx(C,{})]})}),D=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{D as S,r as s};
