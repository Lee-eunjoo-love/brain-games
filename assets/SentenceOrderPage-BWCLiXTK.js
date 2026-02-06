import{r as p,j as s}from"./index-AKohPlLk.js";import{m as u,a,c as x,o as d,b as m,d as f}from"./index-DJdFCjPY.js";const w=[{id:1,sentence:"오늘 날씨가 정말 화창합니다",words:["오늘","날씨가","정말","화창합니다"]},{id:2,sentence:"맛있는 점심 식사를 하셨나요",words:["맛있는","점심","식사를","하셨나요"]},{id:3,sentence:"건강을 위해 매일 산책을 해요",words:["건강을","위해","매일","산책을","해요"]},{id:4,sentence:"신은 준비하는 사람에게만 빛나는 보석을 준다",words:[]},{id:5,sentence:"지혜를 얻는 것이 금을 얻는 것보다 낫다",words:[]},{id:6,sentence:"가장 큰 승리는 내가 나를 이기는 것이다",words:[]},{id:7,sentence:"행복은 진실한 마음에서만 우러 나온다",words:[]},{id:8,sentence:"사람이 책을 만들고 책은 사람을 만든다",words:[]},{id:9,sentence:"진실한 생각에서 진실한 말과 행동이 나온다",words:[]},{id:10,sentence:"뜻있는 자는 이루고 노력하는 자는 얻는다",words:[]},{id:11,sentence:"그릇됨을 깨달으면 상냥한 마음이 나타난다",words:[]},{id:12,sentence:"태산을 넘으면 그 다음엔 평지가 보인다",words:[]},{id:13,sentence:"인생에서 가장 행복한 시간은 일에 몰두하고 있을 때다",words:[]},{id:14,sentence:"군자는 옳은 일에 민첨하고 소인은 이익에 예민하다",words:[]},{id:15,sentence:"단단한 돌이나 쇠는 높은 곳에서 떨어지면 깨지기 쉽다",words:[]},{id:16,sentence:"알록달록 단풍으로 예쁘게 물든 산길을 걸어요",words:[]},{id:17,sentence:"삶은 우리 자신이 만드는 것이다",words:[]},{id:18,sentence:"사슴 가족이 오순도순 소풍을 나왔어요",words:[]},{id:19,sentence:"어제 친구를 만나 오랜만에 즐거운 시간을 보냈어요",words:[]},{id:20,sentence:"귀여운 노란 오리들이 물 위를 헤엄치고 있어요",words:[]},{id:21,sentence:"주방의 냉장고에 맛있는 과일들이 있어요",words:[]},{id:22,sentence:"거실에 켜져 있는 텔레비젼을 리모콘을 찾아 꺼 주세요",words:[]},{id:23,sentence:"주말에 아이들과 놀이공원에서 놀이기구도 타고 즐거운 시간을 보냈어요",words:[]},{id:24,sentence:"가을에 노란 은행이 곱게 물들었어요",words:[]},{id:25,sentence:"정원에 노란 가을 국화가 곱게 피어 있어요",words:[]},{id:26,sentence:"새벽 일찍 뒷산에서 고사리를 뜯어 왔어요",words:[]},{id:27,sentence:"아름다운 입술을 갖고 싶다면 친절한 말을 하라",words:[]},{id:28,sentence:"사랑스러운 눈을 갖고 싶다면 사람들에게서 좋은 점을 보라",words:[]},{id:29,sentence:"편안한 자세로 척추를 펴고 앉습니다",words:[]},{id:30,sentence:"단풍이 빨갛게 물든 가을날 등산을 했어요",words:[]}],g=(n=5)=>w.map(e=>e.words.length===0?{...e,words:e.sentence.split(" ")}:e).sort(()=>Math.random()-.5).slice(0,n),b=n=>n.sort(()=>Math.random()-.5);class v{currentLevel=0;data=[];shuffledWords=[];selectedWords=[];isCorrect=null;volume=0;showNext=null;get playing(){return this.currentLevel<this.data.length-1}constructor(){u(this,{currentLevel:d,shuffledWords:d,selectedWords:d,isCorrect:d,volume:d,showNext:d,playing:x,onWordClick:a,onNextLevel:a,onChangeVolume:a,onInit:a}),this.data=g(),this.volume=.8,this.onInit()}speak=(e,t)=>{window.speechSynthesis.cancel();const o=new SpeechSynthesisUtterance(e);o.lang="ko-KR",o.rate=.9,o.volume=this.volume,window.speechSynthesis.speak(o),typeof t=="function"&&t()};onWordClick=(e,t)=>{this.selectedWords.includes(t)||(this.speak(e),this.selectedWords.push(t),this.selectedWords.length===this.data[this.currentLevel].words.length&&(this.selectedWords.map(l=>this.shuffledWords[l]).join(" ")===this.data[this.currentLevel].sentence?(this.isCorrect=!0,setTimeout(()=>this.speak(this.playing?"정답입니다! 참 잘하셨어요.":"대단하세요! 모든 문제를 완료했습니다.",()=>this.showNext=!0),2e3)):setTimeout(()=>this.speak("다시 한번 해볼까요?",()=>{this.isCorrect=!1,this.selectedWords=[],this.isCorrect=null,this.showNext=null}),2e3)))};onNextLevel=()=>{this.playing?(this.currentLevel++,this.onInit()):(this.currentLevel=0,this.onInit())};onChangeVolume=e=>{this.volume=e};onInit=()=>{this.shuffledWords=b(this.data[this.currentLevel].words),this.selectedWords=[],this.isCorrect=null,this.showNext=null,this.volume>0&&setTimeout(()=>this.speak("문장을 완성해보세요.",this.onReply()),2e3)};onReply=()=>{setTimeout(()=>this.speak(this.data[this.currentLevel].sentence),2e3)}}const c=new v,y=f.div`
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
`,j=m(()=>{const{volume:n,isCorrect:e,selectedWords:t,shuffledWords:o,showNext:l,playing:h}=c;return p.useEffect(()=>{},[]),s.jsxs(y,{children:[s.jsxs("div",{className:"volume-control",children:[s.jsxs("span",{style:{fontSize:"1.5rem"},children:[" ",n===0?"🔇":"🔊"," "]}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:n,onChange:r=>c.onChangeVolume(parseFloat(r.target.value)),className:"slider"}),s.jsxs("span",{className:"volume-text",children:[Math.round(n*100),"%"]})]}),s.jsx("h1",{className:"title",children:"🔊 소리 나는 문장 퀴즈"}),s.jsx("p",{className:"info",children:"단어를 순서대로 눌러보세요."}),s.jsxs("div",{className:"quiz-box",children:[s.jsx("div",{className:"display-area",style:{borderColor:e===!0?"#4CAF50":e===!1?"#f44336":"#ddd"},children:t.map(r=>s.jsx("span",{className:"selected-word",children:o[r]},r))}),s.jsx("div",{className:"word-grid",children:o.map((r,i)=>s.jsx("button",{disabled:t.includes(i)||e===!0,onClick:()=>c.onWordClick(r,i),className:"word-button",style:{backgroundColor:t.includes(i)?"#eee":"#fff",color:t.includes(i)?"#aaa":"#333",opacity:t.includes(i)?.6:1},children:r},i))})]}),e&&s.jsxs("div",{className:"success-msg",children:[s.jsx("h2",{style:{color:"#4CAF50",fontSize:"2rem"},children:"정답입니다! 👏"}),l&&s.jsx("button",{onClick:()=>c.onNextLevel(),className:"next-button",children:h?"다음 문제":"처음으로"})]})]})});export{j as default};
