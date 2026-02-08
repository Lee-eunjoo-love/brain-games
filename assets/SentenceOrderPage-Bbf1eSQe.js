import{r as p,j as s}from"./index-CIG10r8j.js";import{m as v,a,c as w,o as l,b as g,d as b}from"./index-BclWg61X.js";const y=[{id:1,level:1,sentence:"오늘 날씨가 정말 화창합니다",words:["오늘","날씨가","정말","화창합니다"]},{id:2,level:1,sentence:"맛있는 점심 식사를 하셨나요",words:["맛있는","점심","식사를","하셨나요"]},{id:3,level:1,sentence:"건강을 위해 매일 산책을 해요",words:["건강을","위해","매일","산책을","해요"]},{id:4,level:2,sentence:"신은 준비하는 사람에게만 빛나는 보석을 준다",words:[]},{id:5,level:1,sentence:"지혜를 얻는 것이 금을 얻는 것보다 낫다",words:[]},{id:6,level:1,sentence:"가장 큰 승리는 내가 나를 이기는 것이다",words:[]},{id:7,level:1,sentence:"행복은 진실한 마음에서만 우러 나온다",words:[]},{id:8,level:1,sentence:"사람이 책을 만들고 책은 사람을 만든다",words:[]},{id:9,level:1,sentence:"진실한 생각에서 진실한 말과 행동이 나온다",words:[]},{id:10,level:1,sentence:"뜻있는 자는 이루고 노력하는 자는 얻는다",words:[]},{id:11,level:1,sentence:"그릇됨을 깨달으면 상냥한 마음이 나타난다",words:[]},{id:12,level:1,sentence:"태산을 넘으면 그 다음엔 평지가 보인다",words:[]},{id:13,level:2,sentence:"인생에서 가장 행복한 시간은 일에 몰두하고 있을 때다",words:[]},{id:14,level:2,sentence:"군자는 옳은 일에 민첩하고 소인은 이익에 예민하다",words:[]},{id:15,level:2,sentence:"단단한 돌이나 쇠는 높은 곳에서 떨어지면 깨지기 쉽다",words:[]},{id:16,level:1,sentence:"알록달록 단풍으로 예쁘게 물든 산길을 걸어요",words:[]},{id:17,level:1,sentence:"삶은 우리 자신이 만드는 것이다",words:[]},{id:18,level:1,sentence:"사슴 가족이 오순도순 소풍을 나왔어요",words:[]},{id:19,level:1,sentence:"어제 친구를 만나 오랜만에 즐거운 시간을 보냈어요",words:[]},{id:20,level:1,sentence:"귀여운 노란 오리들이 물 위를 헤엄치고 있어요",words:[]},{id:21,level:1,sentence:"주방 냉장고에 맛있는 과일들이 있어요",words:[]},{id:22,level:2,sentence:"거실에 켜져 있는 텔레비젼을 리모콘을 찾아 꺼 주세요",words:[]},{id:23,level:3,sentence:"주말에 아이들과 놀이공원에서 놀이기구도 타고 즐거운 시간을 보냈어요",words:[]},{id:24,level:1,sentence:"가을에 노란 은행이 곱게 물들었어요",words:[]},{id:25,level:1,sentence:"정원에 노란 가을 국화가 곱게 피어 있어요",words:[]},{id:26,level:1,sentence:"새벽 일찍 뒷산에서 고사리를 뜯어 왔어요",words:[]},{id:27,level:1,sentence:"아름다운 입술을 갖고 싶다면 친절한 말을 하라",words:[]},{id:28,level:2,sentence:"사랑스러운 눈을 갖고 싶다면 사람들에게서 좋은 점을 보라",words:[]},{id:29,level:1,sentence:"편안한 자세로 척추를 펴고 앉습니다",words:[]},{id:30,level:1,sentence:"단풍이 빨갛게 물든 가을날 등산을 했어요",words:[]}],f=(n=1,t=5)=>y.filter(e=>e.level===n).sort(()=>Math.random()-.5).slice(0,t).map(e=>e.words.length===0?{...e,words:e.sentence.split(" ")}:e),C=n=>n.sort(()=>Math.random()-.5);class j{currentLevel=0;data=[];shuffledWords=[];selectedWords=[];isCorrect=null;volume=0;showNext=null;isReplay=null;get playing(){return this.currentLevel<this.data.length-1}constructor(){v(this,{currentLevel:l,shuffledWords:l,selectedWords:l,isCorrect:l,volume:l,showNext:l,isReplay:l,playing:w,onWordClick:a,onNextLevel:a,onChangeVolume:a,onInit:a}),this.data=f(),this.volume=.8,this.onInit()}speak=(t,e)=>{if(t&&t!==""){window.speechSynthesis.cancel();const r=new SpeechSynthesisUtterance(t);r.lang="ko-KR",r.rate=.9,r.volume=this.volume,window.speechSynthesis.speak(r)}typeof e=="function"&&e()};onWordClick=(t,e)=>{this.selectedWords.includes(e)||(this.speak(t),this.selectedWords.push(e),this.selectedWords.length===this.data[this.currentLevel].words.length&&(this.selectedWords.map(c=>this.shuffledWords[c]).join(" ")===this.data[this.currentLevel].sentence?(this.isCorrect=!0,setTimeout(()=>this.speak(this.playing?"정답입니다! 참 잘하셨어요.":"대단하세요! 모든 문제를 완료했습니다.",()=>this.showNext=!0),2e3)):setTimeout(()=>this.speak("다시 한번 해볼까요?",()=>{this.isCorrect=!1,this.selectedWords=[],this.isCorrect=null,this.showNext=null}),2e3)))};onNextLevel=()=>{this.playing?(this.currentLevel++,this.onInit()):(this.data=f(),this.currentLevel=0,this.onInit())};onChangeVolume=t=>{this.volume=t};onInit=()=>{this.shuffledWords=C(this.data[this.currentLevel].words),this.selectedWords=[],this.isCorrect=null,this.showNext=null,this.volume>0&&setTimeout(()=>this.speak(this.currentLevel===0?"문장을 완성해보세요.":"",this.onReply()),this.currentLevel===0?2e3:500)};onReply=async(t=2e3,e)=>{this.isReplay||(this.isReplay=!0,setTimeout(()=>this.speak(this.data[this.currentLevel].sentence,()=>{this.isReplay=!1,typeof e=="function"&&e()}),t))}}const d=new j,k=b.div`
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
    margin-top: 60px;
  }
  .info {
    font-size: 1.2rem;
    color: #555;
  }
  .quiz-box {
    max-width: 600px;
    margin: 30px auto;
    padding: 30px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
`,S=g(()=>{const{volume:n,isCorrect:t,selectedWords:e,shuffledWords:r,showNext:c,playing:x,isReplay:N}=d,[h,u]=p.useState(!1),m=p.useCallback(()=>{u(!0),d.onReply(0),setTimeout(()=>u(!1),3500)},[]);return p.useEffect(()=>{},[]),s.jsxs(k,{children:[s.jsxs("div",{className:"volume-control",children:[s.jsxs("span",{style:{fontSize:"1.5rem"},children:[" ",n===0?"🔇":"🔊"," "]}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:n,onChange:o=>d.onChangeVolume(parseFloat(o.target.value)),className:"slider"}),s.jsxs("span",{className:"volume-text",children:[Math.round(n*100),"%"]})]}),s.jsx("h1",{className:"title",children:"🔊 소리 나는 문장 퀴즈"}),s.jsx("p",{className:"info",children:"단어를 순서대로 눌러보세요."}),s.jsx("div",{className:"flex items-center justify-end pr-15",style:{marginBottom:"-30px"},children:s.jsx("span",{className:`bg-amber-100 text-blue-800 px-2.5 pb-0 pt-1.5 outline-0 rounded-t-2xl ${h?"cursor-default opacity-0":"cursor-pointer opacity-100"}`,onClick:()=>{h||m()},children:"다시 듣기"})}),s.jsxs("div",{className:"quiz-box",children:[s.jsx("div",{className:"display-area",style:{borderColor:t===!0?"#4CAF50":t===!1?"#f44336":"#ddd"},children:e.map(o=>s.jsx("span",{className:"selected-word",children:r[o]},o))}),s.jsx("div",{className:"word-grid",children:r.map((o,i)=>s.jsx("button",{disabled:e.includes(i)||t===!0,onClick:()=>d.onWordClick(o,i),className:"word-button",style:{backgroundColor:e.includes(i)?"#eee":"#fff",color:e.includes(i)?"#aaa":"#333",opacity:e.includes(i)?.6:1},children:o},i))})]}),t&&s.jsxs("div",{className:"success-msg",children:[s.jsx("h2",{style:{color:"#4CAF50",fontSize:"2rem"},children:"정답입니다! 👏"}),c&&s.jsx("button",{onClick:()=>d.onNextLevel(),className:"next-button",children:x?"다음 문제":"처음으로"})]})]})});export{S as default};
