"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[415],{7328:(e,t,o)=>{o.d(t,{Z:()=>x});var r=o(5867),i=o(1087);const n=r.ZP.div`
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
`,l=r.ZP.img`
  width: 300px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 590px;
    height: 590px;
  }
`,h=r.ZP.div`
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
`,s=r.ZP.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`,a=r.ZP.h1`
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
`,c=r.ZP.p`
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
`,d=r.ZP.div`
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
`,m=r.ZP.p`
  font-weight: ${e=>e.theme.fontWeights.regular};
`,p=(0,r.ZP)(i.rU)`
  color: ${e=>e.theme.colors.white};
  font-weight: ${e=>e.theme.fontWeights.medium};

  &:hover {
    color: ${e=>e.theme.colors.greenLite};
  }
`;var g=o(184);const x=e=>{let{url:t,title:o,text:r,ctaText:i,ctaLink:x,ctaLinkText:f,children:u}=e;const $=i&&x&&f;return(0,g.jsxs)(n,{children:[(0,g.jsx)(l,{src:t,alt:"Banner"}),(0,g.jsxs)(h,{$hasCtaBlock:$,children:[(0,g.jsxs)(s,{children:[(0,g.jsx)(a,{children:o}),(0,g.jsx)(c,{children:r})]}),u,$&&(0,g.jsxs)(d,{children:[(0,g.jsx)(m,{children:i}),(0,g.jsx)(p,{to:x,children:f})]})]})]})}},5444:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var r=o(7328);const i=o.p+"static/media/BodyParametersLogoPic.a4695cbcc6e7b4b29d00.png";o(2791);var n=o(9434),l=o(7689),h=o(5705),s=o(7485),a=o(9016),c=o(8007),d=o(7984);const m=c.Ry({height:d.Z.fields.height,weight:d.Z.fields.weight});var p=o(5867);const g=p.ZP.button`
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
`,x=(0,p.ZP)(h.l0)`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 300px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 212px;
  }
`,f=p.ZP.label`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  &[for='userAvatarFile'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
`,u=(0,p.ZP)(h.gN)`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
  background-color: ${e=>e.theme.colors.black};
  color: ${e=>e.theme.colors.white};

  padding: 8px 10px;
  border-radius: ${e=>e.theme.radii.normal};
  border: 1px solid ${e=>e.theme.colors.gray};
  border: ${e=>e.$error?`${e.theme.borders.normal} ${e.theme.colors.error}`:""===e.value?`${e.theme.borders.normal} ${e.theme.colors.greenLite}`:`${e.theme.borders.normal} ${e.theme.colors.correct}`};

  &:hover {
    border-color: ${e=>e.theme.colors.greenLite};
  }

  &:focus {
    outline: none;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.gray};
  }
`,$=(0,p.ZP)(h.Bc)`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 12px;
  color: ${e=>e.theme.colors.error};
`,w=p.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,b=(0,p.ZP)(g)`
  background-color: ${e=>e.theme.colors.black};
  color: ${e=>e.theme.colors.white};
`,y=(0,p.ZP)(g)`
  background-color: ${e=>e.theme.colors.greenLite};
  color: ${e=>e.theme.colors.black};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.greenLite};
`;var k=o(184);const v=()=>{const e=(0,n.I0)(),t=(0,l.TH)(),o=(0,l.s0)(),r=(0,n.v9)(a.dy),i={height:r.height||"",weight:r.weight||""},c=()=>{var e,r;o(null!==(e=null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/select-gender")};return(0,k.jsx)(h.J9,{initialValues:i,onSubmit:t=>{let{height:r,weight:i}=t;e((0,s.r1)(r)),e((0,s.iJ)(i)),o("/your-activity")},validationSchema:m,children:e=>{let{errors:t,touched:o,values:r}=e;return(0,k.jsxs)(x,{children:[(0,k.jsxs)(f,{children:["Height",(0,k.jsx)(u,{type:"number",name:"height",placeholder:"Enter your height",autoComplete:"off",$error:o.height&&t.height,value:r.height,required:!0}),(0,k.jsx)($,{name:"height",component:"div"})]}),(0,k.jsxs)(f,{children:["Weight",(0,k.jsx)(u,{type:"number",name:"weight",placeholder:"Enter your weight",autoComplete:"off",$error:o.weight&&t.weight,value:r.weight,required:!0}),(0,k.jsx)($,{name:"weight",component:"div"})]}),(0,k.jsxs)(w,{children:[(0,k.jsx)(y,{type:"submit",children:"Next"}),(0,k.jsx)(b,{type:"button",onClick:c,children:"Back"})]})]})}})},j=()=>(0,k.jsx)(r.Z,{url:i,title:"Body parameters",text:"Enter your parameters for correct performance tracking",children:(0,k.jsx)(v,{})})}}]);
//# sourceMappingURL=415.28a0fcf1.chunk.js.map