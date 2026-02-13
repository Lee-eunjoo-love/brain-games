import{r as n,j as e}from"./index-DE1jlgEg.js";import{a as d}from"./styled-components.browser.esm-CwPYtlM8.js";import{g as r}from"./GroceryShoppingPage-pwQqGyzH.js";import{b as l}from"./index-DZxXIiXH.js";import{u as m}from"./index-B5E5EGiw.js";import{A as p}from"./AskModal-Bz8w7u0-.js";import"./CloseButton-BcZ_VKXG.js";import"./Button-CM7-ESxM.js";const x=d.div`
  .amt-button {
    padding: 10px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 50px;
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
  }
  .amt-100 {
    background-color: #cacaca;
    border-color: #9a9a9a;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    font-size: 0.8rem;
    color: #333;
  }
`,h=l(()=>{const{totalPrice:t,userPaid:a,modalMessage:i,showModal:c}=r,s=m({query:"(max-width:767px)"});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-[#f5f5f5] p-3.5 rounded-[calc(10px)] border-[calc(2px_solid_#1976d2)]",children:[e.jsxs("h4",{className:"text-stone-700",children:["낼 돈: ",t.toLocaleString(),"원 / 지불함:"," ",a.toLocaleString(),"원"]}),e.jsx(x,{className:"flex gap-[calc(5px)] justify-center items-center",children:[1e4,5e3,1e3,500,100].map(o=>e.jsxs("button",{onClick:()=>r.onPayment(o),className:`amt-button hover:opacity-70 ${o>=1e4?"amt-10000":o>=5e3?"amt-5000":o>=1e3?"amt-1000":o>=500?"amt-500":"amt-100"}`,children:[o>=1e4?`${o/1e4===1?"":o/1e4}만`:o>=1e3?`${o/1e3===1?"":o/1e3}천`:`${o}`," ",e.jsx("span",{className:"opacity-80",style:{fontSize:s?"0.8rem":"inherit"},children:"원"})]},o))})]}),e.jsx(p,{visible:c,title:"결제 금액 초과",description:i,confirmText:"확인",onConfirm:()=>r.onHideModal()})]})}),S=n.memo(h);export{S as default};
