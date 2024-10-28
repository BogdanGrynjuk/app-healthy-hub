"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[913],{2888:(e,t,r)=>{r.d(t,{r:()=>l});var n,a,i=r(2791);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){let{title:r,titleId:s,...l}=e;return i.createElement("svg",o({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),r?i.createElement("title",{id:s},r):null,n||(n=i.createElement("g",{clipPath:"url(#clip0_283_2250)"},i.createElement("path",{d:"M11.9601 11.96C10.8205 12.8286 9.43282 13.3099 8.00008 13.3333C3.33342 13.3333 0.666748 7.99998 0.666748 7.99998C1.49601 6.45457 2.64617 5.10438 4.04008 4.03998M6.60008 2.82664C7.05897 2.71923 7.52879 2.66554 8.00008 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266M9.41342 9.41331C9.23032 9.60981 9.00952 9.76741 8.76418 9.87672C8.51885 9.98604 8.25402 10.0448 7.98548 10.0496C7.71693 10.0543 7.45019 10.0049 7.20116 9.9043C6.95212 9.80371 6.7259 9.65399 6.53598 9.46408C6.34606 9.27416 6.19634 9.04794 6.09575 8.7989C5.99517 8.54987 5.94577 8.28312 5.9505 8.01458C5.95524 7.74604 6.01402 7.48121 6.12333 7.23587C6.23264 6.99054 6.39025 6.76974 6.58675 6.58664",stroke:"#E3FFA8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M0.666748 0.666626L15.3334 15.3333",stroke:"#E3FFA8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),a||(a=i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_283_2250"},i.createElement("rect",{width:16,height:16,fill:"white"})))))}const l=i.forwardRef(s);r.p},801:(e,t,r)=>{r.d(t,{r:()=>l});var n,a,i=r(2791);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){let{title:r,titleId:s,...l}=e;return i.createElement("svg",o({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),r?i.createElement("title",{id:s},r):null,n||(n=i.createElement("path",{d:"M0.666504 7.99996C0.666504 7.99996 3.33317 2.66663 7.99984 2.66663C12.6665 2.66663 15.3332 7.99996 15.3332 7.99996C15.3332 7.99996 12.6665 13.3333 7.99984 13.3333C3.33317 13.3333 0.666504 7.99996 0.666504 7.99996Z",stroke:"#E3FFA8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=i.createElement("path",{d:"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",stroke:"#E3FFA8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})))}const l=i.forwardRef(s);r.p},7328:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(5867),a=r(1087);const i=n.ZP.div`
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
`,o=n.ZP.img`
  width: 300px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 590px;
    height: 590px;
  }
`,s=n.ZP.div`
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
`,l=n.ZP.div`
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
`,c=n.ZP.p`
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
`,m=n.ZP.div`
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
`,h=n.ZP.p`
  font-weight: ${e=>e.theme.fontWeights.regular};
`,p=(0,n.ZP)(a.rU)`
  color: ${e=>e.theme.colors.white};
  font-weight: ${e=>e.theme.fontWeights.medium};

  &:hover {
    color: ${e=>e.theme.colors.greenLite};
  }
`;var u=r(184);const x=e=>{let{url:t,title:r,text:n,ctaText:a,ctaLink:x,ctaLinkText:f,children:g}=e;const w=a&&x&&f;return(0,u.jsxs)(i,{children:[(0,u.jsx)(o,{src:t,alt:"Banner"}),(0,u.jsxs)(s,{$hasCtaBlock:w,children:[(0,u.jsxs)(l,{children:[(0,u.jsx)(d,{children:r}),(0,u.jsx)(c,{children:n})]}),g,w&&(0,u.jsxs)(m,{children:[(0,u.jsx)(h,{children:a}),(0,u.jsx)(p,{to:x,children:f})]})]})]})}},6913:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var n=r(7328),a=r(7689),i=r(9434),o=r(5705),s=r(7485),l=r(8007);const d=l.Ry({name:l.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces.").min(2,"Name must be at least 2 characters long.").max(50,"Name must be no more than 50 characters.").required("Name is required").trim("Name cannot include leading and trailing spaces").strict(!0),email:l.Z_().email("Invalid email address").required("Email is required"),password:l.Z_().min(6,"Password must be at least 6 characters").max(16,"Password can be at most 16 characters").matches(/[A-Z]/,"Password must contain at least one uppercase Latin letter").matches(/[a-z]/,"Password must contain at least one lowercase Latin letter").matches(/[0-9]/,"Password must contain at least one digit").required("Password is required")});var c=r(9016),m=r(1347),h=r(2791),p=r(5867);const u=(0,p.ZP)(o.l0)`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (${e=>e.theme.mq.desktop}) {
    align-self: flex-start;
  }
`,x=p.ZP.div`
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
`,f=p.ZP.div`
  position: relative;
`,g=(0,p.ZP)(o.gN)`
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
`,w=(0,p.ZP)(o.Bc)`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 12px;
  color: ${e=>e.theme.colors.error};
`,$=p.ZP.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`,b=p.ZP.button`
  width: 300px;
  padding: 8px;
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.greenLite};
  border-radius: ${e=>e.theme.radii.normal};
  text-align: center;
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
`;var v=r(2888),k=r(801),j=r(184);const y=e=>{let{values:t,errors:r,touched:n,setFieldTouched:a,setFieldError:o}=e;const l=(0,i.I0)(),[d,m]=(0,h.useState)(!1),p=(0,i.v9)(c.zh);return(0,h.useEffect)((()=>{if(p){if("Unable to fetch user: No token"===p)return void l((0,s.fw)());a("email",!0),o("email",p)}}),[l,p,o,a]),(0,j.jsxs)(u,{children:[(0,j.jsxs)(x,{children:[(0,j.jsx)(g,{type:"text",name:"name",placeholder:"Name",autoComplete:"username",$error:n.name&&r.name,value:t.name}),(0,j.jsx)(w,{className:n.name&&r.name?"visible":"",name:"name",component:"div"})]}),(0,j.jsxs)(x,{children:[(0,j.jsx)(g,{type:"email",name:"email",placeholder:"E-mail",autoComplete:"email",$error:n.email&&r.email,value:t.email}),(0,j.jsx)(w,{className:n.email&&r.email?"visible":"",name:"email",component:"div"})]}),(0,j.jsxs)(x,{children:[(0,j.jsxs)(f,{children:[(0,j.jsx)(g,{type:d?"text":"password",name:"password",placeholder:"Password",autoComplete:"current-password",$error:n.password&&r.password,value:t.password}),(0,j.jsx)($,{onClick:()=>m(!d),children:d?(0,j.jsx)(k.r,{width:16,height:16}):(0,j.jsx)(v.r,{width:16,height:16})})]}),(0,j.jsx)(w,{className:n.password&&r.password?"visible":"",name:"password",component:"div"})]}),(0,j.jsx)(b,{type:"submit",children:"Sign Up"})]})},C=()=>{const e=(0,i.I0)(),t=(0,a.s0)(),r=(0,i.v9)(c.dy),n={name:r.name||"",email:r.email||"",password:r.password||""};return(0,j.jsx)(o.J9,{initialValues:n,validationSchema:d,validateOnBlur:!1,onSubmit:r=>{let{name:n,email:a,password:i}=r;e((0,s.b4)(n)),e((0,s.WG)(a)),e((0,s.tQ)(i)),e((0,m.oP)(a)).unwrap().then((()=>t("/your-goal"))).catch((e=>{console.error(e)}))},children:e=>{let{errors:t,touched:r,values:n,setFieldError:a,setFieldTouched:i}=e;return(0,j.jsx)(y,{values:n,errors:t,touched:r,setFieldTouched:i,setFieldError:a})}})};var P=r(9621);const Z=()=>(0,j.jsx)(n.Z,{url:P,title:"Sign up",text:"You need to register to use the service",ctaText:"Do you already have an account?",ctaLink:"/signin",ctaLinkText:"Sign in",children:(0,j.jsx)(C,{})})},9621:(e,t,r)=>{e.exports=r.p+"static/media/WelcomeLogoPic.a616831fd2b34ff13567.png"}}]);
//# sourceMappingURL=913.c8faf160.chunk.js.map