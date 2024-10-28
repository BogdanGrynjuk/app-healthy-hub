"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[746],{2888:(e,t,r)=>{r.d(t,{r:()=>l});var o,i,n=r(2791);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function s(e,t){let{title:r,titleId:s,...l}=e;return n.createElement("svg",a({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),r?n.createElement("title",{id:s},r):null,o||(o=n.createElement("g",{clipPath:"url(#clip0_283_2250)"},n.createElement("path",{d:"M11.9601 11.96C10.8205 12.8286 9.43282 13.3099 8.00008 13.3333C3.33342 13.3333 0.666748 7.99998 0.666748 7.99998C1.49601 6.45457 2.64617 5.10438 4.04008 4.03998M6.60008 2.82664C7.05897 2.71923 7.52879 2.66554 8.00008 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266M9.41342 9.41331C9.23032 9.60981 9.00952 9.76741 8.76418 9.87672C8.51885 9.98604 8.25402 10.0448 7.98548 10.0496C7.71693 10.0543 7.45019 10.0049 7.20116 9.9043C6.95212 9.80371 6.7259 9.65399 6.53598 9.46408C6.34606 9.27416 6.19634 9.04794 6.09575 8.7989C5.99517 8.54987 5.94577 8.28312 5.9505 8.01458C5.95524 7.74604 6.01402 7.48121 6.12333 7.23587C6.23264 6.99054 6.39025 6.76974 6.58675 6.58664",stroke:"#E3FFA8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M0.666748 0.666626L15.3334 15.3333",stroke:"#E3FFA8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),i||(i=n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_283_2250"},n.createElement("rect",{width:16,height:16,fill:"white"})))))}const l=n.forwardRef(s);r.p},801:(e,t,r)=>{r.d(t,{r:()=>l});var o,i,n=r(2791);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function s(e,t){let{title:r,titleId:s,...l}=e;return n.createElement("svg",a({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),r?n.createElement("title",{id:s},r):null,o||(o=n.createElement("path",{d:"M0.666504 7.99996C0.666504 7.99996 3.33317 2.66663 7.99984 2.66663C12.6665 2.66663 15.3332 7.99996 15.3332 7.99996C15.3332 7.99996 12.6665 13.3333 7.99984 13.3333C3.33317 13.3333 0.666504 7.99996 0.666504 7.99996Z",stroke:"#E3FFA8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=n.createElement("path",{d:"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",stroke:"#E3FFA8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})))}const l=n.forwardRef(s);r.p},7328:(e,t,r)=>{r.d(t,{Z:()=>x});var o=r(5867),i=r(1087);const n=o.ZP.div`
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
`,s=o.ZP.div`
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
`,l=o.ZP.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`,d=o.ZP.h1`
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
`,c=o.ZP.p`
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
`,p=(0,o.ZP)(i.rU)`
  color: ${e=>e.theme.colors.white};
  font-weight: ${e=>e.theme.fontWeights.medium};

  &:hover {
    color: ${e=>e.theme.colors.greenLite};
  }
`;var u=r(184);const x=e=>{let{url:t,title:r,text:o,ctaText:i,ctaLink:x,ctaLinkText:f,children:g}=e;const w=i&&x&&f;return(0,u.jsxs)(n,{children:[(0,u.jsx)(a,{src:t,alt:"Banner"}),(0,u.jsxs)(s,{$hasCtaBlock:w,children:[(0,u.jsxs)(l,{children:[(0,u.jsx)(d,{children:r}),(0,u.jsx)(c,{children:o})]}),g,w&&(0,u.jsxs)(h,{children:[(0,u.jsx)(m,{children:i}),(0,u.jsx)(p,{to:x,children:f})]})]})]})}},9746:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var o=r(7328),i=r(9434),n=r(5705),a=r(1347),s=r(8007);const l=s.Ry({email:s.Z_().email("Invalid email address").required("Email is required"),password:s.Z_().matches(/[A-Z]/,"Password must contain at least one uppercase Latin letter").matches(/[a-z]/,"Password must contain at least one lowercase Latin letter").matches(/[0-9]/,"Password must contain at least one digit").min(6,"Password must be at least 6 characters").max(16,"Password can be at most 16 characters").required("Password is required")});var d=r(2791),c=r(9016),h=r(7485),m=r(5867),p=r(1087);const u=(0,m.ZP)(n.l0)`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (${e=>e.theme.mq.desktop}) {
    align-self: flex-start;
  }
`,x=m.ZP.div`
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
`,f=m.ZP.div`
  position: relative;
`,g=(0,m.ZP)(n.gN)`
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
`,w=(0,m.ZP)(n.Bc)`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 12px;
  color: ${e=>e.theme.colors.error};
`,$=m.ZP.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`,k=m.ZP.button`
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

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 212px;
  }
`,b=(0,m.ZP)(p.rU)`
  margin-top: 20px;
  color: ${e=>e.theme.colors.gray};
  background-color: ${e=>e.theme.colors.black};
  border: none;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 1.43;
  text-align: center;

  &:hover {
    color: ${e=>e.theme.colors.greenLite};
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    text-align: left;
  }
`;var v=r(2888),y=r(801),j=r(184);const C=e=>{let{values:t,errors:r,touched:o,setFieldValue:n,setFieldTouched:a,setFieldError:s}=e;const l=(0,i.I0)(),[m,p]=(0,d.useState)(!1),C=(0,i.v9)(c.zh);return(0,d.useEffect)((()=>{let e={};if(C){try{e=JSON.parse(C)}catch(t){return void l((0,h.fw)())}n("email",e.email),n("password",e.password),setTimeout((()=>{a("email",!0),a("password",!0),s("email","Please check your email and try again"),s("password","Please check your password and try again")}),0)}}),[C,n,s,a,l]),(0,j.jsxs)(u,{children:[(0,j.jsxs)(x,{children:[(0,j.jsx)(g,{type:"email",name:"email",placeholder:"E-mail",autoComplete:"email",$error:o.email&&r.email,value:t.email}),(0,j.jsx)(w,{name:"email",component:"div"})]}),(0,j.jsxs)(x,{children:[(0,j.jsxs)(f,{children:[(0,j.jsx)(g,{type:m?"text":"password",name:"password",placeholder:"Password",autoComplete:"current-password",$error:o.password&&r.password,value:t.password}),(0,j.jsx)($,{onClick:()=>p(!m),children:m?(0,j.jsx)(y.r,{width:16,height:16}):(0,j.jsx)(v.r,{width:16,height:16})})]}),(0,j.jsx)(w,{name:"password",component:"div"})]}),(0,j.jsx)(k,{type:"submit",children:"Sign In"}),(0,j.jsx)(b,{to:"/forgot-password",onClick:()=>{l((0,h.fw)())},children:"Forgot your password?"})]})},P=()=>{const e=(0,i.I0)();return(0,j.jsx)(n.J9,{initialValues:{email:"",password:""},validationSchema:l,validateOnBlur:!1,onSubmit:t=>{let{email:r,password:o}=t;e((0,a.zB)({email:r,password:o}))},children:e=>{let{errors:t,touched:r,values:o,setFieldValue:i,setFieldError:n,setFieldTouched:a}=e;return(0,j.jsx)(C,{values:o,errors:t,touched:r,setFieldValue:i,setFieldError:n,setFieldTouched:a})}})};var Z=r(9621);const E=()=>(0,j.jsx)(o.Z,{url:Z,title:"Sign in",text:"You need to login to use the service",ctaText:"If you don't have an account yet",ctaLink:"/signup",ctaLinkText:"Sign up",children:(0,j.jsx)(P,{})})},9621:(e,t,r)=>{e.exports=r.p+"static/media/WelcomeLogoPic.a616831fd2b34ff13567.png"}}]);
//# sourceMappingURL=746.e7e60e9f.chunk.js.map