"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[394],{7328:(e,t,i)=>{i.d(t,{Z:()=>u});var o=i(5867),n=i(1087);const r=o.ZP.div`
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
`,a=o.ZP.img`
  width: 300px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 590px;
    height: 590px;
  }
`,l=o.ZP.div`
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
`,s=o.ZP.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`,c=o.ZP.h1`
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
`,d=o.ZP.p`
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
`,h=o.ZP.div`
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
`,m=o.ZP.p`
  font-weight: ${e=>e.theme.fontWeights.regular};
`,p=(0,o.ZP)(n.rU)`
  color: ${e=>e.theme.colors.white};
  font-weight: ${e=>e.theme.fontWeights.medium};

  &:hover {
    color: ${e=>e.theme.colors.greenLite};
  }
`;var x=i(184);const u=e=>{let{url:t,title:i,text:o,ctaText:n,ctaLink:u,ctaLinkText:f,children:g}=e;const y=n&&u&&f;return(0,x.jsxs)(r,{children:[(0,x.jsx)(a,{src:t,alt:"Banner"}),(0,x.jsxs)(l,{$hasCtaBlock:y,children:[(0,x.jsxs)(s,{children:[(0,x.jsx)(c,{children:i}),(0,x.jsx)(d,{children:o})]}),g,y&&(0,x.jsxs)(h,{children:[(0,x.jsx)(m,{children:n}),(0,x.jsx)(p,{to:u,children:f})]})]})]})}},7897:(e,t,i)=>{i.d(t,{Z:()=>c});i(2791);var o=i(5867),n=i(5705);const r=o.ZP.span`
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
`,a=(0,o.ZP)(n.gN)`
  display: none;
  margin-right: 8px;

  &:checked + ${r} {
    &:after {
      opacity: 1;
    }
  }
`,l=o.ZP.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover > ${r} {
    border-color: ${e=>e.theme.colors.greenLite};
  }
`;var s=i(184);const c=e=>{let{name:t,value:i,selectedValue:o,text:n}=e;return(0,s.jsxs)(l,{children:[(0,s.jsx)(a,{type:"radio",name:t,value:i,checked:o===i}),(0,s.jsx)(r,{}),n]})}},9337:(e,t,i)=>{i.d(t,{Z:()=>o.Z});var o=i(7897)},459:(e,t,i)=>{i.d(t,{p:()=>o});const o=[{value:"1.2",text:"1.2 - if you do not have physical activity and sedentary work"},{value:"1.375",text:"1.375 - if you do short runs or light gymnastics 1-3 times a week"},{value:"1.55",text:"1.55 - if you play sports with average loads 3-5 times a week"},{value:"1.725",text:"1.725 - if you train fully 6-7 times a week"},{value:"1.9",text:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"}]},7322:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var o=i(2791);const n=i.p+"static/media/YourActivityLogoPic.9d9c2463eab2cc533c90.png";var r=i(7328),a=i(9434),l=i(7689),s=i(5705),c=i(5867);const d=c.ZP.button`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  width: 100%;
  padding: 8px 12px;
  border-radius: ${e=>e.theme.radii.normal};
  cursor: pointer;
  border: ${e=>e.theme.borders.normal} transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${e=>e.theme.colors.greenLite};
  }

  &:focus {
    outline: none;
  }
`,h=(0,c.ZP)(s.l0)`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 300px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 460px;
    align-items: center;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 330px;
    align-items: flex-start;
  }
`,m=c.ZP.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: ${e=>e.theme.fontSizes.xs};
    font-weight: ${e=>e.theme.fontWeights.medium};
    line-height: 20px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`,p=c.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 212px;
  }
`,x=(0,c.ZP)(d)`
  background-color: ${e=>e.theme.colors.black};
  color: ${e=>e.theme.colors.white};
`,u=(0,c.ZP)(d)`
  background-color: ${e=>e.theme.colors.greenLite};
  color: ${e=>e.theme.colors.black};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.greenLite};
`;var f=i(9337),g=i(7485),y=i(1347),$=i(9016),v=i(459),w=i(184);const b=()=>{const e=(0,a.I0)(),t=(0,l.TH)(),i=(0,l.s0)(),n=(0,a.v9)($.dy),r=(0,a.v9)($.zh),c={physicalActivityRatio:n.physicalActivityRatio||"1.2"},d=()=>{var e,o;i(null!==(e=null===(o=t.state)||void 0===o?void 0:o.from)&&void 0!==e?e:"/body-parameters")};return(0,o.useEffect)((()=>{r&&i("/signup")}),[r,i]),(0,w.jsx)(s.J9,{initialValues:c,onSubmit:t=>{let{physicalActivityRatio:i}=t;e((0,g.I3)(i)),e((0,y.y1)({...n,physicalActivityRatio:Number(i)}))},children:e=>{let{values:t}=e;return(0,w.jsxs)(h,{children:[(0,w.jsx)(m,{role:"group","aria-labelledby":"activity-head",children:v.p.map((e=>(0,w.jsx)(f.Z,{name:"physicalActivityRatio",value:e.value,selectedValue:t.physicalActivityRatio,text:e.text},e.value)))}),(0,w.jsxs)(p,{children:[(0,w.jsx)(u,{type:"submit",children:"Next"}),(0,w.jsx)(x,{type:"button",onClick:d,children:"Back"})]})]})}})},k=()=>(0,w.jsx)(r.Z,{url:n,title:"Your Activity",text:"To correctly calculate calorie and water intake",children:(0,w.jsx)(b,{})})}}]);
//# sourceMappingURL=394.ef25c5c2.chunk.js.map