import{L as u,r as a,j as e}from"./index-CIX3c_Oj.js";import{r as g,a as o}from"./styled-components.browser.esm-DLkA8i6Z.js";const t={gray:["#f8f9fa","#f1f3f5","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]},s=g`
  border: none;
  border-radius: 0.6rem;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${t.gray[5]};
  &:hover {
    background: ${t.gray[3]};
  }
  &.fullWidth {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  }
  &.cyan {
    background: ${t.cyan[5]};
    &:hover {
      background: ${t.cyan[4]};
    }
  }
  &:disabled {
    background: ${t.gray[3]};
    color: ${t.gray[2]};
    cursor: not-allowed;
  }
`,h=o.button`
  ${s}
`,x=o(u)`
  ${s}
`,y=r=>r.to?e.jsx(x,{...r}):e.jsx(h,{...r}),p=a.memo(y),k=o.div`
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
`,j=o.div`
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
`,i=o(p)`
  min-height: 2rem;
  & + & {
    margin-right: 0.75rem;
  }
`,$=({visible:r,title:c,description:l,message:d,confirmText:m="확인",cancelText:b="취소",onConfirm:f,onCancel:n})=>{if(r)return e.jsx(k,{children:e.jsxs(j,{children:[e.jsx("h3",{style:{fontSize:"1.7rem"},children:c}),e.jsx("p",{style:{fontSize:"1.8rem"},children:l}),d&&e.jsx("p",{style:{textAlign:"justify",fontSize:"1.5rem"},children:d}),e.jsxs("div",{className:"buttons",children:[e.jsx(i,{onClick:f,className:`cyan ${n?void 0:"fullWidth"}`,style:{fontSize:"1.5rem"},children:m}),n&&e.jsx(i,{onClick:n,style:{fontSize:"1.5rem"},children:b})]})]})})},z=a.memo($);export{z as A};
