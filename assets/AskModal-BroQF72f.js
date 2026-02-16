import{r as a,j as e}from"./index-BS47MSj6.js";import{a as r}from"./styled-components.browser.esm-CJiAjboZ.js";import x from"./Button-BaYc1nNV.js";const h=r.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`,p=r.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);

  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-bottom: 1px dashed #ccc;
    background: #bdc9e2;
    border-radius: 1rem 1rem 0 0;
    color: #363675;
  }

  p {
    margin-bottom: 3rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  }
`,o=r(x)`
  min-height: 2rem;
  & + & {
    margin-right: 0.75rem;
  }
`,f=({visible:s,title:n,description:d,message:i,confirmText:m="확인",cancelText:c="취소",onConfirm:l,onCancel:t})=>{if(s)return e.jsx(h,{children:e.jsxs(p,{children:[e.jsx("h3",{style:{fontSize:"1.7rem"},children:n}),e.jsx("p",{style:{fontSize:"1.8rem"},children:d}),i&&e.jsx("p",{style:{textAlign:"justify",fontSize:"1.5rem"},children:i}),e.jsxs("div",{className:"buttons",children:[e.jsx(o,{onClick:l,className:`cyan ${t?void 0:"fullWidth"}`,style:{fontSize:"1.5rem"},children:m}),t&&e.jsx(o,{onClick:t,style:{fontSize:"1.5rem"},children:c})]})]})})},j=a.memo(f);export{j as A};
