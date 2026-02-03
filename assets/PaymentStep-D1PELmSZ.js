import{r as a,j as o}from"./index-Bl8bo_Ae.js";import{a as i}from"./styled-components.browser.esm-yJ9f8FnG.js";import{g as r}from"./GroceryShoppingPage-FLeasq_i.js";import{b as d}from"./index-hAamA5tt.js";import"./CloseButton-ChHwlobN.js";const n=i.div`
  button {
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
    width: 70px;
  }
  .amt-5000 {
    background-color: #e0be96;
    color: #745839;
    width: 70px;
  }
  .amt-1000 {
    background-color: #cca0c8;
    color: #6e4f6c;
    width: 70px;
  }
  .amt-500 {
    background-color: #bebebe;
    border-color: #8e8e8e;
    border-radius: 100%;
    width: 70px;
    height: 70px;
  }
  .amt-100 {
    background-color: #cacaca;
    border-color: #9a9a9a;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    font-size: 0.8rem;
  }
`,s=d(()=>{const{totalPrice:c,userPaid:t}=r;return o.jsx(o.Fragment,{children:o.jsxs("div",{className:"bg-[#f5f5f5] p-3.5 rounded-[calc(10px)] border-[calc(2px_solid_#1976d2)]",children:[o.jsxs("h4",{children:["낼 돈: ",c.toLocaleString(),"원 / 지불함:"," ",t.toLocaleString(),"원"]}),o.jsx(n,{className:"flex gap-[calc(5px)] justify-center items-center",children:[1e4,5e3,1e3,500,100].map(e=>o.jsx("button",{onClick:()=>r.onPayment(e),className:`hover:opacity-70 ${e>=1e4?"amt-10000":e>=5e3?"amt-5000":e>=1e3?"amt-1000":e>=500?"amt-500":"amt-100"}`,children:e>=1e4?`${e/1e4===1?"":e/1e4}만원`:e>=1e3?`${e/1e3===1?"":e/1e3}천원`:`${e} 원`},e))})]})})}),h=a.memo(s);export{h as default};
