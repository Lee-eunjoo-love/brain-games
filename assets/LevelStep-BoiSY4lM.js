import{g as ne,r as z,j as h}from"./index-BgoU-Wz8.js";import{a as G,r as se}from"./styled-components.browser.esm-CFWWGCjR.js";import{b as C}from"./brainVitaminsStore-BxUAwfxi.js";import{o as ie}from"./index-DtfJM7O7.js";import{u as K}from"./index-B0hcGuNl.js";import{S as ae,F as oe,a as ue}from"./squirrel-lP42Za8y.js";import"./createLucideIcon-DKYXQaS3.js";var I={exports:{}},ce=I.exports,P;function de(){return P||(P=1,(function(p,Y){(function(M,v){p.exports=v()})(ce,(function(){var M=1e3,v=6e4,L=36e5,S="millisecond",$="second",b="minute",D="hour",c="day",H="week",g="month",J="quarter",w="year",N="date",V="Invalid Date",X=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ee=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],e=s%100;return"["+s+(r[(e-20)%10]||r[e]||r[0])+"]"}},R=function(s,r,e){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(e)+s},re={s:R,z:function(s){var r=-s.utcOffset(),e=Math.abs(r),n=Math.floor(e/60),t=e%60;return(r<=0?"+":"-")+R(n,2,"0")+":"+R(t,2,"0")},m:function s(r,e){if(r.date()<e.date())return-s(e,r);var n=12*(e.year()-r.year())+(e.month()-r.month()),t=r.clone().add(n,g),i=e-t<0,a=r.clone().add(n+(i?-1:1),g);return+(-(n+(e-t)/(i?t-a:a-t))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:g,y:w,w:H,d:c,D:N,h:D,m:b,s:$,ms:S,Q:J}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},W="en",k={};k[W]=te;var Z="$isDayjsObject",U=function(s){return s instanceof q||!(!s||!s[Z])},F=function s(r,e,n){var t;if(!r)return W;if(typeof r=="string"){var i=r.toLowerCase();k[i]&&(t=i),e&&(k[i]=e,t=i);var a=r.split("-");if(!t&&a.length>1)return s(a[0])}else{var u=r.name;k[u]=r,t=u}return!n&&t&&(W=t),t||!n&&W},l=function(s,r){if(U(s))return s.clone();var e=typeof r=="object"?r:{};return e.date=s,e.args=arguments,new q(e)},o=re;o.l=F,o.i=U,o.w=function(s,r){return l(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var q=(function(){function s(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[Z]=!0}var r=s.prototype;return r.parse=function(e){this.$d=(function(n){var t=n.date,i=n.utc;if(t===null)return new Date(NaN);if(o.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(X);if(a){var u=a[2]-1||0,d=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)):new Date(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)}}return new Date(t)})(e),this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return o},r.isValid=function(){return this.$d.toString()!==V},r.isSame=function(e,n){var t=l(e);return this.startOf(n)<=t&&t<=this.endOf(n)},r.isAfter=function(e,n){return l(e)<this.startOf(n)},r.isBefore=function(e,n){return this.endOf(n)<l(e)},r.$g=function(e,n,t){return o.u(e)?this[n]:this.set(t,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,n){var t=this,i=!!o.u(n)||n,a=o.p(e),u=function(O,x){var j=o.w(t.$u?Date.UTC(t.$y,x,O):new Date(t.$y,x,O),t);return i?j:j.endOf(c)},d=function(O,x){return o.w(t.toDate()[O].apply(t.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(x)),t)},f=this.$W,m=this.$M,y=this.$D,T="set"+(this.$u?"UTC":"");switch(a){case w:return i?u(1,0):u(31,11);case g:return i?u(1,m):u(0,m+1);case H:var _=this.$locale().weekStart||0,A=(f<_?f+7:f)-_;return u(i?y-A:y+(6-A),m);case c:case N:return d(T+"Hours",0);case D:return d(T+"Minutes",1);case b:return d(T+"Seconds",2);case $:return d(T+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,n){var t,i=o.p(e),a="set"+(this.$u?"UTC":""),u=(t={},t[c]=a+"Date",t[N]=a+"Date",t[g]=a+"Month",t[w]=a+"FullYear",t[D]=a+"Hours",t[b]=a+"Minutes",t[$]=a+"Seconds",t[S]=a+"Milliseconds",t)[i],d=i===c?this.$D+(n-this.$W):n;if(i===g||i===w){var f=this.clone().set(N,1);f.$d[u](d),f.init(),this.$d=f.set(N,Math.min(this.$D,f.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},r.set=function(e,n){return this.clone().$set(e,n)},r.get=function(e){return this[o.p(e)]()},r.add=function(e,n){var t,i=this;e=Number(e);var a=o.p(n),u=function(m){var y=l(i);return o.w(y.date(y.date()+Math.round(m*e)),i)};if(a===g)return this.set(g,this.$M+e);if(a===w)return this.set(w,this.$y+e);if(a===c)return u(1);if(a===H)return u(7);var d=(t={},t[b]=v,t[D]=L,t[$]=M,t)[a]||1,f=this.$d.getTime()+e*d;return o.w(f,this)},r.subtract=function(e,n){return this.add(-1*e,n)},r.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||V;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),u=this.$H,d=this.$m,f=this.$M,m=t.weekdays,y=t.months,T=t.meridiem,_=function(x,j,B,E){return x&&(x[j]||x(n,i))||B[j].slice(0,E)},A=function(x){return o.s(u%12||12,x,"0")},O=T||function(x,j,B){var E=x<12?"AM":"PM";return B?E.toLowerCase():E};return i.replace(ee,(function(x,j){return j||(function(B){switch(B){case"YY":return String(n.$y).slice(-2);case"YYYY":return o.s(n.$y,4,"0");case"M":return f+1;case"MM":return o.s(f+1,2,"0");case"MMM":return _(t.monthsShort,f,y,3);case"MMMM":return _(y,f);case"D":return n.$D;case"DD":return o.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return _(t.weekdaysMin,n.$W,m,2);case"ddd":return _(t.weekdaysShort,n.$W,m,3);case"dddd":return m[n.$W];case"H":return String(u);case"HH":return o.s(u,2,"0");case"h":return A(1);case"hh":return A(2);case"a":return O(u,d,!0);case"A":return O(u,d,!1);case"m":return String(d);case"mm":return o.s(d,2,"0");case"s":return String(n.$s);case"ss":return o.s(n.$s,2,"0");case"SSS":return o.s(n.$ms,3,"0");case"Z":return a}return null})(x)||a.replace(":","")}))},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,n,t){var i,a=this,u=o.p(n),d=l(e),f=(d.utcOffset()-this.utcOffset())*v,m=this-d,y=function(){return o.m(a,d)};switch(u){case w:i=y()/12;break;case g:i=y();break;case J:i=y()/3;break;case H:i=(m-f)/6048e5;break;case c:i=(m-f)/864e5;break;case D:i=m/L;break;case b:i=m/v;break;case $:i=m/M;break;default:i=m}return t?i:o.a(i)},r.daysInMonth=function(){return this.endOf(g).$D},r.$locale=function(){return k[this.$L]},r.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),i=F(e,n,!0);return i&&(t.$L=i),t},r.clone=function(){return o.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s})(),Q=q.prototype;return l.prototype=Q,[["$ms",S],["$s",$],["$m",b],["$H",D],["$W",c],["$M",g],["$y",w],["$D",N]].forEach((function(s){Q[s[1]]=function(r){return this.$g(r,s[0],s[1])}})),l.extend=function(s,r){return s.$i||(s(r,q,l),s.$i=!0),l},l.locale=F,l.isDayjs=U,l.unix=function(s){return l(1e3*s)},l.en=k[W],l.Ls=k,l.p={},l}))})(I)),I.exports}var le=de();const fe=ne(le),he=G.div`
  &.container {
    background: #ffffff;
    color: #999;
  }
  .label {
    font-size: 2rem;
  }
  .icon {
    border-color: #fbfbfb;
    display: none;
    background: #fbfbfb;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .icon-label {
    padding: 0 1rem;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    background: #ddd;
    border-radius: 50%;
    border: 5px solid none;
  }
  &:hover {
    &.container {
      background: #f1f1f9;
      border-color: #1f9ac6;
      border-width: 5px;
    }
    .label {
      color: #1f9ac6;
    }
    .icon {
      border-color: #f1f1f9;
      display: inline;
      background: #1f9ac6;
    }
    .icon-label {
      display: none;
    }
  }
`,me=({step:p,selectedStep:Y,onChangeStep:M,onMouseEnterStep:v,icons:L,stepCount:S})=>{const $=K({query:"(max-width:767px)"}),b=[{id:1,title:"1단계",description:"3가지 장보기 기억하기"},{id:2,title:"2단계",description:"4가지 장보기 기억하기"},{id:3,title:"3단계",description:"5가지 장보기 기억하기"}];return h.jsxs(he,{onClick:p>S?void 0:$?()=>{v(p),M()}:M,className:"container cursor-pointer p-3 pb-5 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1",children:[h.jsxs("div",{className:"w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold",style:{fontSize:`${$?"2rem":void 0}`},children:[h.jsx("div",{className:"icon",children:L[p-1]}),h.jsx("div",{className:"icon-label",children:p})]}),h.jsx("h3",{className:`label levelButtonText text-xl font-semibold mb-2 ${Y===p?"text-cyan-700":"text-gray-700"}`,style:{fontSize:`${$?"2rem":void 0}`,marginTop:`${$?"-2.5rem":void 0}`},children:b[p-1].title}),h.jsx("p",{className:"text-gray-500 text-sm leading-relaxed",style:{fontSize:`${$?"1.5rem":"1.35rem"}`},children:p.id>S?"준비중입니다.":b[p-1].description})]})},pe=z.memo(me),$e=G.div`
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
      ${p=>p.color&&se`
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
`,xe=ie(()=>{const p=fe().locale("ko"),{levels:Y}=C,[M,v]=z.useState(1),L=K({query:"(max-width:767px)"}),S=[h.jsx(ae,{size:50,color:"#5d68c5",className:"opacity-50"}),h.jsx(oe,{size:50,color:"#608db6",className:"opacity-50"}),h.jsx(ue,{size:50,color:"#3ccaf5",className:"opacity-50"})],$=z.useCallback(()=>{C.onChangeScreen("STUDY"),C.onResetTimeLeft()},[]),b=z.useCallback(c=>{C.onSetLevel(c),C.onResetTimeLeft(),C.onResetList(c)},[]),D=z.useMemo(()=>{const c=p.get("hour");return c>6&&c<=12?"아침":c>12&&c<=14?"점심":c>14&&c<=17?"오후":c>17&&c<=20?"저녁":"밤"},[p]);return h.jsxs($e,{children:[h.jsxs("header",{className:"header",children:[h.jsx("div",{className:"text-2xl text-gray-800 dark:text-gray-300 mb-5 ",children:"기억 쏙쏙"}),h.jsxs("p",{className:"subtitle text-gray-700 dark:text-stone-200",children:[h.jsx("strong",{children:"복남"}),"님, 참 좋은",h.jsx("span",{className:"font-bold text-stone-500 ml-2",children:D}),"입니다."]})]}),h.jsx("main",{children:h.jsx("div",{className:"grid gap-1",style:{gridTemplateColumns:L?"1fr":"1fr 1fr 1fr"},children:Y&&Y.map((c,H,g)=>h.jsx(pe,{step:c,selectedStep:M,onChangeStep:()=>{b(c),$()},onMouseEnterStep:()=>v(c),icons:S,stepCount:g.length},c))})})]})}),we=z.memo(xe);export{we as default};
