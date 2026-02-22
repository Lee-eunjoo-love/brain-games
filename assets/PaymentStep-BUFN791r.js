const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AskModal-DAel4dXB.js","assets/index-D1-CUQrh.js","assets/index-B7AUg1Ra.css","assets/styled-components.browser.esm-DNwYwJhB.js","assets/Button-B8w3F5_q.js"])))=>i.map(i=>d[i]);
import{r as n,j as o,l as c,_ as l}from"./index-D1-CUQrh.js";import{a as m}from"./styled-components.browser.esm-DNwYwJhB.js";import{g as r}from"./GroceryShoppingPage-BB0vYios.js";import{o as p}from"./index-BYK2rc6N.js";import{u as h}from"./index-CisjWjyI.js";import"./CloseButton-CSvVSFZR.js";const x=c(()=>l(()=>import("./AskModal-DAel4dXB.js"),__vite__mapDeps([0,1,2,3,4]))),g=m.div`
  .amt-button {
    padding: 10px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 60px;
    @media screen and (max-width: 767px) {
      font-size: 1rem;
      padding-left: 5px;
      padding-right: 5px;
      line-height: 1rem;
      height: 50px;
    }
  }
  .amt-10000 {
    background-color: #84afa8;
    color: #226459;
    min-width: 70px;
    width: 25%;
  }
  .amt-5000 {
    background-color: #e0be96;
    color: #745839;
    min-width: 70px;
    width: 25%;
  }
  .amt-1000 {
    background-color: #cca0c8;
    color: #6e4f6c;
    min-width: 70px;
    width: 25%;
  }
  .amt-500 {
    background-color: #bebebe;
    border-color: #8e8e8e;
    border-radius: 100%;
    width: 70px;
    height: 70px;
    font-size: 1rem;
    @media screen and (max-width: 767px) {
      width: 45px;
      height: 45px;
      font-size: 0.9rem;
      line-height: 0.9rem;
    }
  }
  .amt-100 {
    background-color: #cacaca;
    border-color: #9a9a9a;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    font-size: 0.9rem;
    color: #333;
    @media screen and (max-width: 767px) {
      width: 40px;
      height: 40px;
      font-size: 0.8rem;
      line-height: 0.8rem;
    }
  }
`,f=p(()=>{const{totalPrice:t,userPaid:i,modalMessage:a,showModal:d}=r,s=h({query:"(max-width:767px)"});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"bg-[#f5f5f5] p-3.5 rounded-[calc(10px)] border-[calc(2px_solid_#1976d2)]",children:[o.jsxs("div",{className:"text-stone-700",children:["낼 돈: ",t.toLocaleString(),"원 / 지불함:"," ",i.toLocaleString(),"원"]}),o.jsx(g,{className:"flex gap-[calc(5px)] justify-center items-center",children:[1e4,5e3,1e3,500,100].map(e=>o.jsxs("button",{onClick:()=>r.onPayment(e),className:`amt-button hover:opacity-70 ${e>=1e4?"amt-10000":e>=5e3?"amt-5000":e>=1e3?"amt-1000":e>=500?"amt-500":"amt-100"}`,children:[e>=1e4?`${e/1e4===1?"":e/1e4}만`:e>=1e3?`${e/1e3===1?"":e/1e3}천`:`${e}`," ",o.jsx("span",{className:"opacity-80",style:{fontSize:`${s?"0.9rem":"1rem"}`},children:"원"})]},e))})]}),o.jsx(x,{visible:d,title:"결제 금액 초과",description:a,confirmText:"확인",onConfirm:()=>r.onHideModal()})]})}),k=n.memo(f);export{k as default};
