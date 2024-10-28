"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[366],{7328:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(5867),o=i(1087);const l=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  padding: 24px 0;
  background-color: ${e=>e.theme.colors.black};

  @media screen and (${e=>e.theme.mq.desktop}) {
    row-gap: 60px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    flex-direction: row;
    row-gap: 0;
    column-gap: 100px;
    justify-content: center;
    padding: 40px 0;
  }
`,a=n.ZP.img`
  width: 300px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 590px;
    height: 590px;
  }
`,r=n.ZP.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 300px;
  height: ${e=>{let{$hasCtaBlock:t}=e;return t?"450px":"auto"}};
  font-family: ${e=>e.theme.fontFamily.poppins};
  color: ${e=>e.theme.colors.gray};

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 450px;
    height: ${e=>{let{$hasCtaBlock:t}=e;return t?"550px":"auto"}};
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    padding-top: 80px;
    height: ${e=>{let{$hasCtaBlock:t}=e;return t?"600px":"auto"}};
  }
`,s=n.ZP.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`,d=n.ZP.h1`
  text-align: center;
  font-weight: ${e=>e.theme.fontWeights.medium};
  font-size: ${e=>e.theme.fontSizes.l2};
  line-height: 1.25;
  color: ${e=>e.theme.colors.white};

  @media screen and (${e=>e.theme.mq.desktop}) {
    text-align: left;
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 1.2;
  }
`,h=n.ZP.p`
  width: 300px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  font-size: ${e=>e.theme.fontSizes.m};
  line-height: 1.33;
  text-align: center;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 450px;
    font-size: ${e=>e.theme.fontSizes.l};
  }
  @media screen and (${e=>e.theme.mq.desktop}) {
    text-align: left;
    line-height: 1.45;
  }
`,c=n.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 1.43;

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    justify-content: flex-start;
  }
`,m=n.ZP.p`
  font-weight: ${e=>e.theme.fontWeights.regular};
`,p=(0,n.ZP)(o.rU)`
  color: ${e=>e.theme.colors.white};
  font-weight: ${e=>e.theme.fontWeights.medium};

  &:hover {
    color: ${e=>e.theme.colors.greenLite};
  }
`;var x=i(184);const g=e=>{let{url:t,title:i,text:n,ctaText:o,ctaLink:g,ctaLinkText:f,children:u}=e;const $=o&&g&&f;return(0,x.jsxs)(l,{children:[(0,x.jsx)(a,{src:t,alt:"Banner"}),(0,x.jsxs)(r,{$hasCtaBlock:$,children:[(0,x.jsxs)(s,{children:[(0,x.jsx)(d,{children:i}),(0,x.jsx)(h,{children:n})]}),u,$&&(0,x.jsxs)(c,{children:[(0,x.jsx)(m,{children:o}),(0,x.jsx)(p,{to:g,children:f})]})]})]})}},7897:(e,t,i)=>{i.d(t,{Z:()=>d});i(2791);var n=i(5867),o=i(5705);const l=n.ZP.span`
  min-width: 12px;
  min-height: 12px;
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.gray};
  border-radius: 50%;
  position: relative;

  &:after {
    content: '';
    min-width: 6px;
    min-height: 6px;
    background-color: ${e=>e.theme.colors.yellow};
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,a=(0,n.ZP)(o.gN)`
  display: none;
  margin-right: 8px;

  &:checked + ${l} {
    &:after {
      opacity: 1;
    }
  }
`,r=n.ZP.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover > ${l} {
    border-color: ${e=>e.theme.colors.greenLite};
  }
`;var s=i(184);const d=e=>{let{name:t,value:i,selectedValue:n,text:o}=e;return(0,s.jsxs)(r,{children:[(0,s.jsx)(a,{type:"radio",name:t,value:i,checked:n===i}),(0,s.jsx)(l,{}),o]})}},3088:(e,t,i)=>{i.r(t),i.d(t,{default:()=>$});i(2791);var n=i(7328),o=i(7689),l=i(9434),a=i(7485),r=i(5705),s=i(7897),d=i(5867);const h=(0,d.ZP)(r.l0)`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (${e=>e.theme.mq.desktop}) {
    align-self: flex-start;
  }
`,c=d.ZP.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: ${e=>e.theme.fontSizes.xs};
    font-weight: ${e=>e.theme.fontWeights.medium};
    line-height: 20px;
    margin-bottom: 24px;
  }

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    flex-direction: column;
  }
`,m=d.ZP.button`
  width: 300px;
  padding: 8px 10px;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-weight: ${e=>e.theme.fontWeights.medium};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 1.43;
  border-radius: ${e=>e.theme.radii.normal};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.greenLite};
  color: ${e=>e.theme.colors.black};
  background-color: ${e=>e.theme.colors.greenLite};
  cursor: pointer;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 212px;
  }
`;var p=i(9016),x=i(3616),g=i(184);const f=()=>{const e=(0,l.I0)(),t=(0,o.s0)(),i={goal:(0,l.v9)(p.dy).goal||"Lose fat"};return(0,g.jsx)(r.J9,{initialValues:i,onSubmit:i=>{e((0,a.Gc)(i.goal)),t("/select-gender")},children:e=>{let{values:t}=e;return(0,g.jsxs)(h,{children:[(0,g.jsx)(c,{role:"group","aria-labelledby":"goal-head",children:x.V.map((e=>(0,g.jsx)(s.Z,{name:"goal",value:e.value,selectedValue:t.goal,text:e.text},e.value)))}),(0,g.jsx)(m,{type:"submit",children:"Next"})]})}})},u=i.p+"static/media/YourGoalLogo.487152541279e1774b58.png",$=()=>(0,g.jsx)(n.Z,{url:u,title:"Your goal",text:"Choose a goal so that we can help you effectively",children:(0,g.jsx)(f,{})})}}]);
//# sourceMappingURL=366.4fc74145.chunk.js.map