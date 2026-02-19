import{r as c,j as o}from"./index-f_fVk6cW.js";import{a as d}from"./styled-components.browser.esm-XALuEXWq.js";import{g as r}from"./GroceryShoppingPage-Cpu6puUx.js";import{o as m}from"./index-EXzAybsX.js";import{u as l}from"./index-DaijRw3C.js";import p from"./AskModal-DXQPmvNC.js";import"./CloseButton-B-6UVrS_.js";import"./Button-Bjde-eh5.js";const x=d.div`
  .amt-button {
    padding: 10px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 50px;
    @media screen and (max-width: 767px) {
      font-size: 1rem;
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
    font-size: 0.9rem;
    @media screen and (max-width: 767px) {
      width: 45px;
      height: 45px;
      font-size: 0.8rem;
      line-height: 0.8rem;
    }
  }
  .amt-100 {
    background-color: #cacaca;
    border-color: #9a9a9a;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    font-size: 0.8rem;
    color: #333;
    @media screen and (max-width: 767px) {
      width: 40px;
      height: 40px;
      font-size: 0.7rem;
      line-height: 0.7rem;
    }
  }
`,h=m(()=>{const{totalPrice:i,userPaid:a,modalMessage:s,showModal:n}=r,t=l({query:"(max-width:767px)"});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"bg-[#f5f5f5] p-3.5 rounded-[calc(10px)] border-[calc(2px_solid_#1976d2)]",children:[o.jsxs("div",{className:"text-stone-700",style:{fontSize:`${t?"1.5rem":"1.7rem"}`},children:["낼 돈: ",i.toLocaleString(),"원 / 지불함:"," ",a.toLocaleString(),"원"]}),o.jsx(x,{className:"flex gap-[calc(5px)] justify-center items-center",children:[1e4,5e3,1e3,500,100].map(e=>o.jsxs("button",{onClick:()=>r.onPayment(e),className:`amt-button hover:opacity-70 ${e>=1e4?"amt-10000":e>=5e3?"amt-5000":e>=1e3?"amt-1000":e>=500?"amt-500":"amt-100"}`,children:[e>=1e4?`${e/1e4===1?"":e/1e4}만`:e>=1e3?`${e/1e3===1?"":e/1e3}천`:`${e}`," ",o.jsx("span",{className:"opacity-80",style:{fontSize:t?"0.7rem":"inherit"},children:"원"})]},e))})]}),o.jsx(p,{visible:n,title:"결제 금액 초과",description:s,confirmText:"확인",onConfirm:()=>r.onHideModal()})]})}),S=c.memo(h);export{S as default};
