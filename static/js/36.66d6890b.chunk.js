"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[36],{7328:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(5867),o=i(1087);const r=n.ZP.div`
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
`,h=n.ZP.h1`
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
`,d=n.ZP.p`
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
`,c=n.ZP.p`
  font-weight: ${e=>e.theme.fontWeights.regular};
`,p=(0,n.ZP)(o.rU)`
  color: ${e=>e.theme.colors.white};
  font-weight: ${e=>e.theme.fontWeights.medium};

  &:hover {
    color: ${e=>e.theme.colors.greenLite};
  }
`;var x=i(184);const g=e=>{let{url:t,title:i,text:n,ctaText:o,ctaLink:g,ctaLinkText:f,children:$}=e;const u=o&&g&&f;return(0,x.jsxs)(r,{children:[(0,x.jsx)(l,{src:t,alt:"Banner"}),(0,x.jsxs)(a,{$hasCtaBlock:u,children:[(0,x.jsxs)(s,{children:[(0,x.jsx)(h,{children:i}),(0,x.jsx)(d,{children:n})]}),$,u&&(0,x.jsxs)(m,{children:[(0,x.jsx)(c,{children:o}),(0,x.jsx)(p,{to:g,children:f})]})]})]})}},7036:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var n=i(7328),o=(i(2791),i(7689)),r=i(5867);const l=r.ZP.button`
  width: 140px;
  padding: 8px 10px;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-weight: ${e=>e.theme.fontWeights.medium};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
  cursor: pointer;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 210px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 190px;
  }
`,a=r.ZP.div`
  display: flex;
  column-gap: 16px;
  margin-bottom: 40px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 350px;
    margin: 0 auto 80px auto;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    column-gap: 38px;
    margin-bottom: 80px;
  }
`,s=(0,r.ZP)(l)`
  background-color: ${e=>e.theme.colors.greenLite};
  color: ${e=>e.theme.colors.black2};
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.greenLite};
  border-radius: ${e=>e.theme.radii.normal};
`,h=(0,r.ZP)(l)`
  background-color: transparent;
  border: ${e=>e.theme.borders.none};
  color: ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.normal};

  &:hover {
    border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.greenLite};
  }
`,d=r.ZP.ul`
  & > li:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    row-gap: 16px;

    & > li:not(:last-child) {
      margin-bottom: 0px;
    }
  }
`,m=r.ZP.li`
  position: relative;
  padding-left: 16px;

  &::before {
    content: ' ';
    position: absolute;
    width: 8px;
    height: 8px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.greenLite};
  }
`,c=r.ZP.p`
  color: ${e=>e.theme.colors.white};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-weight: ${e=>e.theme.fontWeights.regular};
  font-size: ${e=>e.theme.fontSizes.xs};
  line-height: 20px;
`;var p=i(184);const x=()=>{const e=(0,o.s0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(a,{children:[(0,p.jsx)(s,{onClick:()=>{e("/signin")},children:"Sign in"}),(0,p.jsx)(h,{onClick:()=>{e("/signup")},children:"Sign up"})]}),(0,p.jsxs)(d,{children:[(0,p.jsx)(m,{children:(0,p.jsx)(c,{children:"Set goals"})}),(0,p.jsx)(m,{children:(0,p.jsx)(c,{children:"Watch your calories"})}),(0,p.jsx)(m,{children:(0,p.jsx)(c,{children:"Keep track of your water intake"})}),(0,p.jsx)(m,{children:(0,p.jsx)(c,{children:"Control your weight"})})]})]})};var g=i(9621);const f=()=>(0,p.jsx)(n.Z,{url:g,title:"Set goals and achieve them",text:"The service will help you set goals and follow them.",children:(0,p.jsx)(x,{})})},9621:(e,t,i)=>{e.exports=i.p+"static/media/WelcomeLogoPic.a616831fd2b34ff13567.png"}}]);
//# sourceMappingURL=36.66d6890b.chunk.js.map