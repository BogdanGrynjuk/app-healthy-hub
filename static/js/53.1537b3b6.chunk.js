"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[53],{8710:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(2791);var o=i(5867);const r=o.ZP.ul`
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
`,s=o.ZP.li`
  flex-basis: 100%;

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (${e=>e.theme.mq.desktop}) {
    flex-basis: calc((100% - 50px) / 2);
  }
`,a=o.ZP.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 20px 24px;
  border-radius: ${e=>e.theme.radii.normal};
  background-color: ${e=>e.theme.colors.black2};
`,l=o.ZP.div`
  width: 46px;
  height: 46px;
`,h=o.ZP.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,c=o.ZP.div`
  display: flex;
  flex-direction: column;
  column-gap: 2px;
`,m=o.ZP.p`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  letter-spacing: 0em;
`,d=o.ZP.p`
  margin-right: 6px;
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;

  & > span {
    font-weight: ${e=>e.theme.fontWeights.medium};
    color: ${e=>e.theme.colors.gray};
  }
`;var p=i(184);const x=e=>{let{img:t,name:i,amount:n,calories:o}=e;return(0,p.jsxs)(a,{children:[(0,p.jsx)(l,{children:(0,p.jsx)(h,{src:t,alt:i})}),(0,p.jsxs)(c,{children:[(0,p.jsx)(m,{children:i}),(0,p.jsxs)(d,{children:[n," ",(0,p.jsxs)("span",{children:[o," calories"]})]})]})]})},f=e=>e.recommendedFood.info;var g=i(9434);const u=e=>{let{itemLimit:t}=e;const[i,o]=(0,n.useState)([]),a=(0,g.v9)(f);return(0,n.useEffect)((()=>{o(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;const i=[];for(;i.length<t;){const t=Math.floor(Math.random()*e.length);i.includes(t)||i.push(t)}return e.filter(((e,t)=>i.includes(t)))}(a,t))}),[a,t]),(0,p.jsx)(r,{children:i.map((e=>{let{img:t,name:i,amount:n,calories:o}=e;return(0,p.jsx)(s,{children:(0,p.jsx)(x,{img:t,name:i,amount:n,calories:o})},`product-item_${i}`)}))})}},8053:(e,t,i)=>{i.r(t),i.d(t,{default:()=>st});var n=i(7002),o=i(2791),r=i(1087),s=i(5867);const a=s.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    margin-bottom: 24px;
  }
  @media screen and (${e=>e.theme.mq.desktop}) {
    margin-bottom: 16px;
  }
`,l=s.ZP.h1`
  font-size: 24px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 30px;
  letter-spacing: 0;

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 36px;
  }
`,h=(0,s.ZP)(r.rU)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover > span {
    color: ${e=>e.theme.colors.greenLite};
    transition: color 0.5 ease-in-out;
  }
`,c=s.ZP.span`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0;
  color: ${e=>e.theme.colors.gray};

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,m=s.ZP.img`
  width: 16px;
  height: 16px;
`,d=s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (${e=>e.theme.mq.desktop}) {
    flex-direction: row;
    flex-basis: calc((100% - 20px) / 2);
  }
`;var p=i(3176);const x=s.ZP.section`
  margin-bottom: 20px;
`,f=s.ZP.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`,g=s.ZP.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin-bottom: 20px; */

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`,u=s.ZP.li`
  flex-basis: 100%;

  &:not(:last-of-type) {
    @media screen and (${e=>e.theme.mq.tablet}) {
      flex-basis: calc((100% - 20px) / 2);
    }
  }

  &:nth-child(1) {
    @media screen and (${e=>e.theme.mq.desktop}) {
      flex-basis: 328px;
    }
  }

  &:nth-child(2) {
    @media screen and (${e=>e.theme.mq.desktop}) {
      flex-basis: 444px;
    }
  }

  &:nth-child(3) {
    @media screen and (${e=>e.theme.mq.desktop}) {
      flex-basis: 560px;
    }
  }
`;var $=i(9434),b=i(9016);const y=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50;if(!t)return;let o=0,r=Math.round(i/(e/n));const s=setInterval((()=>{o+=n,o>=e&&(o=e,clearInterval(s)),t.innerHTML=o}),r)},w=s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`,j=s.ZP.h3`  
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};  
`,v=s.ZP.div`
  padding: 16px 12px;
  background-color: ${e=>e.theme.colors.black2};
  border-radius: ${e=>e.theme.radii.normal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  flex-grow: 1;
`,Z=s.ZP.div`
  display: flex;
  gap: 20px; 
`,P=s.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px; 
`,z=s.ZP.h4`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.gray};  
`,k=s.ZP.p`
  display: flex;
  gap: 4px;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 34px;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  line-height: 38px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};
  
  & > span:not(:first-child) {
    font-size: ${e=>e.theme.fontSizes.xs};
    color: ${e=>e.theme.colors.gray};
  }  
`;const S=i.p+"static/media/bubble.3b2e6986df7fcf539bc5e73bed7ca1ce.svg";const F=i.p+"static/media/bottle.a0eacd57b86b0ba2f6c6a392b77da7f8.svg";var C=i(11),W=i(184);const q=()=>{const e=(0,$.v9)(C.Zo),t=(0,$.v9)(b.dy).BMR,i=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{i.current&&y(t,i.current)}),[t]),(0,o.useEffect)((()=>{n.current&&y(e,n.current)}),[e]),(0,W.jsxs)(w,{children:[(0,W.jsx)(j,{children:"Daily goal"}),(0,W.jsxs)(v,{children:[(0,W.jsxs)(Z,{children:[(0,W.jsx)("img",{src:S,width:80,height:80,alt:"Bubbles"}),(0,W.jsxs)(P,{children:[(0,W.jsx)(z,{children:"Calories"}),(0,W.jsx)(k,{ref:i})]})]}),(0,W.jsxs)(Z,{children:[(0,W.jsx)("img",{width:80,height:80,src:F,alt:"Bottle"}),(0,W.jsxs)(P,{children:[(0,W.jsx)(z,{children:"Water"}),(0,W.jsxs)(k,{children:[(0,W.jsx)("span",{ref:n}),(0,W.jsx)("span",{children:"ml"})]})]})]})]})]})},D=s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`,E=s.ZP.h3`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};
`,M=s.ZP.div`
  padding: 16px 12px;
  background-color: ${e=>e.theme.colors.black2};
  border-radius: ${e=>e.theme.radii.normal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  flex-grow: 1;
`,B=s.ZP.div`
  display: flex;
  gap: 20px;
`,A=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 6px;
  width: 80px;
  height: 192px;
  padding: 8px;
  box-sizing: border-box;
  background-color: ${e=>e.theme.colors.black};
  border: ${e=>e.theme.borders.normal}
    ${e=>e.theme.colors.gray1};
  border-radius: ${e=>e.theme.radii.normal};
`,L=s.ZP.span`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  line-height: 22px;
  letter-spacing: 0em;
  color: ${e=>e.$warning?e.theme.colors.error:e.theme.colors.violet};
`,R=s.ZP.span`
  width: 100%;
  height: 0%;
  border-radius: ${e=>e.theme.radii.normal};
  background-color: ${e=>e.$warning?e.theme.colors.error:e.theme.colors.violet};
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
`,T=s.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,I=s.ZP.h4`
  margin-bottom: 12px;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.s};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 22px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};
`,N=s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
`,_=s.ZP.p`
  display: flex;
  gap: 8px;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};

  line-height: 34px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.gray};

  & > span {
    font-size: 28px;
    color: ${e=>e.theme.colors.white};
  }
`,G=s.ZP.p`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.$warning?e.theme.colors.error:e.theme.colors.violet};

  & > span {
    color: ${e=>e.theme.colors.white};
  }
`,H=s.ZP.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border: ${e=>e.theme.borders.none};
  border-radius: ${e=>e.theme.radii.normal};
  background-color: ${e=>e.theme.colors.greenLite};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.black2};
  cursor: pointer;
`;var U=i(4164),O=i(5705),Y=i(7824),J=i(8007);const Q=J.Ry({water:J.Rx().required("Required").typeError("Must be a number").positive("Must be a positive number").max(2e3,"The maximum allowable value is 2000").integer("Must be an integer")}),V=s.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,K=s.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  min-height: 266px;
  padding: 16px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.black2};
  border-radius: ${e=>e.theme.radii.normal};
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 338px;
    min-height: 280px;
  }

  &.active {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  &:not(.active) {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
`,X=s.ZP.h1`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 24px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 36px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};
  color: ${e=>e.theme.colors.white};

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xl};
  }
`,ee=(0,s.ZP)(O.l0)`
  width: 100%;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 212px;
  }
`,te=s.ZP.label`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};
`,ie=(0,s.ZP)(O.gN)`
  margin-top: 12px;
  margin-bottom: 5px;
  padding: 8px 10px;
  width: 100%;
  border: ${e=>e.$error?`${e.theme.borders.normal} ${e.theme.colors.error}`:""===e.value?`${e.theme.borders.normal} ${e.theme.colors.greenLite}`:`${e.theme.borders.normal} ${e.theme.colors.correct}`};
  border-radius: ${e=>e.theme.radii.normal};
  background-color: ${e=>e.theme.colors.black2};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};

  &::placeholder {
    color: ${e=>e.theme.colors.gray};
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,ne=(0,s.ZP)(O.Bc)`
  padding: 0 5px;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 12px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.error};
`,oe=s.ZP.button`
  margin-top: 16px;
  padding: 8px 10px;
  width: 100%;
  background-color: ${e=>e.theme.colors.greenLite};
  color: ${e=>e.theme.colors.black2};
  border: ${e=>e.theme.borders.normal} transparent;
  border-radius: ${e=>e.theme.radii.normal};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;
`,re=s.ZP.button`
  margin-top: 8px;
  padding: 8px 10px;
  width: 100%;
  background-color: transparent;
  border: ${e=>e.theme.borders.normal} transparent;
  border-radius: ${e=>e.theme.radii.normal};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.gray};
  cursor: pointer;

  &:hover {
    border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.greenLite};
  }
`,se=document.querySelector("#modal-root"),ae=e=>{let{onClose:t}=e;const[i,n]=(0,o.useState)(!1),[r,s]=(0,o.useState)(!0),a=(0,$.I0)(),l=(0,o.useCallback)((()=>{n(!1),setTimeout((()=>{s(!1),t()}),300)}),[t]),h=(0,o.useCallback)((e=>{e.currentTarget===e.target&&l()}),[l]),c=(0,o.useCallback)((e=>{"Escape"===e.code&&l()}),[l]);return(0,o.useEffect)((()=>(document.body.style.overflowY="hidden",window.addEventListener("keydown",c),()=>{document.body.style.overflowY="auto",window.removeEventListener("keydown",c)})),[c]),(0,o.useEffect)((()=>{n(!0)}),[]),r?(0,U.createPortal)((0,W.jsx)(V,{onClick:h,children:(0,W.jsxs)(K,{className:i?"active":"",children:[(0,W.jsx)(X,{children:"Add water intake"}),(0,W.jsx)(O.J9,{initialValues:{water:""},onSubmit:(e,t)=>{let{resetForm:i}=t;a((0,Y.ql)({volume:Number(e.water)})),i(),l()},validationSchema:Q,children:e=>{let{errors:t,touched:i,values:n}=e;return(0,W.jsxs)(ee,{autoComplete:"off",children:[(0,W.jsx)(te,{htmlFor:"water",children:"How much water"}),(0,W.jsx)(ie,{$error:t.water&&i.water,value:n.water,name:"water",type:"number",placeholder:"Enter milliliters"}),(0,W.jsx)(ne,{name:"water",component:"div"}),(0,W.jsx)(oe,{type:"submit",children:"Confirm"}),(0,W.jsx)(re,{type:"button",onClick:l,children:"Cancel"})]})}})]})}),se):null};var le=i(8461),he=i(4814);const ce=()=>{const e=(0,$.I0)(),[t,i]=(0,o.useState)(!1),n=(0,o.useRef)(null),r=(0,o.useRef)(null),s=()=>i(!t),a=(0,$.v9)(C._6),l=(0,$.v9)(C.NZ),h=(0,$.v9)(C.M9),c=(0,$.v9)(C.QM),m=(0,$.v9)(C.sl),d=(0,$.v9)(C.OE);return(0,o.useEffect)((()=>{n.current&&setTimeout((()=>{n.current.style.height=h}),0)}),[l,h]),(0,o.useEffect)((()=>{r.current&&y(l,r.current)}),[l]),(0,o.useEffect)((()=>{d&&!a.water&&((0,le.Z)("warn","Maximum water consumption. If you continue to consume, you will not reach your goal"),e((0,he.sc)({type:"water",value:!0})))}),[e,d,a.water]),(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(D,{children:[(0,W.jsx)(E,{children:"Water"}),(0,W.jsx)(M,{children:(0,W.jsxs)(B,{children:[(0,W.jsxs)(A,{children:[(0,W.jsx)(L,{$warning:d,children:h}),(0,W.jsx)(R,{ref:n,$warning:d})]}),(0,W.jsxs)(T,{children:[(0,W.jsx)(I,{children:"Water consumption"}),(0,W.jsxs)(N,{children:[(0,W.jsxs)(_,{children:[(0,W.jsx)("span",{ref:r,children:l}),"ml"]}),(0,W.jsxs)(G,{$warning:d,children:[(0,W.jsx)("span",{children:d?"excess:":"left:"})," ",d?m:c," ml"]})]}),(0,W.jsx)(H,{type:"button",onClick:s,children:"+ Add water intake"})]})]})}),t&&(0,W.jsx)(ae,{onClose:s})]})})},me=s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`,de=s.ZP.h2`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};
`,pe=s.ZP.div`
  padding: 16px 12px;
  background-color: ${e=>e.theme.colors.black2};
  border-radius: ${e=>e.theme.radii.normal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  flex-grow: 1;

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`,xe=s.ZP.div`
  width: 168px;
  height: 168px;
`,fe=s.ZP.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  gap: 12px;
`;var ge=i(5967),ue=i(3623);ge.kL.register(ge.qi,ge.u,ge.De);const $e=e=>{let{nameNutrient:t,nutrient:i,colorDoughnutChart:n}=e;const r=(0,$.I0)(),s=(0,$.v9)(C._6),{consumedAmount:a,excessAmount:l,remainingAmount:h,isGoalExceeded:c}=i,m={labels:[""+(c?"Excess:":"Consumed:"),"Left:"],datasets:[{data:[a,h>=0?h:0],backgroundColor:[`${c?"#E74A3B":n}`,"#292928"],borderColor:["rgba(69, 255, 188, 0)"],borderRadius:""+(h>0?12:0),borderWidth:0,cutout:"80%"}]},d={plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(e){const t=e.raw;return`${c?l:t}`}}}}},p={id:"textCenter",beforeDatasetsDraw(e){const{ctx:t,data:i}=e,n=e.getDatasetMeta(0).data[0].x,o=e.getDatasetMeta(0).data[0].y;t.save(),t.font="500 32px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle=""+(c?"#E74A3B":"#FFFFFF"),t.fillText(i.datasets[0].data[0],n,o-5),t.font="400 14px sans-serif",t.fillStyle="#B6B6B6",t.fillText("calories",n,o+20)}},x={id:"backgroundCircle",beforeDatasetsDraw(e){const{ctx:t}=e;t.save();const i=e.getDatasetMeta(0).data[0].x,n=e.getDatasetMeta(0).data[0].y,o=e.getDatasetMeta(0).data[0].innerRadius,r=e.getDatasetMeta(0).data[0].outerRadius,s=r-o,a=Math.PI/180;t.beginPath(),t.lineWidth=s,t.strokeStyle="rgba(41, 41, 40, 1)",t.arc(i,n,r-s/2,0,360*a,!1),t.stroke()}},f=t.toLowerCase();return(0,o.useEffect)((()=>{c&&!s[f]&&((0,le.Z)("warn",`Maximum ${f} consumption. If you continue to consume, you will not reach your goal`),r((0,he.sc)({type:f,value:!0})))}),[r,c,f,s]),(0,W.jsx)(ue.$I,{data:m,options:d,plugins:[p,x]})};ge.kL.register(ge.qi,ge.u,ge.De);const be=e=>{let{nameNutrient:t,nutrient:i,colorDoughnutChart:n}=e;const r=(0,$.I0)(),s=(0,$.v9)(C._6),[a,l]=(0,o.useState)(0),{consumedAmount:h,remainingAmount:c,consumptionPercentage:m,isGoalExceeded:d}=i,p={datasets:[{data:[h,c>=0?c:0],backgroundColor:[`${d?"#E74A3B":n}`,"#292928"],borderRadius:""+(c>0?12:0),borderWidth:0,cutout:"80%"}]},x={id:"textCenter",beforeDatasetsDraw(e){const{ctx:t}=e,i=e.getDatasetMeta(0).data[0].x,n=e.getDatasetMeta(0).data[0].y;t.save(),t.font="400 11px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#B6B6B6",t.fillText(m+"%",i,n)}},f={id:"backgroundCircle",beforeDatasetsDraw(e){const{ctx:t}=e;t.save();const i=e.getDatasetMeta(0).data[0].x,n=e.getDatasetMeta(0).data[0].y,o=e.getDatasetMeta(0).data[0].innerRadius,r=e.getDatasetMeta(0).data[0].outerRadius,s=r-o,a=Math.PI/180;t.beginPath(),t.lineWidth=s,t.strokeStyle="rgba(41, 41, 40, 1)",t.arc(i,n,r-s/2,0,360*a,!1),t.stroke()}};(0,o.useEffect)((()=>{l((e=>e+1))}),[i]);const g=t.toLowerCase();return(0,o.useEffect)((()=>{d&&!s[g]&&((0,le.Z)("warn",`Maximum ${g} consumption. If you continue to consume, you will not reach your goal`),r((0,he.sc)({type:g,value:!0})))}),[r,g,d,s]),(0,W.jsx)(ue.$I,{data:p,options:{plugins:{tooltip:{enabled:!1}}},plugins:[x,f]},a)},ye=s.ZP.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,we=s.ZP.div`
  width: 48px;
  height: 48px;
`,je=s.ZP.div`
  display: flex;
  flex-direction: column;
  flex-basis: 160px;
  gap: 2px;
`,ve=s.ZP.h4`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};
`,Ze=s.ZP.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`,Pe=s.ZP.p`
  display: flex;
  column-gap: 4px;
  width: calc((100% - 12px) / 2);
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};
`,ze=s.ZP.span`
  color: ${e=>e.$isGoalExceeded?"#E74A3B":e.theme.colors.gray};
`,ke=e=>{let{title:t,nutrient:i,colorDoughnutChart:n}=e;const{consumptionGoal:o,remainingAmount:r,excessAmount:s,isGoalExceeded:a}=i;return(0,W.jsxs)(ye,{children:[(0,W.jsx)(we,{children:(0,W.jsx)(be,{nameNutrient:t,nutrient:i,colorDoughnutChart:n})}),(0,W.jsxs)(je,{children:[(0,W.jsx)(ve,{children:t}),(0,W.jsxs)(Ze,{children:[(0,W.jsxs)(Pe,{children:["Goal: ",(0,W.jsx)(ze,{children:o})]}),(0,W.jsxs)(Pe,{children:[a?"excess:":"left:"," ",(0,W.jsx)(ze,{$isGoalExceeded:a,children:a?s:r})]})]})]})]})},Se=()=>{const{Calories:e,Carbohydrates:t,Fat:i,Protein:n}=(0,$.v9)(C.$c);return(0,W.jsxs)(me,{children:[(0,W.jsx)(de,{children:"Food"}),(0,W.jsxs)(pe,{children:[(0,W.jsx)(xe,{children:(0,W.jsx)($e,{nameNutrient:"Calories",nutrient:e,colorDoughnutChart:"#45FFBC"})}),(0,W.jsxs)(fe,{children:[(0,W.jsx)(ke,{title:"Carbohydrates",nutrient:t,colorDoughnutChart:"#FFC4F7"}),(0,W.jsx)(ke,{title:"Protein",nutrient:n,colorDoughnutChart:"#FFF3B7"}),(0,W.jsx)(ke,{title:"Fat",nutrient:i,colorDoughnutChart:"#B6B6B6"})]})]})]})},Fe=()=>(0,W.jsxs)(x,{children:[(0,W.jsx)(f,{children:"Daily consumption summary"}),(0,W.jsxs)(g,{children:[(0,W.jsx)(u,{children:(0,W.jsx)(q,{})}),(0,W.jsx)(u,{children:(0,W.jsx)(ce,{})}),(0,W.jsx)(u,{children:(0,W.jsx)(Se,{})})]})]}),Ce=s.ZP.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`,We=s.ZP.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,qe=s.ZP.h2`
  color: ${e=>e.theme.colors.white};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 24px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,De=(0,s.ZP)(r.rU)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover > span {
    color: ${e=>e.theme.colors.greenLite};
    transition: color 0.5 ease-in-out;
  }
`,Ee=s.ZP.span`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0;
  color: ${e=>e.theme.colors.gray};

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,Me=s.ZP.img`
  width: 16px;
  height: 16px;
`,Be=s.ZP.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Ae=s.ZP.div`
  @media screen and (${e=>e.theme.mq.tablet}) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,Le=s.ZP.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;
  color: ${e=>e.theme.colors.white};
  font-family: ${e=>e.theme.fontFamily.poppins};

  @media screen and (${e=>e.theme.mq.tablet}) {
    margin-bottom: 0px;
  }
`,Re=s.ZP.h3`
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 24px;
`,Te=s.ZP.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: ${e=>e.theme.colors.white};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 20px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-direction: row;
    column-gap: 20px;
  }
`,Ie=s.ZP.p`
  min-width: 190px;
`,Ne=s.ZP.p`
  width: 110px;
`,_e=s.ZP.p`
  width: 60px;
`,Ge=s.ZP.span`
  color: ${e=>e.theme.colors.gray};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,He=s.ZP.img`
  width: 36px;
  height: 36px;
`,Ue=s.ZP.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${e=>e.theme.colors.greenLite};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;var Oe=i(1918);const Ye=e=>{let{imageSrc:t,info:i}=e;const[n,r]=(0,o.useState)(!1),s=()=>r(!n),{mealType:a,carbonohidrates:l,protein:h,fat:c}=i;return(0,W.jsxs)(Ae,{children:[(0,W.jsxs)(Le,{children:[(0,W.jsx)(He,{src:t,alt:`image of ${a}`}),(0,W.jsx)(Re,{children:a})]}),0!==l||0!==h||0!==c?(0,W.jsxs)(Te,{children:[(0,W.jsxs)(Ie,{children:["Carbohydrates: ",(0,W.jsx)(Ge,{children:l})]}),(0,W.jsxs)(Ne,{children:["Protein: ",(0,W.jsx)(Ge,{children:h})]}),(0,W.jsxs)(_e,{children:["Fat: ",(0,W.jsx)(Ge,{children:c})]})]}):(0,W.jsx)(Ue,{onClick:s,children:"+ Record your meal"}),n&&(0,W.jsx)(Oe.Z,{onClose:s,image:t,mealType:a})]})};var Je=i(1051);const Qe=()=>{const e=(0,$.v9)(C.Hs);return(0,W.jsxs)(Ce,{children:[(0,W.jsxs)(We,{children:[(0,W.jsx)(qe,{children:"Diary"}),(0,W.jsxs)(De,{to:"/diary",children:[(0,W.jsx)(Ee,{children:"See more"}),(0,W.jsx)(Me,{src:p.Z,alt:"Arrow right"})]})]}),(0,W.jsx)(Be,{children:e.map((e=>(0,W.jsx)("li",{children:(0,W.jsx)(Ye,{info:e,imageSrc:Je.Z[e.mealType]},e.mealType)},e.mealType)))})]})},Ve=s.ZP.div`
  @media screen and (${e=>e.theme.mq.desktop}) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`,Ke=s.ZP.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Xe=s.ZP.h2`
  color: ${e=>e.theme.colors.white};
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 24px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,et=(0,s.ZP)(r.rU)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover > span {
    color: ${e=>e.theme.colors.greenLite};
    transition: color 0.5 ease-in-out;
  }
`,tt=s.ZP.span`
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0;
  color: ${e=>e.theme.colors.gray};

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,it=s.ZP.img`
  width: 16px;
  height: 16px;
`;var nt=i(8710);const ot=()=>(0,W.jsxs)(Ve,{children:[(0,W.jsxs)(Ke,{children:[(0,W.jsx)(Xe,{children:"Recommended food"}),(0,W.jsxs)(et,{to:"/recommended-food",children:[(0,W.jsx)(tt,{children:"See more"}),(0,W.jsx)(it,{src:p.Z,alt:"Arrow right"})]})]}),(0,W.jsx)(nt.Z,{itemLimit:4})]}),rt=()=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(a,{children:[(0,W.jsx)(l,{children:"Today"}),(0,W.jsxs)(h,{to:"/dashboard",children:[(0,W.jsx)(c,{children:"On the way to the goal"}),(0,W.jsx)(m,{src:p.Z,alt:"Arrow right"})]})]}),(0,W.jsx)(Fe,{}),(0,W.jsxs)(d,{children:[(0,W.jsx)(Qe,{}),(0,W.jsx)(ot,{})]})]}),st=()=>(0,W.jsx)(n.Z,{children:(0,W.jsx)(rt,{})})}}]);
//# sourceMappingURL=53.1537b3b6.chunk.js.map