"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[124],{7328:(e,t,o)=>{o.d(t,{Z:()=>g});var r=o(5867),n=o(1087);const i=r.ZP.div`
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
`,a=r.ZP.div`
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
`,h=r.ZP.h1`
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
`,d=r.ZP.p`
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
`,c=r.ZP.div`
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
`,p=(0,r.ZP)(n.rU)`
  color: ${e=>e.theme.colors.white};
  font-weight: ${e=>e.theme.fontWeights.medium};

  &:hover {
    color: ${e=>e.theme.colors.greenLite};
  }
`;var x=o(184);const g=e=>{let{url:t,title:o,text:r,ctaText:n,ctaLink:g,ctaLinkText:f,children:u}=e;const $=n&&g&&f;return(0,x.jsxs)(i,{children:[(0,x.jsx)(l,{src:t,alt:"Banner"}),(0,x.jsxs)(a,{$hasCtaBlock:$,children:[(0,x.jsxs)(s,{children:[(0,x.jsx)(h,{children:o}),(0,x.jsx)(d,{children:r})]}),u,$&&(0,x.jsxs)(c,{children:[(0,x.jsx)(m,{children:n}),(0,x.jsx)(p,{to:g,children:f})]})]})]})}},7897:(e,t,o)=>{o.d(t,{Z:()=>h});o(2791);var r=o(5867),n=o(5705);const i=r.ZP.span`
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
`,l=(0,r.ZP)(n.gN)`
  display: none;
  margin-right: 8px;

  &:checked + ${i} {
    &:after {
      opacity: 1;
    }
  }
`,a=r.ZP.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover > ${i} {
    border-color: ${e=>e.theme.colors.greenLite};
  }
`;var s=o(184);const h=e=>{let{name:t,value:o,selectedValue:r,text:n}=e;return(0,s.jsxs)(a,{children:[(0,s.jsx)(l,{type:"radio",name:t,value:o,checked:r===o}),(0,s.jsx)(i,{}),n]})}},9337:(e,t,o)=>{o.d(t,{Z:()=>r.Z});var r=o(7897)},2539:(e,t,o)=>{o.d(t,{u:()=>r});const r=[{value:"Male",text:"Male"},{value:"Female",text:"Female"}]},6756:(e,t,o)=>{o.r(t),o.d(t,{default:()=>S});o(2791);const r=o.p+"static/media/SelectGenderLogoPic.9a15f72a29b163ea6fa4.png";var n=o(7328),i=o(9434),l=o(7689),a=o(5705),s=o(7485),h=o(9016),d=o(8007),c=o(7984);const m=d.Ry({age:c.Z.fields.age});var p=o(9337),x=o(5867);const g=x.ZP.button`
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
`,f=(0,x.ZP)(a.l0)`
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
`,u=x.ZP.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: ${e=>e.theme.fontSizes.xs};
    font-weight: ${e=>e.theme.fontWeights.medium};
    line-height: 20px;
  }
`,$=x.ZP.p`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 12px;
`,b=x.ZP.div`
  display: flex;
  gap: 16px;
  height: 100%;

  & > label {
    flex-grow: 1;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    flex-direction: column;
  }
`,y=x.ZP.label`
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
`,w=(0,x.ZP)(a.gN)`
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
`,v=(0,x.ZP)(a.Bc)`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 12px;
  color: ${e=>e.theme.colors.error};
`,k=x.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,j=(0,x.ZP)(g)`
  background-color: ${e=>e.theme.colors.black};
  color: ${e=>e.theme.colors.white};
`,Z=(0,x.ZP)(g)`
  background-color: ${e=>e.theme.colors.greenLite};
  color: ${e=>e.theme.colors.black};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.greenLite};
`;var P=o(2539),z=o(184);const q=()=>{const e=(0,i.I0)(),t=(0,l.TH)(),o=(0,l.s0)(),r=(0,i.v9)(h.dy),n={gender:r.gender||"Male",age:r.age||""},d=()=>{var e,r;o(null!==(e=null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/your-goal")};return(0,z.jsx)(a.J9,{initialValues:n,onSubmit:t=>{e((0,s.mE)(t.gender)),e((0,s._h)(t.age)),o("/body-parameters")},validationSchema:m,children:e=>{let{errors:t,touched:o,values:r}=e;return(0,z.jsxs)(f,{children:[(0,z.jsxs)(u,{role:"group","aria-labelledby":"gender-head",children:[(0,z.jsx)($,{id:"gender-head",children:"Gender"}),(0,z.jsx)(b,{children:P.u.map((e=>(0,z.jsx)(p.Z,{name:"gender",value:e.value,selectedValue:r.gender,text:e.text},e.value)))})]}),(0,z.jsxs)(y,{children:["Your age",(0,z.jsx)(w,{type:"number",name:"age",placeholder:"Enter your age",$error:o.age&&t.age,value:r.age,required:!0}),(0,z.jsx)(v,{name:"age",component:"div"})]}),(0,z.jsxs)(k,{children:[(0,z.jsx)(Z,{type:"submit",children:"Next"}),(0,z.jsx)(j,{type:"button",onClick:d,children:"Back"})]})]})}})},S=()=>(0,z.jsx)(n.Z,{url:r,title:"Select gender, Age",text:"Choose a goal so that we can help you effectively",children:(0,z.jsx)(q,{})})}}]);
//# sourceMappingURL=124.6632a2ce.chunk.js.map