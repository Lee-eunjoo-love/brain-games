import{r as i,j as o}from"./index-DpkczfIZ.js";import{b as s,d as n}from"./index-Budvz0BD.js";import{g as r}from"./GroceryShoppingPage-Cvy4zMae.js";import{u as d}from"./index-DYrbxpfC.js";import"./CloseButton-BIrxbeAk.js";const l=n.div`
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
`,p=s(()=>{const{totalPrice:t,userPaid:a}=r,c=d({query:"(max-width:767px)"});return o.jsx(o.Fragment,{children:o.jsxs("div",{className:"bg-[#f5f5f5] p-3.5 rounded-[calc(10px)] border-[calc(2px_solid_#1976d2)]",children:[o.jsxs("h4",{className:"text-stone-700",children:["낼 돈: ",t.toLocaleString(),"원 / 지불함:"," ",a.toLocaleString(),"원"]}),o.jsx(l,{className:"flex gap-[calc(5px)] justify-center items-center",children:[1e4,5e3,1e3,500,100].map(e=>o.jsxs("button",{onClick:()=>r.onPayment(e),className:`amt-button hover:opacity-70 ${e>=1e4?"amt-10000":e>=5e3?"amt-5000":e>=1e3?"amt-1000":e>=500?"amt-500":"amt-100"}`,children:[e>=1e4?`${e/1e4===1?"":e/1e4}만`:e>=1e3?`${e/1e3===1?"":e/1e3}천`:`${e}`," ",o.jsx("span",{className:"opacity-80",style:{fontSize:c?"0.8rem":"inherit"},children:"원"})]},e))})]})})}),f=i.memo(p);export{f as default};
