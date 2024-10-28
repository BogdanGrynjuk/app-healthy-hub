"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[709],{3176:(e,t,i)=>{i.d(t,{Z:()=>n});i(2791);const n=i.p+"static/media/arrow-right-open.4b79b540b4210b099c8be8dfec113119.svg"},8710:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(2791);var a=i(5867);const d=a.ZP.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    gap: 50px;
  }
`,s=a.ZP.li`
  flex-basis: 100%;

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    flex-basis: calc((100% - 50px) / 2);
  }
`,o=a.ZP.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 20px 24px;
  border-radius: ${e=>e.theme.radii.normal};
  background-color: ${e=>e.theme.colors.black2};
`,r=a.ZP.div`
  width: 46px;
  height: 46px;
`,m=a.ZP.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,l=a.ZP.div`
  display: flex;
  flex-direction: column;
  column-gap: 2px;
`,c=a.ZP.p`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  letter-spacing: 0em;
`,h=a.ZP.p`
  margin-right: 6px;
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;

  & > span {
    font-weight: ${e=>e.theme.fontWeights.medium};
    color: ${e=>e.theme.colors.gray};
  }
`;var p=i(184);const x=e=>{let{img:t,name:i,amount:n,calories:a}=e;return(0,p.jsxs)(o,{children:[(0,p.jsx)(r,{children:(0,p.jsx)(m,{src:t,alt:i})}),(0,p.jsxs)(l,{children:[(0,p.jsx)(c,{children:i}),(0,p.jsxs)(h,{children:[n," ",(0,p.jsxs)("span",{children:[a," calories"]})]})]})]})},g=e=>e.recommendedFood.info;var f=i(9434);const u=e=>{let{itemLimit:t}=e;const[i,a]=(0,n.useState)([]),o=(0,f.v9)(g);return(0,n.useEffect)((()=>{a(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;const i=[];for(;i.length<t;){const t=Math.floor(Math.random()*e.length);i.includes(t)||i.push(t)}return e.filter(((e,t)=>i.includes(t)))}(o,t))}),[o,t]),(0,p.jsx)(d,{children:i.map((e=>{let{img:t,name:i,amount:n,calories:a}=e;return(0,p.jsx)(s,{children:(0,p.jsx)(x,{img:t,name:i,amount:n,calories:a})},`product-item_${i}`)}))})}},7002:(e,t,i)=>{i.d(t,{Z:()=>o});i(2791);var n=i(5867);const a=n.ZP.main`
  background-color: ${e=>e.theme.colors.black};
  color: ${e=>e.theme.colors.white};
  font-family: ${e=>e.theme.fontFamily.poppins};

  padding-top: 16px;
  padding-bottom: 60px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    padding-top: 24px;
    padding-bottom: 40px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    padding-top: 20px;
  }
`,d=n.ZP.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    position: relative;
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;var s=i(184);const o=e=>{let{children:t}=e;return(0,s.jsx)(a,{children:(0,s.jsx)(d,{children:t})})}},9763:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var n=i(2791),a=i(7689),d=i(1087),s=i(5867);const o=s.ZP.div`
  display: flex;
  margin-bottom: 16px;
`,r=(0,s.ZP)(d.OL)`
  display: flex;
  margin-right: 8px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    margin-right: 12px;
  }
`,m=s.ZP.img`
  width: 16px;
  transform: rotate(180deg);
  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 24px;
  }
`,l=s.ZP.h1`
  font-size: ${e=>e.theme.fontSizes.l2};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 1.25;
  letter-spacing: 0em;

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 1.2;
  }
`,c=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (${e=>e.theme.mq.desktop}) {
    flex-direction: row;
    column-gap: 44px;
  }
`,h=s.ZP.div`
  margin-bottom: 24px;
  width: 300px;
  height: 312px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 380px;
    height: 396px;
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    width: 536px;
    height: 560px;
    margin-bottom: 0;
  }
`,p=s.ZP.img`
  display: block;
  max-width: 100%;
  height: auto;
`,x=s.ZP.div`
  @media screen and (${e=>e.theme.mq.desktop}) {
    width: calc((100% - 44px) / 2);
  }
`;var g=i(3176);const f=i.p+"static/media/Ketogenic.552214ed5770bd5a3857.png";var u=i(8710),b=i(184);const $=()=>{var e,t;const i=(0,a.TH)(),d=(0,n.useRef)(null!==(e=null===(t=i.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/main");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(o,{children:[(0,b.jsx)(r,{to:d.current,children:(0,b.jsx)(m,{src:g.Z,alt:"arrow left"})}),(0,b.jsx)(l,{children:"Recommended food"})]}),(0,b.jsxs)(c,{children:[(0,b.jsx)(h,{children:(0,b.jsx)(p,{src:f,alt:"Banner recommended food"})}),(0,b.jsx)(x,{children:(0,b.jsx)(u.Z,{itemLimit:10})})]})]})};var j=i(7002);const v=()=>(0,b.jsx)(j.Z,{children:(0,b.jsx)($,{})})}}]);
//# sourceMappingURL=709.10387add.chunk.js.map