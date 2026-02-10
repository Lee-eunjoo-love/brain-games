import{L as u,r as a,j as e}from"./index-C22LRyQ1.js";import{r as g,a as o}from"./styled-components.browser.esm-GobmjZxI.js";const r={gray:["#f8f9fa","#f1f3f5","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]},i=g`
  border: none;
  border-radius: 0.6rem;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${r.gray[8]};
  &:hover {
    background: ${r.gray[6]};
  }
  &.full-width {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  }
  &.cyan {
    background: ${r.cyan[5]};
    &:hover {
      background: ${r.cyan[4]};
    }
  }
  &:disabled {
    background: ${r.gray[3]};
    color: ${r.gray[5]};
    cursor: not-allowed;
  }
`,f=o.button`
  ${i}
`,h=o(u)`
  ${i}
`,x=t=>t.to?e.jsx(h,{...t}):e.jsx(f,{...t}),p=a.memo(x),y=o.div`
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
`,k=o.div`
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
`,d=o(p)`
  min-height: 2rem;
  & + & {
    margin-right: 0.75rem;
  }
`,j=({visible:t,title:c,description:s,confirmText:l="확인",cancelText:m="취소",onConfirm:b,onCancel:n})=>{if(t)return e.jsx(y,{children:e.jsxs(k,{children:[e.jsx("h3",{children:c}),e.jsx("p",{children:s}),e.jsxs("div",{className:"buttons",children:[n&&e.jsx(d,{onClick:n,children:m}),e.jsx(d,{onClick:b,className:"cyan full-width",children:l})]})]})})},v=a.memo(j);export{v as A};
