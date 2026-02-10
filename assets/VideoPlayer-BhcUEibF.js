const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-urLvtLaO.js","assets/index-BHUCzvGA.js","assets/index-D6LaW6s1.css","assets/mixin-D3UDm--6.js","assets/hls-Cp2x8l1r.js","assets/react-DYclE7dl.js","assets/index-Bg1kpdxg.js","assets/react-Yh_jFmTv.js","assets/react-UsS5nfvp.js","assets/react-B8ABGtJ2.js","assets/react-BiMak6ah.js","assets/react-DIahhsyY.js","assets/react-B5lPQbj2.js","assets/Preview-TPC2liWY.js"])))=>i.map(i=>d[i]);
import{R as F,r as w,_ as L,u as or,c as sr,j as I}from"./index-BHUCzvGA.js";import{a as lr}from"./styled-components.browser.esm-CuPv368i.js";import{v as fr}from"./videoPlayerStore-D0ASSw57.js";import"./index-w3x6JC1w.js";const qt=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,dt=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,mt=/\.(m3u8)($|\?)/i,ur=/\.(mpd)($|\?)/i,cr=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,dr=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,mr=/vimeo\.com\/(?!progressive_redirect).+/,vr=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,hr=/open\.spotify\.com\/(\w+)\/(\w+)/i,pr=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,gr=/tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,oe=(e,t)=>{if(Array.isArray(e)){for(const a of e)if(typeof a=="string"&&oe(a,t)||oe(a.src,t))return!0;return!1}return t(e)},j={html:e=>oe(e,t=>qt.test(t)||dt.test(t)),hls:e=>oe(e,t=>mt.test(t)),dash:e=>oe(e,t=>ur.test(t)),mux:e=>cr.test(e),youtube:e=>dr.test(e),vimeo:e=>mr.test(e)&&!dt.test(e)&&!mt.test(e),wistia:e=>vr.test(e),spotify:e=>hr.test(e),twitch:e=>pr.test(e),tiktok:e=>gr.test(e)},yr=F.forwardRef((e,t)=>{const a=qt.test(`${e.src}`)?"audio":"video";return F.createElement(a,{...e,ref:t},e.children)});var br=yr;const xr=[{key:"hls",name:"hls.js",canPlay:j.hls,canEnablePIP:()=>!0,player:w.lazy(()=>L(()=>import("./react-urLvtLaO.js"),__vite__mapDeps([0,1,2,3,4])))},{key:"dash",name:"dash.js",canPlay:j.dash,canEnablePIP:()=>!0,player:w.lazy(()=>L(()=>import("./react-DYclE7dl.js"),__vite__mapDeps([5,1,2,3])))},{key:"mux",name:"Mux",canPlay:j.mux,canEnablePIP:()=>!0,player:w.lazy(()=>L(()=>import("./index-Bg1kpdxg.js"),__vite__mapDeps([6,1,2,4,3])))},{key:"youtube",name:"YouTube",canPlay:j.youtube,player:w.lazy(()=>L(()=>import("./react-Yh_jFmTv.js"),__vite__mapDeps([7,1,2])))},{key:"vimeo",name:"Vimeo",canPlay:j.vimeo,player:w.lazy(()=>L(()=>import("./react-UsS5nfvp.js"),__vite__mapDeps([8,1,2])))},{key:"wistia",name:"Wistia",canPlay:j.wistia,canEnablePIP:()=>!0,player:w.lazy(()=>L(()=>import("./react-B8ABGtJ2.js"),__vite__mapDeps([9,1,2])))},{key:"spotify",name:"Spotify",canPlay:j.spotify,canEnablePIP:()=>!1,player:w.lazy(()=>L(()=>import("./react-BiMak6ah.js"),__vite__mapDeps([10,1,2])))},{key:"twitch",name:"Twitch",canPlay:j.twitch,canEnablePIP:()=>!1,player:w.lazy(()=>L(()=>import("./react-DIahhsyY.js"),__vite__mapDeps([11,1,2])))},{key:"tiktok",name:"TikTok",canPlay:j.tiktok,canEnablePIP:()=>!1,player:w.lazy(()=>L(()=>import("./react-B5lPQbj2.js"),__vite__mapDeps([12,1,2])))},{key:"html",name:"html",canPlay:j.html,canEnablePIP:()=>!0,player:br}];var $e=xr;const wr={width:"320px",height:"180px",volume:1,playbackRate:1,previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}"},Zt=F.forwardRef((e,t)=>{const{playing:a,pip:r}=e,n=e.activePlayer,i=w.useRef(null),o=w.useRef(!0);w.useEffect(()=>{var f,v;i.current&&(i.current.paused&&a===!0&&i.current.play(),!i.current.paused&&a===!1&&i.current.pause(),i.current.playbackRate=(f=e.playbackRate)!=null?f:1,i.current.volume=(v=e.volume)!=null?v:1)}),w.useEffect(()=>{var f,v,m,b,g;if(!(!i.current||!globalThis.document)){if(r&&!document.pictureInPictureElement)try{(v=(f=i.current).requestPictureInPicture)==null||v.call(f)}catch{}if(!r&&document.pictureInPictureElement)try{(b=(m=i.current).exitPictureInPicture)==null||b.call(m),(g=document.exitPictureInPicture)==null||g.call(document)}catch{}}},[r]);const s=f=>{var v,m;o.current=!0,(v=e.onReady)==null||v.call(e),(m=e.onLoadStart)==null||m.call(e,f)},l=f=>{var v,m;o.current&&(o.current=!1,(v=e.onStart)==null||v.call(e,f)),(m=e.onPlay)==null||m.call(e,f)};if(!n)return null;const c={},d=["onReady","onStart"];for(const f in e)f.startsWith("on")&&!d.includes(f)&&(c[f]=e[f]);return F.createElement(n,{...c,style:e.style,className:e.className,slot:e.slot,ref:w.useCallback(f=>{i.current=f,typeof t=="function"?t(f):t!==null&&(t.current=f)},[t]),src:e.src,crossOrigin:e.crossOrigin,preload:e.preload,controls:e.controls,muted:e.muted,autoPlay:e.autoPlay,loop:e.loop,playsInline:e.playsInline,disableRemotePlayback:e.disableRemotePlayback,config:e.config,onLoadStart:s,onPlay:l},e.children)});Zt.displayName="Player";var Pr=Zt;const Sr=w.lazy(()=>L(()=>import("./Preview-TPC2liWY.js"),__vite__mapDeps([13,1,2]))),ne=[],Ar=(e,t)=>{const a=n=>{for(const i of[...ne,...e])if(n&&i.canPlay(n))return i;return t||null},r=F.forwardRef((n,i)=>{const o={...wr,...n},{src:s,slot:l,className:c,style:d,width:f,height:v,fallback:m,wrapper:b}=o,[g,x]=w.useState(!!o.light);w.useEffect(()=>{o.light?x(!0):x(!1)},[o.light]);const S=O=>{var M;x(!1),(M=o.onClickPreview)==null||M.call(o,O)},A=O=>{if(!O)return null;const{light:M,playIcon:Y,previewTabIndex:H,oEmbedUrl:_e,previewAriaLabel:Ce}=o;return F.createElement(Sr,{src:O,light:M,playIcon:Y,previewTabIndex:H,previewAriaLabel:Ce,oEmbedUrl:_e,onClickPreview:S})},k=O=>{var M,Y;const H=a(O);if(!H)return null;const{style:_e,width:Ce,height:nr,wrapper:Oe}=o,ir=(M=o.config)==null?void 0:M[H.key];return F.createElement(Pr,{...o,ref:i,activePlayer:(Y=H.player)!=null?Y:H,slot:Oe?void 0:l,className:Oe?void 0:c,style:Oe?{display:"block",width:"100%",height:"100%"}:{display:"block",width:Ce,height:nr,..._e},config:ir})},C=b??vt,y=m===!1?vt:w.Suspense;return F.createElement(C,{slot:l,className:c,style:{width:f,height:v,...d}},F.createElement(y,{fallback:m},g?A(s):k(s)))});return r.displayName="ReactPlayer",r.addCustomPlayer=n=>{ne.push(n)},r.removeCustomPlayers=()=>{ne.length=0},r.canPlay=n=>{if(n){for(const i of[...ne,...e])if(i.canPlay(n))return!0}return!1},r.canEnablePIP=n=>{var i;if(n){for(const o of[...ne,...e])if(o.canPlay(n)&&((i=o.canEnablePIP)!=null&&i.call(o)))return!0}return!1},r},vt=({children:e})=>e,kr=$e[$e.length-1];var Ir=Ar($e,kr);var ht={prefix:"fas",iconName:"forward",icon:[576,512,[9193],"f04e","M371.7 43.1C360.1 32 343 28.9 328.3 35.2S304 56 304 72l0 136.3-172.3-165.1C120.1 32 103 28.9 88.3 35.2S64 56 64 72l0 368c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9L304 303.7 304 440c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9l192-184c7.9-7.5 12.3-18 12.3-28.9s-4.5-21.3-12.3-28.9l-192-184z"]},pt={prefix:"fas",iconName:"backward",icon:[576,512,[9194],"f04a","M204.3 43.1C215.9 32 233 28.9 247.7 35.2S272 56 272 72l0 136.3 172.3-165.1C455.9 32 473 28.9 487.7 35.2S512 56 512 72l0 368c0 16-9.6 30.5-24.3 36.8s-31.8 3.2-43.4-7.9L272 303.7 272 440c0 16-9.6 30.5-24.3 36.8s-31.8 3.2-43.4-7.9l-192-184C4.5 277.3 0 266.9 0 256s4.5-21.3 12.3-28.9l192-184z"]},Er={prefix:"fas",iconName:"play",icon:[448,512,[9654],"f04b","M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]},_r={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},Cr=_r,gt={prefix:"fas",iconName:"pause",icon:[384,512,[9208],"f04c","M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"]};function De(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Or(e){if(Array.isArray(e))return e}function Fr(e){if(Array.isArray(e))return De(e)}function Nr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Qt(r.key),r)}}function jr(e,t,a){return t&&Tr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ge(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=et(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function p(e,t,a){return(t=Qt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Lr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,c=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){c=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw n}}return s}}function Mr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?yt(Object(a),!0).forEach(function(r){p(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):yt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Se(e,t){return Or(e)||Rr(e,t)||et(e,t)||Mr()}function T(e){return Fr(e)||Lr(e)||et(e)||$r()}function Dr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qt(e){var t=Dr(e,"string");return typeof t=="symbol"?t:t+""}function xe(e){"@babel/helpers - typeof";return xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xe(e)}function et(e,t){if(e){if(typeof e=="string")return De(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?De(e,t):void 0}}var bt=function(){},tt={},ea={},ta=null,aa={mark:bt,measure:bt};try{typeof window<"u"&&(tt=window),typeof document<"u"&&(ea=document),typeof MutationObserver<"u"&&(ta=MutationObserver),typeof performance<"u"&&(aa=performance)}catch{}var zr=tt.navigator||{},xt=zr.userAgent,wt=xt===void 0?"":xt,X=tt,P=ea,Pt=ta,he=aa;X.document;var W=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",ra=~wt.indexOf("MSIE")||~wt.indexOf("Trident/"),Fe,Ur=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Wr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,na={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Yr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ia=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],E="classic",de="duotone",oa="sharp",sa="sharp-duotone",la="chisel",fa="etch",ua="jelly",ca="jelly-duo",da="jelly-fill",ma="notdog",va="notdog-duo",ha="slab",pa="slab-press",ga="thumbprint",ya="utility",ba="utility-duo",xa="utility-fill",wa="whiteboard",Hr="Classic",Vr="Duotone",Xr="Sharp",Br="Sharp Duotone",Gr="Chisel",Kr="Etch",Jr="Jelly",qr="Jelly Duo",Zr="Jelly Fill",Qr="Notdog",en="Notdog Duo",tn="Slab",an="Slab Press",rn="Thumbprint",nn="Utility",on="Utility Duo",sn="Utility Fill",ln="Whiteboard",Pa=[E,de,oa,sa,la,fa,ua,ca,da,ma,va,ha,pa,ga,ya,ba,xa,wa];Fe={},p(p(p(p(p(p(p(p(p(p(Fe,E,Hr),de,Vr),oa,Xr),sa,Br),la,Gr),fa,Kr),ua,Jr),ca,qr),da,Zr),ma,Qr),p(p(p(p(p(p(p(p(Fe,va,en),ha,tn),pa,an),ga,rn),ya,nn),ba,on),xa,sn),wa,ln);var fn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},un={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},cn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),dn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Sa=["fak","fa-kit","fakd","fa-kit-duotone"],St={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},mn=["kit"],vn="kit",hn="kit-duotone",pn="Kit",gn="Kit Duotone";p(p({},vn,pn),hn,gn);var yn={kit:{"fa-kit":"fak"}},bn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},xn={kit:{fak:"fa-kit"}},At={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ne,pe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Pn="classic",Sn="duotone",An="sharp",kn="sharp-duotone",In="chisel",En="etch",_n="jelly",Cn="jelly-duo",On="jelly-fill",Fn="notdog",Nn="notdog-duo",Tn="slab",jn="slab-press",Ln="thumbprint",Rn="utility",Mn="utility-duo",$n="utility-fill",Dn="whiteboard",zn="Classic",Un="Duotone",Wn="Sharp",Yn="Sharp Duotone",Hn="Chisel",Vn="Etch",Xn="Jelly",Bn="Jelly Duo",Gn="Jelly Fill",Kn="Notdog",Jn="Notdog Duo",qn="Slab",Zn="Slab Press",Qn="Thumbprint",ei="Utility",ti="Utility Duo",ai="Utility Fill",ri="Whiteboard";Ne={},p(p(p(p(p(p(p(p(p(p(Ne,Pn,zn),Sn,Un),An,Wn),kn,Yn),In,Hn),En,Vn),_n,Xn),Cn,Bn),On,Gn),Fn,Kn),p(p(p(p(p(p(p(p(Ne,Nn,Jn),Tn,qn),jn,Zn),Ln,Qn),Rn,ei),Mn,ti),$n,ai),Dn,ri);var ni="kit",ii="kit-duotone",oi="Kit",si="Kit Duotone";p(p({},ni,oi),ii,si);var li={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},fi={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},ze={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ui=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Aa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(wn,ui),ci=["solid","regular","light","thin","duotone","brands","semibold"],ka=[1,2,3,4,5,6,7,8,9,10],di=ka.concat([11,12,13,14,15,16,17,18,19,20]),mi=["aw","fw","pull-left","pull-right"],vi=[].concat(T(Object.keys(fi)),ci,mi,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",pe.GROUP,pe.SWAP_OPACITY,pe.PRIMARY,pe.SECONDARY]).concat(ka.map(function(e){return"".concat(e,"x")})).concat(di.map(function(e){return"w-".concat(e)})),hi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},z="___FONT_AWESOME___",Ue=16,Ia="fa",Ea="svg-inline--fa",J="data-fa-i2svg",We="data-fa-pseudo-element",pi="data-fa-pseudo-element-pending",at="data-prefix",rt="data-icon",kt="fontawesome-i2svg",gi="async",yi=["HTML","HEAD","STYLE","SCRIPT"],_a=["::before","::after",":before",":after"],Ca=(function(){try{return!0}catch{return!1}})();function me(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[E]}})}var Oa=u({},na);Oa[E]=u(u(u(u({},{"fa-duotone":"duotone"}),na[E]),St.kit),St["kit-duotone"]);var bi=me(Oa),Ye=u({},dn);Ye[E]=u(u(u(u({},{duotone:"fad"}),Ye[E]),At.kit),At["kit-duotone"]);var It=me(Ye),He=u({},ze);He[E]=u(u({},He[E]),xn.kit);var nt=me(He),Ve=u({},li);Ve[E]=u(u({},Ve[E]),yn.kit);me(Ve);var xi=Ur,Fa="fa-layers-text",wi=Wr,Pi=u({},fn);me(Pi);var Si=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Te=Yr,Ai=[].concat(T(mn),T(vi)),se=X.FontAwesomeConfig||{};function ki(e){var t=P.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ii(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(P&&typeof P.querySelector=="function"){var Ei=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ei.forEach(function(e){var t=Se(e,2),a=t[0],r=t[1],n=Ii(ki(a));n!=null&&(se[r]=n)})}var Na={styleDefault:"solid",familyDefault:E,cssPrefix:Ia,replacementClass:Ea,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};se.familyPrefix&&(se.cssPrefix=se.familyPrefix);var ae=u(u({},Na),se);ae.autoReplaceSvg||(ae.observeMutations=!1);var h={};Object.keys(Na).forEach(function(e){Object.defineProperty(h,e,{enumerable:!0,set:function(a){ae[e]=a,le.forEach(function(r){return r(h)})},get:function(){return ae[e]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(t){ae.cssPrefix=t,le.forEach(function(a){return a(h)})},get:function(){return ae.cssPrefix}});X.FontAwesomeConfig=h;var le=[];function _i(e){return le.push(e),function(){le.splice(le.indexOf(e),1)}}var Z=Ue,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ci(e){if(!(!e||!W)){var t=P.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=P.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return P.head.insertBefore(t,r),e}}var Oi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Et(){for(var e=12,t="";e-- >0;)t+=Oi[Math.random()*62|0];return t}function re(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function it(e){return e.classList?re(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ta(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fi(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Ta(e[a]),'" ')},"").trim()}function Ae(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function ot(e){return e.size!==R.size||e.x!==R.x||e.y!==R.y||e.rotate!==R.rotate||e.flipX||e.flipY}function Ni(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:c}}function Ti(e){var t=e.transform,a=e.width,r=a===void 0?Ue:a,n=e.height,i=n===void 0?Ue:n,o="";return ra?o+="translate(".concat(t.x/Z-r/2,"em, ").concat(t.y/Z-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/Z,"em), calc(-50% + ").concat(t.y/Z,"em)) "),o+="scale(".concat(t.size/Z*(t.flipX?-1:1),", ").concat(t.size/Z*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var ji=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ja(){var e=Ia,t=Ea,a=h.cssPrefix,r=h.replacementClass,n=ji;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var _t=!1;function je(){h.autoAddCss&&!_t&&(Ci(ja()),_t=!0)}var Li={mixout:function(){return{dom:{css:ja,insertCss:je}}},hooks:function(){return{beforeDOMElementCreation:function(){je()},beforeI2svg:function(){je()}}}},U=X||{};U[z]||(U[z]={});U[z].styles||(U[z].styles={});U[z].hooks||(U[z].hooks={});U[z].shims||(U[z].shims=[]);var N=U[z],La=[],Ra=function(){P.removeEventListener("DOMContentLoaded",Ra),we=1,La.map(function(t){return t()})},we=!1;W&&(we=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),we||P.addEventListener("DOMContentLoaded",Ra));function Ri(e){W&&(we?setTimeout(e,0):La.push(e))}function ve(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?Ta(e):"<".concat(t," ").concat(Fi(r),">").concat(i.map(ve).join(""),"</").concat(t,">")}function Ct(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Le=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Ma(e){return T(e).length!==1?null:e.codePointAt(0).toString(16)}function Ot(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Xe(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=Ot(t);typeof N.hooks.addPack=="function"&&!n?N.hooks.addPack(e,Ot(t)):N.styles[e]=u(u({},N.styles[e]||{}),i),e==="fas"&&Xe("fa",t)}var ue=N.styles,Mi=N.shims,$a=Object.keys(nt),$i=$a.reduce(function(e,t){return e[t]=Object.keys(nt[t]),e},{}),st=null,Da={},za={},Ua={},Wa={},Ya={};function Di(e){return~Ai.indexOf(e)}function zi(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!Di(n)?n:null}var Ha=function(){var t=function(i){return Le(ue,function(o,s,l){return o[l]=Le(s,i,{}),o},{})};Da=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),za=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Ya=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in ue||h.autoFetchSvg,r=Le(Mi,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Ua=r.names,Wa=r.unicodes,st=ke(h.styleDefault,{family:h.familyDefault})};_i(function(e){st=ke(e.styleDefault,{family:h.familyDefault})});Ha();function lt(e,t){return(Da[e]||{})[t]}function Ui(e,t){return(za[e]||{})[t]}function K(e,t){return(Ya[e]||{})[t]}function Va(e){return Ua[e]||{prefix:null,iconName:null}}function Wi(e){var t=Wa[e],a=lt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function B(){return st}var Xa=function(){return{prefix:null,iconName:null,rest:[]}};function Yi(e){var t=E,a=$a.reduce(function(r,n){return r[n]="".concat(h.cssPrefix,"-").concat(n),r},{});return Pa.forEach(function(r){(e.includes(a[r])||e.some(function(n){return $i[r].includes(n)}))&&(t=r)}),t}function ke(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?E:a,n=bi[r][e];if(r===de&&!e)return"fad";var i=It[r][e]||It[r][n],o=e in N.styles?e:null,s=i||o||null;return s}function Hi(e){var t=[],a=null;return e.forEach(function(r){var n=zi(h.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function Ft(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var Nt=Aa.concat(Sa);function Ie(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=Ft(e.filter(function(m){return Nt.includes(m)})),o=Ft(e.filter(function(m){return!Nt.includes(m)})),s=i.filter(function(m){return n=m,!ia.includes(m)}),l=Se(s,1),c=l[0],d=c===void 0?null:c,f=Yi(i),v=u(u({},Hi(o)),{},{prefix:ke(d,{family:f})});return u(u(u({},v),Gi({values:e,family:f,styles:ue,config:h,canonical:v,givenPrefix:n})),Vi(r,n,v))}function Vi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Va(n):{},o=K(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ue.far&&ue.fas&&!h.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var Xi=Pa.filter(function(e){return e!==E||e!==de}),Bi=Object.keys(ze).filter(function(e){return e!==E}).map(function(e){return Object.keys(ze[e])}).flat();function Gi(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,c=l===void 0?{}:l,d=a===de,f=t.includes("fa-duotone")||t.includes("fad"),v=c.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(f||v||m)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Xi.includes(a)){var b=Object.keys(s).find(function(x){return Bi.includes(x)});if(b||c.autoFetchSvg){var g=cn.get(a).defaultShortPrefixId;r.prefix=g,r.iconName=K(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=B()||"fas"),r}var Ki=(function(){function e(){Nr(this,e),this.definitions={}}return jr(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),Xe(s,o[s]);var l=nt[E][s];l&&Xe(l,o[s]),Ha()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(a[s][f]=c)}),a[s][l]=c}),a}}])})(),Tt=[],ee={},te={},Ji=Object.keys(te);function qi(e,t){var a=t.mixoutsTo;return Tt=e,ee={},Object.keys(te).forEach(function(r){Ji.indexOf(r)===-1&&delete te[r]}),Tt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),xe(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ee[o]||(ee[o]=[]),ee[o].push(i[o])})}r.provides&&r.provides(te)}),a}function Be(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=ee[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function q(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=ee[e]||[];n.forEach(function(i){i.apply(null,a)})}function G(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return te[e]?te[e].apply(null,t):void 0}function Ge(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||B();if(t)return t=K(a,t)||t,Ct(Ba.definitions,a,t)||Ct(N.styles,a,t)}var Ba=new Ki,Zi=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,q("noAuto")},Qi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(q("beforeI2svg",t),G("pseudoElements2svg",t),G("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,Ri(function(){to({autoReplaceSvgRoot:a}),q("watch",t)})}},eo={icon:function(t){if(t===null)return null;if(xe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:K(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ke(t[0]);return{prefix:r,iconName:K(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(h.cssPrefix,"-"))>-1||t.match(xi))){var n=Ie(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||B(),iconName:K(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=B();return{prefix:i,iconName:K(i,t)||t}}}},_={noAuto:Zi,config:h,dom:Qi,parse:eo,library:Ba,findIconDefinition:Ge,toHtml:ve},to=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?P:a;(Object.keys(N.styles).length>0||h.autoFetchSvg)&&W&&h.autoReplaceSvg&&_.dom.i2svg({node:r})};function Ee(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ve(r)})}}),Object.defineProperty(e,"node",{get:function(){if(W){var r=P.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ao(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(ot(o)&&a.found&&!r.found){var s=a.width,l=a.height,c={x:s/l/2,y:.5};n.style=Ae(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function ro(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(h.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},n),{},{id:o}),children:r}]}]}function no(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function ft(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,f=d===void 0?!1:d,v=r.found?r:a,m=v.width,b=v.height,g=[h.replacementClass,i?"".concat(h.cssPrefix,"-").concat(i):""].filter(function(y){return c.classes.indexOf(y)===-1}).filter(function(y){return y!==""||!!y}).concat(c.classes).join(" "),x={children:[],attributes:u(u({},c.attributes),{},{"data-prefix":n,"data-icon":i,class:g,role:c.attributes.role||"img",viewBox:"0 0 ".concat(m," ").concat(b)})};!no(c.attributes)&&!c.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),f&&(x.attributes[J]="");var S=u(u({},x),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:u({},c.styles)}),A=r.found&&a.found?G("generateAbstractMask",S)||{children:[],attributes:{}}:G("generateAbstractIcon",S)||{children:[],attributes:{}},k=A.children,C=A.attributes;return S.children=k,S.attributes=C,s?ro(S):ao(S)}function jt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=u(u({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[J]="");var c=u({},i.styles);ot(n)&&(c.transform=Ti({transform:n,width:a,height:r}),c["-webkit-transform"]=c.transform);var d=Ae(c);d.length>0&&(l.style=d);var f=[];return f.push({tag:"span",attributes:l,children:[t]}),f}function io(e){var t=e.content,a=e.extra,r=u(u({},a.attributes),{},{class:a.classes.join(" ")}),n=Ae(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Re=N.styles;function Ke(e){var t=e[0],a=e[1],r=e.slice(4),n=Se(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(Te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Te.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Te.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var oo={found:!1,width:512,height:512};function so(e,t){!Ca&&!h.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Je(e,t){var a=t;return t==="fa"&&h.styleDefault!==null&&(t=B()),new Promise(function(r,n){if(a==="fa"){var i=Va(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Re[t]&&Re[t][e]){var o=Re[t][e];return r(Ke(o))}so(e,t),r(u(u({},oo),{},{icon:h.showMissingIcons&&e?G("missingIconAbstract")||{}:{}}))})}var Lt=function(){},qe=h.measurePerformance&&he&&he.mark&&he.measure?he:{mark:Lt,measure:Lt},ie='FA "7.1.0"',lo=function(t){return qe.mark("".concat(ie," ").concat(t," begins")),function(){return Ga(t)}},Ga=function(t){qe.mark("".concat(ie," ").concat(t," ends")),qe.measure("".concat(ie," ").concat(t),"".concat(ie," ").concat(t," begins"),"".concat(ie," ").concat(t," ends"))},ut={begin:lo,end:Ga},ye=function(){};function Rt(e){var t=e.getAttribute?e.getAttribute(J):null;return typeof t=="string"}function fo(e){var t=e.getAttribute?e.getAttribute(at):null,a=e.getAttribute?e.getAttribute(rt):null;return t&&a}function uo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(h.replacementClass)}function co(){if(h.autoReplaceSvg===!0)return be.replace;var e=be[h.autoReplaceSvg];return e||be.replace}function mo(e){return P.createElementNS("http://www.w3.org/2000/svg",e)}function vo(e){return P.createElement(e)}function Ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?mo:vo:a;if(typeof e=="string")return P.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Ka(o,{ceFn:r}))}),n}function ho(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var be={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ka(n),a)}),a.getAttribute(J)===null&&h.keepOriginalSource){var r=P.createComment(ho(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~it(a).indexOf(h.replacementClass))return be.replace(t);var n=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===h.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ve(s)}).join(`
`);a.setAttribute(J,""),a.innerHTML=o}};function Mt(e){e()}function Ja(e,t){var a=typeof t=="function"?t:ye;if(e.length===0)a();else{var r=Mt;h.mutateApproach===gi&&(r=X.requestAnimationFrame||Mt),r(function(){var n=co(),i=ut.begin("mutate");e.map(n),i(),a()})}}var ct=!1;function qa(){ct=!0}function Ze(){ct=!1}var Pe=null;function $t(e){if(Pt&&h.observeMutations){var t=e.treeCallback,a=t===void 0?ye:t,r=e.nodeCallback,n=r===void 0?ye:r,i=e.pseudoElementsCallback,o=i===void 0?ye:i,s=e.observeMutationsRoot,l=s===void 0?P:s;Pe=new Pt(function(c){if(!ct){var d=B();re(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Rt(f.addedNodes[0])&&(h.searchPseudoElements&&o(f.target),a(f.target)),f.type==="attributes"&&f.target.parentNode&&h.searchPseudoElements&&o([f.target],!0),f.type==="attributes"&&Rt(f.target)&&~Si.indexOf(f.attributeName))if(f.attributeName==="class"&&fo(f.target)){var v=Ie(it(f.target)),m=v.prefix,b=v.iconName;f.target.setAttribute(at,m||d),b&&f.target.setAttribute(rt,b)}else uo(f.target)&&n(f.target)})}}),W&&Pe.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function po(){Pe&&Pe.disconnect()}function go(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function yo(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=Ie(it(e));return n.prefix||(n.prefix=B()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Ui(n.prefix,e.innerText)||lt(n.prefix,Ma(e.innerText))),!n.iconName&&h.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function bo(e){var t=re(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function xo(){return{iconName:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=yo(e),r=a.iconName,n=a.prefix,i=a.rest,o=bo(e),s=Be("parseNodeAttributes",{},e),l=t.styleParser?go(e):[];return u({iconName:r,prefix:n,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var wo=N.styles;function Za(e){var t=h.autoReplaceSvg==="nest"?Dt(e,{styleParser:!1}):Dt(e);return~t.extra.classes.indexOf(Fa)?G("generateLayersText",e,t):G("generateSvgReplacementMutation",e,t)}function Po(){return[].concat(T(Sa),T(Aa))}function zt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var a=P.documentElement.classList,r=function(f){return a.add("".concat(kt,"-").concat(f))},n=function(f){return a.remove("".concat(kt,"-").concat(f))},i=h.autoFetchSvg?Po():ia.concat(Object.keys(wo));i.includes("fa")||i.push("fa");var o=[".".concat(Fa,":not([").concat(J,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(J,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=re(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=ut.begin("onTree"),c=s.reduce(function(d,f){try{var v=Za(f);v&&d.push(v)}catch(m){Ca||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise(function(d,f){Promise.all(c).then(function(v){Ja(v,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),f(v)})})}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Za(e).then(function(a){a&&Ja([a],t)})}function Ao(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ge(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Ge(n||{})),e(r,u(u({},a),{},{mask:n}))}}var ko=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?R:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,c=a.maskId,d=c===void 0?null:c,f=a.classes,v=f===void 0?[]:f,m=a.attributes,b=m===void 0?{}:m,g=a.styles,x=g===void 0?{}:g;if(t){var S=t.prefix,A=t.iconName,k=t.icon;return Ee(u({type:"icon"},t),function(){return q("beforeDOMElementCreation",{iconDefinition:t,params:a}),ft({icons:{main:Ke(k),mask:l?Ke(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:A,transform:u(u({},R),n),symbol:o,maskId:d,extra:{attributes:b,styles:x,classes:v}})})}},Io={mixout:function(){return{icon:Ao(ko)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=zt,a.nodeCallback=So,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?P:r,i=a.callback,o=i===void 0?function(){}:i;return zt(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,c=r.maskId,d=r.extra;return new Promise(function(f,v){Promise.all([Je(n,i),l.iconName?Je(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var b=Se(m,2),g=b[0],x=b[1];f([a,ft({icons:{main:g,mask:x},prefix:i,iconName:n,transform:o,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=Ae(s);l.length>0&&(n.style=l);var c;return ot(o)&&(c=G("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:n}}}},Eo={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return Ee({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(T(i)).join(" ")},children:o}]})}}}},_o={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,c=l===void 0?{}:l;return Ee({type:"counter",content:a},function(){return q("beforeDOMElementCreation",{content:a,params:r}),io({content:a.toString(),extra:{attributes:s,styles:c,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(T(i))}})})}}}},Co={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?R:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return Ee({type:"text",content:a},function(){return q("beforeDOMElementCreation",{content:a,params:r}),jt({content:a,transform:u(u({},R),i),extra:{attributes:c,styles:f,classes:["".concat(h.cssPrefix,"-layers-text")].concat(T(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(ra){var l=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([a,jt({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Qa=new RegExp('"',"ug"),Ut=[1105920,1112319],Wt=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),un),hi),bn),Qe=Object.keys(Wt).reduce(function(e,t){return e[t.toLowerCase()]=Wt[t],e},{}),Oo=Object.keys(Qe).reduce(function(e,t){var a=Qe[t];return e[t]=a[900]||T(Object.entries(a))[0][1],e},{});function Fo(e){var t=e.replace(Qa,"");return Ma(T(t)[0]||"")}function No(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Qa,""),n=r.codePointAt(0),i=n>=Ut[0]&&n<=Ut[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function To(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Qe[a]||{})[n]||Oo[a]}function Yt(e,t){var a="".concat(pi).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=re(e.children),o=i.filter(function(O){return O.getAttribute(We)===t})[0],s=X.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),c=l.match(wi),d=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&f!=="none"&&f!==""){var v=s.getPropertyValue("content"),m=To(l,d),b=Fo(v),g=c[0].startsWith("FontAwesome"),x=No(s),S=lt(m,b),A=S;if(g){var k=Wi(b);k.iconName&&k.prefix&&(S=k.iconName,m=k.prefix)}if(S&&!x&&(!o||o.getAttribute(at)!==m||o.getAttribute(rt)!==A)){e.setAttribute(a,A),o&&e.removeChild(o);var C=xo(),y=C.extra;y.attributes[We]=t,Je(S,m).then(function(O){var M=ft(u(u({},C),{},{icons:{main:O,mask:Xa()},prefix:m,iconName:A,extra:y,watchable:!0})),Y=P.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Y,e.firstChild):e.appendChild(Y),Y.outerHTML=M.map(function(H){return ve(H)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function jo(e){return Promise.all([Yt(e,"::before"),Yt(e,"::after")])}function Lo(e){return e.parentNode!==document.head&&!~yi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(We)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Ro=function(t){return!!t&&_a.some(function(a){return t.includes(a)})},Mo=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var n=ge(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(Ro(o)){var s=_a.reduce(function(l,c){return l.replace(c,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(W){var a;if(t)a=e;else if(h.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=ge(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=ge(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,d=Mo(c.selectorText),f=ge(d),v;try{for(f.s();!(v=f.n()).done;){var m=v.value;r.add(m)}}catch(g){f.e(g)}finally{f.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){h.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){n.e(g)}finally{n.f()}if(!r.size)return;var b=Array.from(r).join(", ");try{a=e.querySelectorAll(b)}catch{}}return new Promise(function(g,x){var S=re(a).filter(Lo).map(jo),A=ut.begin("searchPseudoElements");qa(),Promise.all(S).then(function(){A(),Ze(),g()}).catch(function(){A(),Ze(),x()})})}}var $o={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ht,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?P:r;h.searchPseudoElements&&Ht(n)}}},Vt=!1,Do={mixout:function(){return{dom:{unwatch:function(){qa(),Vt=!0}}}},hooks:function(){return{bootstrap:function(){$t(Be("mutationObserverCallbacks",{}))},noAuto:function(){po()},watch:function(a){var r=a.observeMutationsRoot;Vt?Ze():$t(Be("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Xt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},zo={mixout:function(){return{parse:{transform:function(a){return Xt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Xt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),d="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:v};return{tag:"g",attributes:u({},m.outer),children:[{tag:"g",attributes:u({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:u(u({},r.icon.attributes),m.path)}]}]}}}},Me={x:0,y:0,width:"100%",height:"100%"};function Bt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Uo(e){return e.tag==="g"?e.children:[e]}var Wo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?Ie(n.split(" ").map(function(o){return o.trim()})):Xa();return i.prefix||(i.prefix=B()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,c=i.width,d=i.icon,f=o.width,v=o.icon,m=Ni({transform:l,containerWidth:f,iconWidth:c}),b={tag:"rect",attributes:u(u({},Me),{},{fill:"white"})},g=d.children?{children:d.children.map(Bt)}:{},x={tag:"g",attributes:u({},m.inner),children:[Bt(u({tag:d.tag,attributes:u(u({},d.attributes),m.path)},g))]},S={tag:"g",attributes:u({},m.outer),children:[x]},A="mask-".concat(s||Et()),k="clip-".concat(s||Et()),C={tag:"mask",attributes:u(u({},Me),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,S]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Uo(v)},C]};return r.push(y,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(A,")")},Me)}),{children:r,attributes:n}}}},Yo={provides:function(t){var a=!1;X.matchMedia&&(a=X.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:u(u({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:u(u({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:u(u({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ho={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},Vo=[Li,Io,Eo,_o,Co,$o,Do,zo,Wo,Yo,Ho];qi(Vo,{mixoutsTo:_});_.noAuto;var ce=_.config;_.library;_.dom;var er=_.parse;_.findIconDefinition;_.toHtml;var Xo=_.icon;_.layer;_.text;_.counter;function Bo(e){return e=e-0,e===e}function tr(e){return Bo(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function Go(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Q=new Map,Ko=1e3;function Jo(e){if(Q.has(e))return Q.get(e);const t={};let a=0;const r=e.length;for(;a<r;){const n=e.indexOf(";",a),i=n===-1?r:n,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),c=o.slice(s+1).trim();if(l&&c){const d=tr(l);t[d.startsWith("webkit")?Go(d):d]=c}}}a=i+1}if(Q.size===Ko){const n=Q.keys().next().value;n&&Q.delete(n)}return Q.set(e,t),t}function ar(e,t,a={}){if(typeof t=="string")return t;const r=(t.children||[]).map(d=>ar(e,d)),n=t.attributes||{},i={};for(const[d,f]of Object.entries(n))switch(!0){case d==="class":{i.className=f;break}case d==="style":{i.style=Jo(String(f));break}case d.startsWith("aria-"):case d.startsWith("data-"):{i[d.toLowerCase()]=f;break}default:i[tr(d)]=f}const{style:o,role:s,"aria-label":l,...c}=a;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),e(t.tag,{...i,...c},...r)}var qo=ar.bind(null,F.createElement),Gt=(e,t)=>{const a=w.useId();return e||(t?a:void 0)},Zo=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},Qo="searchPseudoElementsFullScan"in ce?"7.0.0":"6.0.0",es=Number.parseInt(Qo)>=7,fe="fa",$={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},ts={left:"fa-pull-left",right:"fa-pull-right"},as={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},rs={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},D={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function ns(e){const t=ce.cssPrefix||ce.familyPrefix||fe;return t===fe?e:e.replace(new RegExp(String.raw`(?<=^|\s)${fe}-`,"g"),`${t}-`)}function is(e){const{beat:t,fade:a,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:c,fixedWidth:d,inverse:f,border:v,flip:m,size:b,rotation:g,pull:x,swapOpacity:S,rotateBy:A,widthAuto:k,className:C}=e,y=[];return C&&y.push(...C.split(" ")),t&&y.push($.beat),a&&y.push($.fade),r&&y.push($.beatFade),n&&y.push($.bounce),i&&y.push($.shake),o&&y.push($.spin),l&&y.push($.spinReverse),s&&y.push($.spinPulse),c&&y.push($.pulse),d&&y.push(D.fixedWidth),f&&y.push(D.inverse),v&&y.push(D.border),m===!0&&y.push(D.flip),(m==="horizontal"||m==="both")&&y.push(D.flipHorizontal),(m==="vertical"||m==="both")&&y.push(D.flipVertical),b!=null&&y.push(rs[b]),g!=null&&g!==0&&y.push(as[g]),x!=null&&y.push(ts[x]),S&&y.push(D.swapOpacity),es?(A&&y.push(D.rotateBy),k&&y.push(D.widthAuto),(ce.cssPrefix||ce.familyPrefix||fe)===fe?y:y.map(ns)):y}var os=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Kt(e){if(e)return os(e)?e:er.icon(e)}function ss(e){return Object.keys(e)}var Jt=new Zo("FontAwesomeIcon"),rr={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},ls=new Set(Object.keys(rr)),V=F.forwardRef((e,t)=>{const a={...rr,...e},{icon:r,mask:n,symbol:i,title:o,titleId:s,maskId:l,transform:c}=a,d=Gt(l,!!n),f=Gt(s,!!o),v=Kt(r);if(!v)return Jt.error("Icon lookup is undefined",r),null;const m=is(a),b=typeof c=="string"?er.transform(c):c,g=Kt(n),x=Xo(v,{...m.length>0&&{classes:m},...b&&{transform:b},...g&&{mask:g},symbol:i,title:o,titleId:f,maskId:d});if(!x)return Jt.error("Could not find icon",v),null;const{abstract:S}=x,A={ref:t};for(const k of ss(a))ls.has(k)||(A[k]=a[k]);return qo(S[0],A)});V.displayName="FontAwesomeIcon";const fs=lr.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  .box {
    background-color: white;
    margin: 80px auto;
    max-width: 500px;
    min-width: 100px;
    min-height: 350px;
    font: 13px "verdana";
    padding: 10px;
    border-radius: 0.7rem;
    div {
      padding: 0;
      display: block;
      margin: 10px 0 0 0;
    }
    .heading {
      background-color: #695aa0;
      font-weight: 300;
      text-align: left;
      color: #fff;
      margin: 5px 0 5px 0;
      padding: 0.5rem;
      min-width: 200px;
      max-width: 500px;
      border-radius: 0.5rem 0.5rem 0 0;
    }
    .player {
      background-color: rgba(0, 0, 0, 1);
    }
  }
  .pointer {
    cursor: pointer;
  }
`,us=w.memo(Ir),cs=()=>{const e=or(),a=sr().id,r=w.useRef(null),[n,i]=w.useState(!1),[o,s]=w.useState(!1),{videos:l}=fr,c=w.useCallback(()=>{i(!0),s(!0)},[]),d=w.useCallback(()=>{i(x=>!x),e("/brain-games/videos")},[e]),f=w.useCallback(()=>{i(x=>!x)},[]);if(!l)return null;const v=l.findIndex(x=>x.id===a),m=l[v];if(!m)return I.jsx("div",{children:"유효하지 않은 영상입니다."});let b=l[v+1];b||(b=l[0]);const g=v<=0?l[l.length-1]:l[v-1];return I.jsx(fs,{children:I.jsxs("div",{className:"box",children:[I.jsxs("div",{className:"heading",children:[I.jsx("span",{className:"title text-violet-100 font-semibold",children:m.title||"제목"}),I.jsxs("span",{className:"category text-violet-200",children:[" / ",m.category||"카테고리"]}),I.jsx(V,{icon:Cr,size:"1x",className:"float-end badge bg-secondary pointer mt-1.5",onClick:d})]}),I.jsx("div",{className:"player",children:I.jsx(us,{src:`https://www.youtube.com/watch?v=${m.id}`,volume:.5,controls:!0,playing:n,width:"100%",height:300,onReady:c,ref:r},m.id)}),I.jsxs("div",{children:[o&&I.jsxs("div",{children:[I.jsx(V,{icon:pt,size:"1x",className:"ml-2 pointer hover:text-violet-700",onClick:()=>e(`/brain-games/videos/${g.id}`)}),I.jsx(V,{icon:n?gt:Er,size:"1x",className:"ml-2 pointer hover:text-violet-700",onClick:f}),I.jsx(V,{icon:ht,size:"1x",className:"ml-2 pointer hover:text-violet-700",onClick:()=>e(`/brain-games/videos/${b.id}`)})]}),!o&&I.jsxs("div",{children:[I.jsx(V,{icon:pt,size:"1x",className:"ml-2"}),I.jsx(V,{icon:gt,size:"1x",className:"ml-2"}),I.jsx(V,{icon:ht,size:"1x",className:"ml-2"})]})]})]})})},ps=w.memo(cs);export{ps as default};
