import{r as n,j as r,L as d}from"./index-BS47MSj6.js";import{a,r as c}from"./styled-components.browser.esm-CJiAjboZ.js";const o={gray:["#f8f9fa","#f1f3f5","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]},e=c`
  border: none;
  border-radius: 0.6rem;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${o.gray[5]};
  &:hover {
    background: ${o.gray[3]};
  }
  &.fullWidth {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  }
  &.cyan {
    background: ${o.cyan[5]};
    &:hover {
      background: ${o.cyan[4]};
    }
  }
  &:disabled {
    background: ${o.gray[3]};
    color: ${o.gray[2]};
    cursor: not-allowed;
  }
`,s=a.button`
  ${e}
`,f=a(d)`
  ${e}
`,b=t=>t.to?r.jsx(f,{...t}):r.jsx(s,{...t}),m=n.memo(b);export{m as default};
