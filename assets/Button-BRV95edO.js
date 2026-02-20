import{e as n,j as e,L as d}from"./vendor-player-mobx-BpFE6djQ.js";import{a as r,r as c}from"./vendor-styled-components-nzWzLsK-.js";const o={gray:["#f8f9fa","#f1f3f5","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]},a=c`
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
`,s=r.button`
  ${a}
`,f=r(d)`
  ${a}
`,b=t=>t.to?e.jsx(f,{...t}):e.jsx(s,{...t}),m=n.memo(b);export{m as default};
