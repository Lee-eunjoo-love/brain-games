import{g as te,r as U,u as re,j as u}from"./index-BgT-bLNt.js";import{r as ne,a as se}from"./styled-components.browser.esm-BNEzqUzp.js";import{b as L}from"./BrainVitaminsPage-CZotfezQ.js";import{b as ie}from"./index-D843qDk6.js";var E={exports:{}},ae=E.exports,Q;function oe(){return Q||(Q=1,(function(g,F){(function(_,w){g.exports=w()})(ae,(function(){var _=1e3,w=6e4,N=36e5,T="millisecond",y="second",b="minute",l="hour",v="day",z="week",$="month",Z="quarter",M="year",C="date",q="Invalid Date",G=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],e=s%100;return"["+s+(r[(e-20)%10]||r[e]||r[0])+"]"}},J=function(s,r,e){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(e)+s},ee={s:J,z:function(s){var r=-s.utcOffset(),e=Math.abs(r),n=Math.floor(e/60),t=e%60;return(r<=0?"+":"-")+J(n,2,"0")+":"+J(t,2,"0")},m:function s(r,e){if(r.date()<e.date())return-s(e,r);var n=12*(e.year()-r.year())+(e.month()-r.month()),t=r.clone().add(n,$),i=e-t<0,a=r.clone().add(n+(i?-1:1),$);return+(-(n+(e-t)/(i?t-a:a-t))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:$,y:M,w:z,d:v,D:C,h:l,m:b,s:y,ms:T,Q:Z}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},Y="en",D={};D[Y]=X;var B="$isDayjsObject",V=function(s){return s instanceof I||!(!s||!s[B])},A=function s(r,e,n){var t;if(!r)return Y;if(typeof r=="string"){var i=r.toLowerCase();D[i]&&(t=i),e&&(D[i]=e,t=i);var a=r.split("-");if(!t&&a.length>1)return s(a[0])}else{var c=r.name;D[c]=r,t=c}return!n&&t&&(Y=t),t||!n&&Y},h=function(s,r){if(V(s))return s.clone();var e=typeof r=="object"?r:{};return e.date=s,e.args=arguments,new I(e)},o=ee;o.l=A,o.i=V,o.w=function(s,r){return h(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var I=(function(){function s(e){this.$L=A(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[B]=!0}var r=s.prototype;return r.parse=function(e){this.$d=(function(n){var t=n.date,i=n.utc;if(t===null)return new Date(NaN);if(o.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(G);if(a){var c=a[2]-1||0,d=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],c,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)):new Date(a[1],c,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)}}return new Date(t)})(e),this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return o},r.isValid=function(){return this.$d.toString()!==q},r.isSame=function(e,n){var t=h(e);return this.startOf(n)<=t&&t<=this.endOf(n)},r.isAfter=function(e,n){return h(e)<this.startOf(n)},r.isBefore=function(e,n){return this.endOf(n)<h(e)},r.$g=function(e,n,t){return o.u(e)?this[n]:this.set(t,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,n){var t=this,i=!!o.u(n)||n,a=o.p(e),c=function(k,p){var j=o.w(t.$u?Date.UTC(t.$y,p,k):new Date(t.$y,p,k),t);return i?j:j.endOf(v)},d=function(k,p){return o.w(t.toDate()[k].apply(t.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(p)),t)},f=this.$W,m=this.$M,x=this.$D,O="set"+(this.$u?"UTC":"");switch(a){case M:return i?c(1,0):c(31,11);case $:return i?c(1,m):c(0,m+1);case z:var S=this.$locale().weekStart||0,H=(f<S?f+7:f)-S;return c(i?x-H:x+(6-H),m);case v:case C:return d(O+"Hours",0);case l:return d(O+"Minutes",1);case b:return d(O+"Seconds",2);case y:return d(O+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,n){var t,i=o.p(e),a="set"+(this.$u?"UTC":""),c=(t={},t[v]=a+"Date",t[C]=a+"Date",t[$]=a+"Month",t[M]=a+"FullYear",t[l]=a+"Hours",t[b]=a+"Minutes",t[y]=a+"Seconds",t[T]=a+"Milliseconds",t)[i],d=i===v?this.$D+(n-this.$W):n;if(i===$||i===M){var f=this.clone().set(C,1);f.$d[c](d),f.init(),this.$d=f.set(C,Math.min(this.$D,f.daysInMonth())).$d}else c&&this.$d[c](d);return this.init(),this},r.set=function(e,n){return this.clone().$set(e,n)},r.get=function(e){return this[o.p(e)]()},r.add=function(e,n){var t,i=this;e=Number(e);var a=o.p(n),c=function(m){var x=h(i);return o.w(x.date(x.date()+Math.round(m*e)),i)};if(a===$)return this.set($,this.$M+e);if(a===M)return this.set(M,this.$y+e);if(a===v)return c(1);if(a===z)return c(7);var d=(t={},t[b]=w,t[l]=N,t[y]=_,t)[a]||1,f=this.$d.getTime()+e*d;return o.w(f,this)},r.subtract=function(e,n){return this.add(-1*e,n)},r.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||q;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),c=this.$H,d=this.$m,f=this.$M,m=t.weekdays,x=t.months,O=t.meridiem,S=function(p,j,W,R){return p&&(p[j]||p(n,i))||W[j].slice(0,R)},H=function(p){return o.s(c%12||12,p,"0")},k=O||function(p,j,W){var R=p<12?"AM":"PM";return W?R.toLowerCase():R};return i.replace(K,(function(p,j){return j||(function(W){switch(W){case"YY":return String(n.$y).slice(-2);case"YYYY":return o.s(n.$y,4,"0");case"M":return f+1;case"MM":return o.s(f+1,2,"0");case"MMM":return S(t.monthsShort,f,x,3);case"MMMM":return S(x,f);case"D":return n.$D;case"DD":return o.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return S(t.weekdaysMin,n.$W,m,2);case"ddd":return S(t.weekdaysShort,n.$W,m,3);case"dddd":return m[n.$W];case"H":return String(c);case"HH":return o.s(c,2,"0");case"h":return H(1);case"hh":return H(2);case"a":return k(c,d,!0);case"A":return k(c,d,!1);case"m":return String(d);case"mm":return o.s(d,2,"0");case"s":return String(n.$s);case"ss":return o.s(n.$s,2,"0");case"SSS":return o.s(n.$ms,3,"0");case"Z":return a}return null})(p)||a.replace(":","")}))},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,n,t){var i,a=this,c=o.p(n),d=h(e),f=(d.utcOffset()-this.utcOffset())*w,m=this-d,x=function(){return o.m(a,d)};switch(c){case M:i=x()/12;break;case $:i=x();break;case Z:i=x()/3;break;case z:i=(m-f)/6048e5;break;case v:i=(m-f)/864e5;break;case l:i=m/N;break;case b:i=m/w;break;case y:i=m/_;break;default:i=m}return t?i:o.a(i)},r.daysInMonth=function(){return this.endOf($).$D},r.$locale=function(){return D[this.$L]},r.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),i=A(e,n,!0);return i&&(t.$L=i),t},r.clone=function(){return o.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s})(),P=I.prototype;return h.prototype=P,[["$ms",T],["$s",y],["$m",b],["$H",l],["$W",v],["$M",$],["$y",M],["$D",C]].forEach((function(s){P[s[1]]=function(r){return this.$g(r,s[0],s[1])}})),h.extend=function(s,r){return s.$i||(s(r,I,h),s.$i=!0),h},h.locale=A,h.isDayjs=V,h.unix=function(s){return h(1e3*s)},h.en=D[Y],h.Ls=D,h.p={},h}))})(E)),E.exports}var ue=oe();const ce=te(ue),le=se.div`
  padding: 20px;
  width: 100%;
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
      padding: 20px;
      border-radius: 25px;
      font-size: 1rem;
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
`,de=ie(()=>{const g=re(),F=ce().locale("ko"),{levels:_,level:w,palette:N}=L,T=U.useCallback(()=>{L.onChangeScreen("STUDY"),L.onResetTimeLeft()},[]),y=U.useCallback(l=>{L.onSetLevel(l),L.onResetTimeLeft(),L.onResetList(l)},[]),b=U.useMemo(()=>{const l=F.get("hour");return l>6&&l<=12?"아침":l>12&&l<=14?"점심":l>14&&l<=17?"오후":l>17&&l<=20?"저녁":"밤"},[F]);return u.jsxs(le,{children:[u.jsxs("header",{className:"header",children:[u.jsx("div",{className:"flex justify-end",children:u.jsx("button",{className:"p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700",style:{backgroundColor:"transparent",border:"none"},onClick:()=>{y(1),g("/brain-games")},children:u.jsx("svg",{xmlns:"www.w3.org",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})}),u.jsx("h1",{style:{color:N.primary},children:"기억 쏙쏙"}),u.jsxs("p",{className:"subtitle",style:{color:N.secondary},children:["복남 어르신, 참 좋은",u.jsx("span",{className:"font-bold text-stone-500 ml-2",children:b}),"입니다."]})]}),u.jsxs("main",{children:[u.jsx("ul",{className:"flex items-center justify-end",children:_&&_.map(l=>l===w?u.jsx("li",{className:"bg-orange-400 text-white rounded-3xl mr-1 w-10 h-10 flex items-center justify-center text-2xl",children:l},l):u.jsx("li",{className:"bg-teal-500 text-white rounded-3xl mr-1 w-10 h-10 flex items-center justify-center text-2xl cursor-pointer",onClick:()=>y(l),children:l},l))}),u.jsxs("button",{className:"main-btn",style:{backgroundColor:N.primary},onClick:T,children:[u.jsx("span",{style:{fontSize:"48px"},children:"🌳"}),u.jsx("h2",{style:{fontSize:"22px",margin:"5px 0"},children:"두뇌 비타민 충전 시작"}),u.jsx("p",{children:"딱 5분이면 충분해요!"})]}),u.jsxs("div",{className:"grid",children:[u.jsx("div",{className:"sub-card",onClick:()=>g("/brain-games/shopping"),children:u.jsx("span",{className:"text-stone-700",children:"🛒 시장 가기"})}),u.jsxs("div",{className:"sub-card",onClick:()=>g("/brain-games/sudoku",{replace:!0}),children:["🔢 ",u.jsx("span",{className:"text-stone-700",children:"스도쿠"})]}),u.jsxs("div",{className:"sub-card",onClick:()=>g("/brain-games/walk",{replace:!0}),children:["🧭 ",u.jsx("span",{className:"text-stone-700",children:"동네한바퀴"})]}),u.jsxs("div",{className:"sub-card",onClick:()=>g("/brain-games/sentence",{replace:!0}),children:["✍ ",u.jsx("span",{children:"문장연결"})]}),u.jsxs("div",{className:"sub-card",onClick:()=>g("/brain-games/videos",{replace:!0}),children:["💿 ",u.jsx("span",{children:"추억의 노래"})]})]})]})]})}),xe=U.memo(de);export{xe as default};
