import{j as o}from"./jsx-runtime-DiklIkkE.js";import{r as t}from"./index-DRjF_FHU.js";import{L as S}from"./index-Do02Yr6G.js";const b={activeKeys:[],onSelect:()=>{}},f=t.createContext(b);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const u=t.forwardRef(function({children:n,activeKeys:c,onSelect:r,...a},d){const i={activeKeys:c,onSelect:r};return o.jsx(f.Provider,{value:i,children:o.jsx("div",{ref:d,...a,children:n})})});try{u.displayName="Accordion",u.__docgenInfo={description:"",displayName:"Accordion",props:{activeKeys:{defaultValue:null,description:"",name:"activeKeys",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(key: string) => void"}}}}}catch{}const j={eventKey:""},A=t.createContext(j);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const m=t.forwardRef(function({children:n,eventKey:c,...r},a){return o.jsx(A.Provider,{value:{eventKey:c},children:o.jsx("div",{ref:a,...r,children:n})})});try{m.displayName="AccordionItem",m.__docgenInfo={description:"",displayName:"AccordionItem",props:{eventKey:{defaultValue:null,description:"",name:"eventKey",required:!0,type:{name:"string"}}}}}catch{}const k="_container_1v5xv_1",$="_expanded_1v5xv_6",y={container:k,expanded:$,"container--inner":"_container--inner_1v5xv_10"},v=t.forwardRef(function({children:n,className:c="",...r},a){const{activeKeys:d}=t.useContext(f),{eventKey:i}=t.useContext(A),s=d.includes(i),p=`${y.container} ${s?y.expanded:""}`;return o.jsx("div",{ref:a,className:`${p} ${c}`,"aria-hidden":!s,...r,children:o.jsx("div",{className:y["container--inner"],children:n})})});try{v.displayName="AccordionBody",v.__docgenInfo={description:"",displayName:"AccordionBody",props:{}}}catch{}const B="_button_1be34_1",E="_active_1be34_11",C={button:B,active:E},x=t.forwardRef(function({children:n,className:c="",...r},a){const{activeKeys:d,onSelect:i}=t.useContext(f),{eventKey:s}=t.useContext(A),p=d.includes(s),N=`${C.button} ${p?C.active:""}`,h=()=>i(s);return o.jsx("button",{ref:a,type:"button",className:`${N} ${c}`,"aria-expanded":p,onClick:h,...r,children:n})});try{x.displayName="AccordionHeader",x.__docgenInfo={description:"",displayName:"AccordionHeader",props:{}}}catch{}const _=Object.assign(u,{Item:m,Body:v,Header:x});try{_.displayName="Accordion",_.__docgenInfo={description:"",displayName:"Accordion",props:{activeKeys:{defaultValue:null,description:"",name:"activeKeys",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(key: string) => void"}}}}}catch{}const w=`function Example() {
  const eventKey = "0";
  const [activeKeys, setActiveKeys] = React.useState<string[]>([]);

  const onSelect = (key: string) => {
    setActiveKeys((prev) => (prev.includes(key) ? [] : [key]));
  }

  const headerId = "accordion-header-0";
  const panelId = "accordion-panel-0";
  
  return (
    <Accordion
      activeKeys={activeKeys}
      onSelect={onSelect}
    >
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header id={headerId} aria-controls={panelId}>
          Click Me!
        </Accordion.Header>
        
        <Accordion.Body id={panelId} aria-labelledby={headerId}>
          Body
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

render(<Example />)`,V={title:"Components/Accordion",component:_,tags:["!autodocs"],parameters:{layout:"fullscreen"},args:{activeKeys:[],onSelect:()=>{}}},l={tags:["!dev"],render:()=>o.jsx(S,{code:w,noInline:!0,scope:{Accordion:_}})};var g,I,K;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Accordion
  }} />
}`,...(K=(I=l.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};const H=["Example"],L=Object.freeze(Object.defineProperty({__proto__:null,Example:l,__namedExportsOrder:H,default:V},Symbol.toStringTag,{value:"Module"}));export{_ as A,l as E,L as S,m as a};
