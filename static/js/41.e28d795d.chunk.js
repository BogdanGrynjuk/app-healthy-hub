"use strict";(self.webpackChunkapp_healthy_hub=self.webpackChunkapp_healthy_hub||[]).push([[41],{3176:(e,t,o)=>{o.d(t,{Z:()=>i});o(2791);const i=o.p+"static/media/arrow-right-open.4b79b540b4210b099c8be8dfec113119.svg"},1918:(e,t,o)=>{o.d(t,{Z:()=>z});var i=o(2791),r=o(4164),a=o(9434),n=o(5705),d=o(5867);const l=d.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,s=d.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 558px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.black2};
  border-radius: ${e=>e.theme.radii.normal};
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 676px;
    height: 408px;
    padding: 24px;
  }

  &.active {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  &:not(.active) {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
`,c=d.ZP.h1`
  margin-bottom: 24px;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 24px;
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 30px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.xl};
    line-height: 36px;
  }
`,m=d.ZP.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,u=d.ZP.img`
  width: 32px;
  height: 32px;
`,p=d.ZP.h2`
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.m};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 26px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};

  @media screen and (${e=>e.theme.mq.tablet}) {
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: 32px;
  }
`,h=(0,d.ZP)(n.l0)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,b=d.ZP.div`
  max-height: 300px;
  margin-bottom: 16px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    max-height: 200px;
  }
`,g=d.ZP.ul`
  padding: 10px;
  overflow-y: auto;
  height: ${e=>e.$isEditMode?"auto":"225px"};
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    height: ${e=>e.$isEditMode?"auto":"calc(100% - 44px)"};
    gap: 24px;
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: ${e=>e.theme.radii.normal};
    border: 1px solid rgba(227, 255, 168, 0.2);

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    }
  }
`,f=d.ZP.button`
  border: ${e=>e.theme.borders.none};
  background-color: transparent;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.greenLite};
  cursor: pointer;
`,x=d.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${e=>e.theme.mq.tablet}) {
    flex-direction: row-reverse;
  }
`,v=d.ZP.button`
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

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 212px;
  }
`,A=d.ZP.button`
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

  @media screen and (${e=>e.theme.mq.tablet}) {
    width: 212px;
  }
`;var $=o(8007);const y=$.Ry({productList:$.IX().of($.Ry().shape({mealName:$.Z_().required("Name is required").trim("Name cannot include leading and trailing spaces").strict(!0),carbonohidrates:$.Rx().required("Carbohydrates is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",(e=>/^\d+(\.\d{1})?$/.test(e))),protein:$.Rx().required("Protein is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",(e=>/^\d+(\.\d{1})?$/.test(e))),fat:$.Rx().required("Fat is required").typeError("Must be a number").min(0,"Must be a positive number").max(100,"The maximum allowable value is 100").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",(e=>/^\d+(\.\d{1})?$/.test(e))),calories:$.Rx().required("Calories is required").typeError("Must be a number").min(0,"Must a be positive number").max(1e3,"The maximum allowable value is 1000").integer("Must be an integer")}))});var w=o(7824);const k=d.ZP.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(-n + 3) {
    grid-column-start: 1;
    grid-column-end: ${e=>{let{$hasRemoveButton:t}=e;return t?4:3}};
  }

  @media screen and (${e=>e.theme.mq.tablet}) {
    grid-template-columns: ${e=>{let{$hasRemoveButton:t}=e;return t?"40.5% 15.3% 11.5% 7.5% 13% 2.5%":"41% 15.8% 12% 8% 13.5% 0%"}};

    & > div:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 2;
    }

    & > div:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    & > div:nth-child(3) {
      grid-column-start: 3;
      grid-column-end: 4;
    }

    & > div:nth-child(4) {
      grid-column-start: 4;
      grid-column-end: 5;
    }

    & > div:nth-child(5) {
      grid-column-start: 5;
      grid-column-end: ${e=>{let{$hasRemoveButton:t}=e;return t?6:7}};
    }
  }
`,C=d.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,L=d.ZP.label`
  margin-left: 5px;
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 26px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.white};
`,j=(0,d.ZP)(n.gN)`
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

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.gray};
  }
`,P=(0,d.ZP)(n.Bc)`
  padding: 0 5px;
  font-family: ${e=>e.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${e=>e.theme.fontWeights.regular};
  line-height: 12px;
  letter-spacing: 0em;
  color: ${e=>e.theme.colors.error};
`,N=d.ZP.button`
  padding: 0;
  margin: 0;
  border: ${e=>e.theme.borders.none};
  background-color: transparent;
  cursor: pointer;
`,M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==";var E=o(184);const F=e=>{var t,o,i,r,a,n,d,l,s,c,m,u,p,h,b,g,f,x,v,A,$,y,w,F,R,z,S,B,T,I;let{isEditMode:Z,indexForm:q,values:Q,errors:G,touched:D,handleRemove:J}=e;const W=Q.productList.length>1;return(0,E.jsxs)(k,{$hasRemoveButton:W,children:[(0,E.jsxs)(C,{children:[Z&&(0,E.jsx)(L,{htmlFor:`productList.${q}.mealName`,children:"Product or dish name"}),(0,E.jsx)(j,{type:"text",id:`productList.${q}.mealName`,name:`productList.${q}.mealName`,placeholder:"The name of the product or dish",value:null===Q||void 0===Q||null===(t=Q.productList)||void 0===t||null===(o=t[q])||void 0===o?void 0:o.mealName,$error:(null===D||void 0===D||null===(i=D.productList)||void 0===i||null===(r=i[q])||void 0===r?void 0:r.mealName)&&(null===G||void 0===G||null===(a=G.productList)||void 0===a||null===(n=a[q])||void 0===n?void 0:n.mealName)}),(0,E.jsx)(P,{name:`productList.${q}.mealName`,component:"div"})]}),(0,E.jsxs)(C,{children:[Z&&(0,E.jsx)(L,{htmlFor:`productList.${q}.carbonohidrates`,children:"Carb."}),(0,E.jsx)(j,{type:"number",id:`productList.${q}.carbonohidrates`,name:`productList.${q}.carbonohidrates`,placeholder:"Carbohydrates",value:null===Q||void 0===Q||null===(d=Q.productList)||void 0===d||null===(l=d[q])||void 0===l?void 0:l.carbonohidrates,$error:(null===D||void 0===D||null===(s=D.productList)||void 0===s||null===(c=s[q])||void 0===c?void 0:c.carbonohidrates)&&(null===G||void 0===G||null===(m=G.productList)||void 0===m||null===(u=m[q])||void 0===u?void 0:u.carbonohidrates)}),(0,E.jsx)(P,{name:`productList.${q}.carbonohidrates`,component:"div"})]}),(0,E.jsxs)(C,{children:[Z&&(0,E.jsx)(L,{htmlFor:`productList.${q}.protein`,children:"Protein"}),(0,E.jsx)(j,{type:"number",id:`productList.${q}.protein`,name:`productList.${q}.protein`,placeholder:"Protein",value:null===Q||void 0===Q||null===(p=Q.productList)||void 0===p||null===(h=p[q])||void 0===h?void 0:h.protein,$error:(null===D||void 0===D||null===(b=D.productList)||void 0===b||null===(g=b[q])||void 0===g?void 0:g.protein)&&(null===G||void 0===G||null===(f=G.productList)||void 0===f||null===(x=f[q])||void 0===x?void 0:x.protein)}),(0,E.jsx)(P,{name:`productList.${q}.protein`,component:"div"})]}),(0,E.jsxs)(C,{children:[Z&&(0,E.jsx)(L,{htmlFor:`productList.${q}.fat`,children:"Fat"}),(0,E.jsx)(j,{type:"number",id:`productList.${q}.fat`,name:`productList.${q}.fat`,placeholder:"Fat",value:null===Q||void 0===Q||null===(v=Q.productList)||void 0===v||null===(A=v[q])||void 0===A?void 0:A.fat,$error:(null===D||void 0===D||null===($=D.productList)||void 0===$||null===(y=$[q])||void 0===y?void 0:y.fat)&&(null===G||void 0===G||null===(w=G.productList)||void 0===w||null===(F=w[q])||void 0===F?void 0:F.fat)}),(0,E.jsx)(P,{name:`productList.${q}.fat`,component:"div"})]}),(0,E.jsxs)(C,{children:[Z&&(0,E.jsx)(L,{htmlFor:`productList.${q}.calories`,children:"Calories"}),(0,E.jsx)(j,{type:"number",id:`productList.${q}.calories`,name:`productList.${q}.calories`,placeholder:"Calories",value:null===Q||void 0===Q||null===(R=Q.productList)||void 0===R||null===(z=R[q])||void 0===z?void 0:z.calories,$error:(null===D||void 0===D||null===(S=D.productList)||void 0===S||null===(B=S[q])||void 0===B?void 0:B.calories)&&(null===G||void 0===G||null===(T=G.productList)||void 0===T||null===(I=T[q])||void 0===I?void 0:I.calories)}),(0,E.jsx)(P,{name:`productList.${q}.calories`,component:"div"})]}),W&&(0,E.jsx)(N,{type:"button",onClick:J,children:(0,E.jsx)("img",{srcSet:`${M} 1x, data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgB7VdBclJBEH0NP6UrJUurjMIJjDfAG+jKZCU5gfEG3CS6kbiwNCdIjpAbQMTSZb4uTKifTzsT8vkNQ/2ZPzNWYSpvAQN097zf/aanAe5wy0HwxDce9AiNpy62apPRY3r9AR7wIjgjRwd1fJR9z4dkA2uOtS/x2sPIYJ3MxMaqTC8Q9BF/bCwfpv/vkCyWmPvCtI+oMGNbS7yMMR9ysd6iHe8THxLbUmJKi9WQD1qIhCF/EbE4rbKtJEjC+R4ePEQ0XM4JskjCKlQSlM4TXG4iEhKgXay17qpsLSUuM5hgw8jgdz7cH/Onc/VutCalsWOtszP+uI8AWEpcPp0qd3v5d5XhN+q1pdTe+8Gf5819yANt2535Nd6afg2pZ/8S26BIex6cqdAggjQ4KtelbkIhr1ISe6zC2t8klgxOz8q1qUFfSD0HnuJ/AyWduQanYY1anuJ4GoQ4XEqPIQSb0jnaVVcHlQQz5HOCHJGgrEYTzVGVrUWD99MyqNnz+EYC+n2C37+kn5DHielXanDRrybBDr0SJSaDoBqTXjCaL3NcPO/QXir9muDit3dm5PJhpd8qWGc8fdcWAa9wsWkLaIMetRJMzmefON2i3cohxNpmYo9cG8jaxdo2amlYCbJoNVfIthEIRi5aTHWT1nAgSKdlQAomSNcTUBEbpzZ7hxJPj8pP3B/zoAtPaF89momvTmw+Tn+E9PCJm/muCKyfnhw0pKHu8ZbaaFvG0NJ5Qjsdm28CByTgvRx0LEauLl1vxi7uRhY0uVy1ITjAaVh4RLsj3dfURu8RDPqqyXVUTCdr1MRPNc5nSJ7NRibXiZpS3a4y/DkK7aN3uHX4CwKp7z58HKkzAAAAAElFTkSuQmCC 2x`,width:20,height:20,src:M,alt:"Trash"})})]})},R=document.querySelector("#modal-root"),z=e=>{var t,o,d,$,k;let{onClose:C,image:L,mealType:j,mealDetails:P}=e;const[N,M]=(0,i.useState)(!1),[z,S]=(0,i.useState)(!0),[B,T]=(0,i.useState)(1),I=!!P,Z=(0,i.useRef)(null),q=(0,a.I0)(),Q={productList:[{mealType:j,mealName:null!==(t=null===P||void 0===P?void 0:P.mealName)&&void 0!==t?t:"",carbonohidrates:null!==(o=null===P||void 0===P?void 0:P.carbonohidrates)&&void 0!==o?o:"",protein:null!==(d=null===P||void 0===P?void 0:P.protein)&&void 0!==d?d:"",fat:null!==($=null===P||void 0===P?void 0:P.fat)&&void 0!==$?$:"",calories:null!==(k=null===P||void 0===P?void 0:P.calories)&&void 0!==k?k:""}]},G=(0,i.useCallback)((()=>{M(!1),setTimeout((()=>{S(!1),C()}),300)}),[C]),D=(0,i.useCallback)((e=>{"Escape"===e.code&&G()}),[G]),J=(0,i.useCallback)((e=>{e.currentTarget===e.target&&G()}),[G]);return(0,i.useEffect)((()=>(document.body.style.overflowY="hidden",window.addEventListener("keydown",D),()=>{document.body.style.overflowY="auto",window.removeEventListener("keydown",D)})),[D]),(0,i.useEffect)((()=>{M(!0)}),[]),(0,i.useEffect)((()=>{Z.current&&Z.current.scrollIntoView({behavior:"smooth"})}),[B]),z?(0,r.createPortal)((0,E.jsx)(l,{onClick:J,children:(0,E.jsxs)(s,{className:N?"active":"",children:[(0,E.jsx)(c,{children:P?"Edit meal":"Record your meal"}),!P&&(0,E.jsxs)(m,{children:[(0,E.jsx)(u,{src:L,alt:`image of ${j}`}),(0,E.jsx)(p,{children:j})]}),(0,E.jsx)(n.J9,{initialValues:Q,onSubmit:(e,t)=>{let{resetForm:o}=t;e.productList.forEach((e=>{let{mealType:t,mealName:o,carbonohidrates:i,protein:r,fat:a,calories:n}=e;const d={mealType:t,mealName:o,carbonohidrates:Number(i.toFixed(1)),protein:Number(r.toFixed(1)),fat:Number(a.toFixed(1)),calories:n};q(I?(0,w.IE)({id:P._id,updatedFoodIntake:d}):(0,w.P2)(d))})),o(),G()},validationSchema:y,children:e=>{let{errors:t,touched:o,values:i}=e;return(0,E.jsxs)(h,{autoComplete:"off",children:[(0,E.jsx)(n.F2,{name:"productList",render:e=>{let{insert:r,remove:a}=e;return(0,E.jsxs)(b,{children:[(0,E.jsx)(g,{$isEditMode:I,children:i.productList.map(((e,r)=>(0,E.jsx)("li",{ref:r===i.productList.length-1?Z:null,children:(0,E.jsx)(F,{isEditMode:I,indexForm:r,values:i,errors:t,touched:o,handleRemove:()=>a(r)})},r)))}),!P&&(0,E.jsx)(f,{type:"button",onClick:()=>{r(i.productList.length+1,{mealType:j,mealName:"",carbonohidrates:"",protein:"",fat:"",calories:""}),T(B+1)},children:"+ Add more"})]})}}),(0,E.jsxs)(x,{children:[(0,E.jsx)(v,{type:"submit",children:"Confirm"}),(0,E.jsx)(A,{type:"button",onClick:G,children:"Cancel"})]})]})}})]})}),R):null}},7002:(e,t,o)=>{o.d(t,{Z:()=>d});o(2791);var i=o(5867);const r=i.ZP.main`
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
`,a=i.ZP.div`
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
`;var n=o(184);const d=e=>{let{children:t}=e;return(0,n.jsx)(r,{children:(0,n.jsx)(a,{children:t})})}},1051:(e,t,o)=>{o.d(t,{Z:()=>a});o(2791);const i=o.p+"static/media/breakfast-image.757cefa61c13942dffbdf20f2c19304b.svg";const r=o.p+"static/media/dinner-image.0b21c33b6a6f661fb4cc5d906b4b820f.svg";const a={Breakfast:i,Lunch:o.p+"static/media/lunch-image.ce1d1c9da68a61e93c49b276ff94bd3d.svg",Dinner:r,Snack:o.p+"static/media/snack-image.a52f73890dfdeaafbe54a211e6abbca9.svg"}},11:(e,t,o)=>{o.d(t,{NZ:()=>c,Zo:()=>s,OE:()=>h,K_:()=>f,$c:()=>g,_6:()=>v,Hs:()=>b,F5:()=>x,M9:()=>m,sl:()=>p,QM:()=>u});var i=o(6916);const r={"Lose fat":{protein:.25,fat:.2},"Gain Muscle":{protein:.3,fat:.2},Maintain:{protein:.2,fat:.25}},a=(e,t)=>Math.floor(100*t/e),n=(e,t)=>Math.round(10*(e-t))/10,d=(e,t)=>Math.round(10*(0-n(e,t)))/10,l=(e,t)=>({consumptionGoal:e,consumedAmount:t,remainingAmount:n(e,t),consumptionPercentage:a(e,t),excessAmount:d(e,t),isGoalExceeded:e<t}),s=(0,i.P1)([e=>e.auth.user.weight],(e=>(e=>{const t=30*e;return 10*Math.round(t/10)})(e))),c=e=>{var t;return(null===(t=e.foodIntake)||void 0===t?void 0:t.waterIntake)||0},m=(0,i.P1)([s,c],((e,t)=>a(e,t)+"%")),u=(0,i.P1)([s,c],((e,t)=>n(e,t))),p=(0,i.P1)([s,c],((e,t)=>d(e,t))),h=(0,i.P1)([s,c],((e,t)=>t>e)),b=(0,i.P1)([e=>e.foodIntake.items],(e=>{const t=["Breakfast","Lunch","Dinner","Snack"],o=t.map((e=>({mealType:e,carbonohidrates:0,protein:0,fat:0})));return e.forEach((e=>{const{mealType:i,carbonohidrates:r,protein:a,fat:n}=e,d=t.indexOf(i);-1!==d&&(o[d].carbonohidrates+=r,o[d].protein+=a,o[d].fat+=n)})),o})),g=(0,i.P1)([e=>e.foodIntake.items,e=>e.auth.user.BMR,e=>e.auth.user.goal],((e,t,o)=>{const{caloriesFact:i,carbsFact:a,proteinFact:n,fatFact:d}=e.reduce(((e,t)=>{let{carbonohidrates:o,protein:i,fat:r,calories:a}=t;return e.caloriesFact+=a,e.carbsFact+=o,e.proteinFact+=i,e.fatFact+=r,e}),{caloriesFact:0,carbsFact:0,proteinFact:0,fatFact:0}),s=t,{carbsGoal:c,proteinGoal:m,fatGoal:u}=((e,t)=>{const{protein:o,fat:i}=r[t],a=1-(o+i),n=Math.round(a*e/4);return{proteinGoal:Math.round(o*e/4),fatGoal:Math.round(i*e/9),carbsGoal:n}})(t,o);return{Calories:l(s,i),Carbohydrates:l(c,a),Protein:l(m,n),Fat:l(u,d)}})),f=(0,i.P1)((e=>e.foodIntake.items),(e=>{const t={Breakfast:[],Lunch:[],Dinner:[],Snack:[]};return e.forEach((e=>{const o=e.mealType;t[o]&&t[o].push(e)})),Object.keys(t).map((e=>({type:e,data:t[e]})))})),x=e=>(0,i.P1)((e=>e.foodIntake.items),(t=>t.filter((t=>t.mealType===e)).reduce(((e,t)=>(e.carbonohidrates+=t.carbonohidrates,e.protein+=t.protein,e.fat+=t.fat,e)),{carbonohidrates:0,protein:0,fat:0}))),v=e=>e.foodIntake.notifications}}]);
//# sourceMappingURL=41.e28d795d.chunk.js.map