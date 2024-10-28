"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[755],{7328:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(5867),o=i(1087);const r=n.ZP.div`
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
`,l=n.ZP.img`
  width: 300px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 590px;
    height: 590px;
  }
`,a=n.ZP.div`
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
`,m=n.ZP.h1`
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
`,d=n.ZP.div`
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
`,c=n.ZP.p`
  font-weight: ${e=>e.theme.fontWeights.regular};
`,p=(0,n.ZP)(o.rU)`
  color: ${e=>e.theme.colors.white};
  font-weight: ${e=>e.theme.fontWeights.medium};

  &:hover {
    color: ${e=>e.theme.colors.greenLite};
  }
`;var x=i(184);const g=e=>{let{url:t,title:i,text:n,ctaText:o,ctaLink:g,ctaLinkText:f,children:u}=e;const $=o&&g&&f;return(0,x.jsxs)(r,{children:[(0,x.jsx)(l,{src:t,alt:"Banner"}),(0,x.jsxs)(a,{$hasCtaBlock:$,children:[(0,x.jsxs)(s,{children:[(0,x.jsx)(m,{children:i}),(0,x.jsx)(h,{children:n})]}),u,$&&(0,x.jsxs)(d,{children:[(0,x.jsx)(c,{children:o}),(0,x.jsx)(p,{to:g,children:f})]})]})]})}},4755:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(7328),o=i(7689),r=i(5705),l=i(5867);const a=(0,l.ZP)(r.l0)`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (${e=>e.theme.mq.desktop}) {
    align-self: flex-start;
  }
`,s=l.ZP.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-bottom: 20px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 212px;
  }
`,m=(0,l.ZP)(r.gN)`
  height: 36px;
  width: 100%;
  padding: 10px 8px;
  border: ${e=>e.$error?`${e.theme.borders.normal} ${e.theme.colors.error}`:""===e.value?`${e.theme.borders.normal} ${e.theme.colors.greenLite}`:`${e.theme.borders.normal} ${e.theme.colors.correct}`};
  border-radius: 12px;
  background-color: ${e=>e.theme.colors.black2};
  color: ${e=>e.theme.colors.gray};

  &:focus {
    outline: none;
  }
`,h=(0,l.ZP)(r.Bc)`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 12px;
  color: ${e=>e.theme.colors.error};
`,d=l.ZP.button`
  width: 300px;
  padding: 8px;
  text-align: center;
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.greenLite};
  border-radius: ${e=>e.theme.radii.normal};
  color: ${e=>e.theme.colors.black};
  background-color: ${e=>e.theme.colors.greenLite};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-weight: ${e=>e.theme.fontWeights.medium};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 1.43;
  cursor: pointer;

  @media (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media (${e=>e.theme.mq.desktop}) {
    width: 212px;
  }
`;var c=i(8007);const p=c.Ry({email:c.Z_().email("Invalid email address").required("Email is required")});var x=i(9434),g=i(1347),f=i(184);const u=()=>{const e=(0,o.s0)(),t=(0,x.I0)();return(0,f.jsx)(r.J9,{initialValues:{email:""},validationSchema:p,onSubmit:(i,n)=>{let{email:o}=i,{resetForm:r}=n;t((0,g.c0)({email:o})).unwrap().catch((t=>{console.error(t),r(),e("/signin")}))},children:e=>{let{errors:t,touched:i,values:n}=e;return(0,f.jsxs)(a,{children:[(0,f.jsxs)(s,{children:[(0,f.jsx)(m,{type:"email",name:"email",placeholder:"E-mail",autoComplete:"email",$error:i.email&&t.email,value:n.email}),(0,f.jsx)(h,{className:i.email&&t.email?"visible":"",name:"email",component:"div"})]}),(0,f.jsx)(d,{type:"submit",children:"Send"})]})}})};var $=i(9621);const w=()=>(0,f.jsx)(n.Z,{url:$,title:"Forgot your password",text:"We will send you an email with recovery instructions",ctaText:"Do you already have an account?",ctaLink:"/signin",ctaLinkText:"Sign in",children:(0,f.jsx)(u,{})})},9621:(e,t,i)=>{e.exports=i.p+"static/media/WelcomeLogoPic.a616831fd2b34ff13567.png"}}]);
//# sourceMappingURL=755.3b6fee99.chunk.js.map