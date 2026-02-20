const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SentenceOrder-D_TfUjhr.js","assets/vendor-player-mobx-BpFE6djQ.js","assets/vendor-styled-components-nzWzLsK-.js","assets/CloseButton-JPnA-Wkb.js","assets/Loading-BbqOCeZ6.js"])))=>i.map(i=>d[i]);
import{q as h,y as l,t as o,v as u,w as i,o as p,n as f,e as g,j as n,l as m,f as x}from"./vendor-player-mobx-BpFE6djQ.js";import{a as w}from"./vendor-styled-components-nzWzLsK-.js";import{C as v}from"./CloseButton-JPnA-Wkb.js";import{L as b}from"./Loading-BbqOCeZ6.js";class y{isLoading=null;quizData=[];currentLevel=0;data=[];shuffledWords=[];selectedWords=[];isCorrect=null;volume=0;showNext=null;isReplay=null;initialConsonant=[];utterance=null;voices=[];get playing(){return this.data&&this.currentLevel<this.data.length-1}constructor(){h(this,{currentLevel:i,shuffledWords:i,selectedWords:i,isCorrect:i,volume:i,showNext:i,isReplay:i,initialConsonant:i,quizData:i,isLoading:i,voices:i,playing:u,onSelectedWordClick:o,onWordClick:o,onNextLevel:o,onChangeVolume:o,onInit:o,onCloseGame:o,fetchData:l}),window.speechSynthesis.onvoiceschanged=()=>{this.voices=window.speechSynthesis.getVoices()},this.utterance=new SpeechSynthesisUtterance,this.utterance.lang="ko-KR",this.utterance.rate=.9}fetchData=l(function*(){this.isLoading=!0,this.quizData=[];try{const t=yield(yield fetch("https://my-json-server.typicode.com/hyChunjae2023/brain-games-sentence-db/sentence")).json();this.quizData=t,this.isLoading=!1}catch(e){console.error(e)}});changeQuizData=(e=1,t=5)=>{this.quizData.length!==0&&(this.data=this.quizData.filter(s=>s.level===e).sort(()=>Math.random()-.5).slice(0,t).map(s=>s.words.length===0?{...s,words:s.sentence.split(" ")}:s))};changeShuffledWords=()=>{this.quizData.length!==0&&(this.shuffledWords=this.data[this.currentLevel].words.sort(()=>Math.random()-.5))};speak=(e,t)=>{try{window.speechSynthesis.cancel(),this.utterance.text=e,this.utterance.volume=this.volume,window.speechSynthesis.speak(this.utterance)}catch(s){console.log("speak error",s)}typeof t=="function"&&t()};onSelectedWordClick=e=>{this.selectedWords=this.selectedWords.filter(t=>t.id!==e)};onWordClick=(e,t)=>{this.selectedWords.map(s=>s.id).includes(t)||(this.speak(e),this.selectedWords.push({id:t,word:e}),this.selectedWords.length===this.data[this.currentLevel].words.length&&(this.selectedWords.map(d=>this.shuffledWords[d.id]).join(" ")===this.data[this.currentLevel].sentence?(this.isCorrect=!0,setTimeout(()=>this.speak(this.playing?"정답입니다! 참 잘하셨어요.":"대단하세요! 모든 문제를 완료했습니다.",()=>this.showNext=!0),2e3)):setTimeout(()=>this.speak("다시 한번 해볼까요?",()=>{this.isCorrect=!1,this.selectedWords=[],this.isCorrect=null,this.showNext=null}),2e3)))};onNextLevel=()=>{window.speechSynthesis.cancel(),this.playing?(this.currentLevel++,this.onInit()):(this.changeQuizData(),this.currentLevel=0,this.onInit())};onChangeVolume=e=>{this.volume=e};onInit=()=>{this.quizData.length!==0&&(this.changeShuffledWords(),this.selectedWords=[],this.isCorrect=null,this.showNext=null,this.initialConsonant=this.data[this.currentLevel].initialConsonant,this.volume>0&&setTimeout(()=>this.speak(this.currentLevel===0?"문장을 완성해보세요.":"",this.onReplay()),this.currentLevel===0?2e3:500))};onReplay=async(e=2e3,t)=>{setTimeout(()=>this.speak(this.data[this.currentLevel].sentence,()=>{typeof t=="function"&&t()}),e)};onCloseGame=()=>{window.speechSynthesis.cancel(),this.currentLevel=0,this.volume=0};onStartGame=()=>{this.changeQuizData(),this.volume=.8,this.onInit()}}const r=new y,C=m(()=>x(()=>import("./SentenceOrder-D_TfUjhr.js"),__vite__mapDeps([0,1,2,3,4])),{fallback:n.jsx(b,{})}),c=w.div`
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
`,L=p(()=>{const a=f(),{isLoading:e}=r;return g.useEffect(()=>{r.fetchData()},[]),e?n.jsx(c,{children:"Loading..."}):n.jsxs(c,{children:[n.jsx(v,{onClick:()=>{r.onCloseGame(),a("/brain-games")}}),n.jsx(C,{})]})}),j=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{j as S,r as s};
