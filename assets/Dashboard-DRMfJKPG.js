import{g as te,r as U,u as re,j as l}from"./index-ClmL8K_-.js";import{r as ne,a as se}from"./styled-components.browser.esm-rNyFl6LM.js";import{b as L}from"./BrainVitaminsPage-BzWo8bJG.js";import{b as ie}from"./index-DHfVSoZu.js";var E={exports:{}},ae=E.exports,Q;function oe(){return Q||(Q=1,(function(g,F){(function(_,D){g.exports=D()})(ae,(function(){var _=1e3,D=6e4,O=36e5,T="millisecond",y="second",b="minute",c="hour",v="day",z="week",x="month",Z="quarter",M="year",C="date",q="Invalid Date",G=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],e=s%100;return"["+s+(r[(e-20)%10]||r[e]||r[0])+"]"}},J=function(s,r,e){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(e)+s},ee={s:J,z:function(s){var r=-s.utcOffset(),e=Math.abs(r),n=Math.floor(e/60),t=e%60;return(r<=0?"+":"-")+J(n,2,"0")+":"+J(t,2,"0")},m:function s(r,e){if(r.date()<e.date())return-s(e,r);var n=12*(e.year()-r.year())+(e.month()-r.month()),t=r.clone().add(n,x),i=e-t<0,a=r.clone().add(n+(i?-1:1),x);return+(-(n+(e-t)/(i?t-a:a-t))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:x,y:M,w:z,d:v,D:C,h:c,m:b,s:y,ms:T,Q:Z}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},Y="en",S={};S[Y]=X;var B="$isDayjsObject",V=function(s){return s instanceof I||!(!s||!s[B])},A=function s(r,e,n){var t;if(!r)return Y;if(typeof r=="string"){var i=r.toLowerCase();S[i]&&(t=i),e&&(S[i]=e,t=i);var a=r.split("-");if(!t&&a.length>1)return s(a[0])}else{var u=r.name;S[u]=r,t=u}return!n&&t&&(Y=t),t||!n&&Y},h=function(s,r){if(V(s))return s.clone();var e=typeof r=="object"?r:{};return e.date=s,e.args=arguments,new I(e)},o=ee;o.l=A,o.i=V,o.w=function(s,r){return h(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var I=(function(){function s(e){this.$L=A(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[B]=!0}var r=s.prototype;return r.parse=function(e){this.$d=(function(n){var t=n.date,i=n.utc;if(t===null)return new Date(NaN);if(o.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(G);if(a){var u=a[2]-1||0,d=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)):new Date(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)}}return new Date(t)})(e),this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return o},r.isValid=function(){return this.$d.toString()!==q},r.isSame=function(e,n){var t=h(e);return this.startOf(n)<=t&&t<=this.endOf(n)},r.isAfter=function(e,n){return h(e)<this.startOf(n)},r.isBefore=function(e,n){return this.endOf(n)<h(e)},r.$g=function(e,n,t){return o.u(e)?this[n]:this.set(t,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,n){var t=this,i=!!o.u(n)||n,a=o.p(e),u=function(k,p){var w=o.w(t.$u?Date.UTC(t.$y,p,k):new Date(t.$y,p,k),t);return i?w:w.endOf(v)},d=function(k,p){return o.w(t.toDate()[k].apply(t.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(p)),t)},f=this.$W,m=this.$M,$=this.$D,N="set"+(this.$u?"UTC":"");switch(a){case M:return i?u(1,0):u(31,11);case x:return i?u(1,m):u(0,m+1);case z:var j=this.$locale().weekStart||0,H=(f<j?f+7:f)-j;return u(i?$-H:$+(6-H),m);case v:case C:return d(N+"Hours",0);case c:return d(N+"Minutes",1);case b:return d(N+"Seconds",2);case y:return d(N+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,n){var t,i=o.p(e),a="set"+(this.$u?"UTC":""),u=(t={},t[v]=a+"Date",t[C]=a+"Date",t[x]=a+"Month",t[M]=a+"FullYear",t[c]=a+"Hours",t[b]=a+"Minutes",t[y]=a+"Seconds",t[T]=a+"Milliseconds",t)[i],d=i===v?this.$D+(n-this.$W):n;if(i===x||i===M){var f=this.clone().set(C,1);f.$d[u](d),f.init(),this.$d=f.set(C,Math.min(this.$D,f.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},r.set=function(e,n){return this.clone().$set(e,n)},r.get=function(e){return this[o.p(e)]()},r.add=function(e,n){var t,i=this;e=Number(e);var a=o.p(n),u=function(m){var $=h(i);return o.w($.date($.date()+Math.round(m*e)),i)};if(a===x)return this.set(x,this.$M+e);if(a===M)return this.set(M,this.$y+e);if(a===v)return u(1);if(a===z)return u(7);var d=(t={},t[b]=D,t[c]=O,t[y]=_,t)[a]||1,f=this.$d.getTime()+e*d;return o.w(f,this)},r.subtract=function(e,n){return this.add(-1*e,n)},r.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||q;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),u=this.$H,d=this.$m,f=this.$M,m=t.weekdays,$=t.months,N=t.meridiem,j=function(p,w,W,R){return p&&(p[w]||p(n,i))||W[w].slice(0,R)},H=function(p){return o.s(u%12||12,p,"0")},k=N||function(p,w,W){var R=p<12?"AM":"PM";return W?R.toLowerCase():R};return i.replace(K,(function(p,w){return w||(function(W){switch(W){case"YY":return String(n.$y).slice(-2);case"YYYY":return o.s(n.$y,4,"0");case"M":return f+1;case"MM":return o.s(f+1,2,"0");case"MMM":return j(t.monthsShort,f,$,3);case"MMMM":return j($,f);case"D":return n.$D;case"DD":return o.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return j(t.weekdaysMin,n.$W,m,2);case"ddd":return j(t.weekdaysShort,n.$W,m,3);case"dddd":return m[n.$W];case"H":return String(u);case"HH":return o.s(u,2,"0");case"h":return H(1);case"hh":return H(2);case"a":return k(u,d,!0);case"A":return k(u,d,!1);case"m":return String(d);case"mm":return o.s(d,2,"0");case"s":return String(n.$s);case"ss":return o.s(n.$s,2,"0");case"SSS":return o.s(n.$ms,3,"0");case"Z":return a}return null})(p)||a.replace(":","")}))},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,n,t){var i,a=this,u=o.p(n),d=h(e),f=(d.utcOffset()-this.utcOffset())*D,m=this-d,$=function(){return o.m(a,d)};switch(u){case M:i=$()/12;break;case x:i=$();break;case Z:i=$()/3;break;case z:i=(m-f)/6048e5;break;case v:i=(m-f)/864e5;break;case c:i=m/O;break;case b:i=m/D;break;case y:i=m/_;break;default:i=m}return t?i:o.a(i)},r.daysInMonth=function(){return this.endOf(x).$D},r.$locale=function(){return S[this.$L]},r.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),i=A(e,n,!0);return i&&(t.$L=i),t},r.clone=function(){return o.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s})(),P=I.prototype;return h.prototype=P,[["$ms",T],["$s",y],["$m",b],["$H",c],["$W",v],["$M",x],["$y",M],["$D",C]].forEach((function(s){P[s[1]]=function(r){return this.$g(r,s[0],s[1])}})),h.extend=function(s,r){return s.$i||(s(r,I,h),s.$i=!0),h},h.locale=A,h.isDayjs=V,h.unix=function(s){return h(1e3*s)},h.en=S[Y],h.Ls=S,h.p={},h}))})(E)),E.exports}var ue=oe();const ce=te(ue),le=se.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  .header {
    margin-bottom: 40px;
    padding-top: 20px;
    h1 {
      font-size: 28px;
    }

    .subtitle {
      font-size: 20px;
      ${g=>g.color&&ne`
          color: props.color || palete.secondary;
        `}
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .main-btn {
      color: white;
      padding: 40px;
      border-radius: 30px;
      border: none;
      cursor: pointer;
      transition: 0.3s;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .sub-card {
      background-color: white;
      padding: 30px;
      border-radius: 25px;
      font-size: 20px;
      font-weight: bold;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    .next-btn {
      width: 100%;
      padding: 20px;
      border-radius: 50px;
      font-size: 24px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
  }
`,de=ie(()=>{const g=re(),F=ce().locale("ko"),{levels:_,level:D,palette:O}=L,T=U.useCallback(()=>{L.onChangeScreen("STUDY"),L.onResetTimeLeft()},[]),y=U.useCallback(c=>{L.onSetLevel(c),L.onResetTimeLeft(),L.onResetList(c)},[]),b=U.useMemo(()=>{const c=F.get("hour");return c>6&&c<=12?"아침":c>12&&c<=14?"점심":c>14&&c<=17?"오후":c>17&&c<=20?"저녁":"밤"},[F]);return l.jsxs(le,{children:[l.jsxs("header",{className:"header min-w-[calc(450px)]",children:[l.jsx("div",{className:"flex justify-end",children:l.jsx("button",{className:"p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700",style:{backgroundColor:"transparent",border:"none"},onClick:()=>{y(1),g("/brain-games")},children:l.jsx("svg",{xmlns:"www.w3.org",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})}),l.jsx("h1",{style:{color:O.primary},children:"기억 쏙쏙"}),l.jsxs("p",{className:"subtitle",style:{color:O.secondary},children:["복남 어르신, 참 좋은",l.jsx("span",{className:"font-bold text-stone-500 ml-2",children:b}),"입니다."]})]}),l.jsxs("main",{className:"min-w-[calc(450px)]",children:[l.jsx("ul",{className:"flex items-center justify-end",children:_&&_.map(c=>c===D?l.jsx("li",{className:"bg-orange-400 text-white rounded-3xl mr-1 w-10 h-10 flex items-center justify-center text-2xl",children:c},c):l.jsx("li",{className:"bg-teal-500 text-white rounded-3xl mr-1 w-10 h-10 flex items-center justify-center text-2xl cursor-pointer",onClick:()=>y(c),children:c},c))}),l.jsxs("button",{className:"main-btn",style:{backgroundColor:O.primary},onClick:T,children:[l.jsx("span",{style:{fontSize:"48px"},children:"🌳"}),l.jsx("h2",{style:{fontSize:"28px",margin:"10px 0"},children:"오늘의 뇌 비타민 시작"}),l.jsx("p",{children:"딱 5분이면 충분해요!"})]}),l.jsxs("div",{className:"grid",children:[l.jsx("div",{className:"sub-card",onClick:()=>g("/brain-games/shopping"),children:"🛒 시장 가기"}),l.jsx("div",{className:"sub-card",onClick:()=>g("/brain-games/sudoku",{replace:!0}),children:"📸 스도쿠"}),l.jsx("div",{className:"sub-card",onClick:()=>g("/brain-games/news"),children:"📰 오늘 뉴스"}),l.jsx("div",{className:"sub-card",onClick:()=>g("/brain-games/walk",{replace:!0}),children:"🧭 동네 한바퀴"})]})]})]})}),$e=U.memo(de);export{$e as default};
