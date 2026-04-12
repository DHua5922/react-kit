import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{r as s}from"./index-Bc2G9s8g.js";import{r as l}from"./index-Dy83Z4lh.js";import{u as i}from"./LiveCodeBlock-MP6rWtjX.js";const f=i.div`
  position: fixed;
  inset: 0;
  z-index: 999;
`,c=i.div`
  position: absolute;
  left: ${({$left:e})=>e||"auto"};
  top: ${({$top:e})=>e||"auto"};
`;function a({children:e,left:d,top:p,show:o=!1,onHide:n}){return s.useEffect(()=>{if(!o)return;const t=u=>{u.key==="Escape"&&n()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[n,o]),o?l.createPortal(r.jsx(f,{onClick:n,children:r.jsx(c,{$left:d,$top:p,onClick:t=>t.stopPropagation(),children:e})}),document.body):null}try{a.displayName="Popup",a.__docgenInfo={description:"",displayName:"Popup",props:{left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"string | undefined"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"string | undefined"}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean | undefined"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!0,type:{name:"() => void"}}}}}catch{}export{a as P};
