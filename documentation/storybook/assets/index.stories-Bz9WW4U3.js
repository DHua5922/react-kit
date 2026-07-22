import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{L as N}from"./index-Do02Yr6G.js";const h={activeKeys:[],onSelect:()=>{}},v=c.createContext(h);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function _({children:e,activeKeys:o,onSelect:n,...r}){const a={activeKeys:o,onSelect:n};return t.jsx(v.Provider,{value:a,children:t.jsx("div",{...r,children:e})})}try{_.displayName="Accordion",_.__docgenInfo={description:"",displayName:"Accordion",props:{activeKeys:{defaultValue:null,description:"",name:"activeKeys",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(key: string) => void"}}}}}catch{}const S={eventKey:""},x=c.createContext(S);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function y({children:e,eventKey:o,...n}){return t.jsx(x.Provider,{value:{eventKey:o},children:t.jsx("div",{...n,children:e})})}try{y.displayName="AccordionItem",y.__docgenInfo={description:"",displayName:"AccordionItem",props:{eventKey:{defaultValue:null,description:"",name:"eventKey",required:!0,type:{name:"string"}}}}}catch{}const b="_container_1v5xv_1",j="_expanded_1v5xv_6",p={container:b,expanded:j,"container--inner":"_container--inner_1v5xv_10"};function u({children:e,className:o="",...n}){const{activeKeys:r}=c.useContext(v),{eventKey:a}=c.useContext(x),i=r.includes(a),d=`${p.container} ${i?p.expanded:""}`;return t.jsx("div",{className:`${d} ${o}`,"aria-hidden":!i,...n,children:t.jsx("div",{className:p["container--inner"],children:e})})}try{u.displayName="AccordionBody",u.__docgenInfo={description:"",displayName:"AccordionBody",props:{}}}catch{}const k="_button_1be34_1",$="_active_1be34_11",f={button:k,active:$};function m({children:e,className:o="",...n}){const{activeKeys:r,onSelect:a}=c.useContext(v),{eventKey:i}=c.useContext(x),d=r.includes(i),I=`${f.button} ${d?f.active:""}`,K=()=>a(i);return t.jsx("button",{type:"button",className:`${I} ${o}`,"aria-expanded":d,onClick:K,...n,children:e})}try{m.displayName="AccordionHeader",m.__docgenInfo={description:"",displayName:"AccordionHeader",props:{}}}catch{}const l=Object.assign(_,{Item:y,Body:u,Header:m});try{l.displayName="Accordion",l.__docgenInfo={description:"",displayName:"Accordion",props:{activeKeys:{defaultValue:null,description:"",name:"activeKeys",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(key: string) => void"}}}}}catch{}const E=`function Example() {
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

render(<Example />)`,B={title:"Components/Accordion",component:l,tags:["!autodocs"],parameters:{layout:"fullscreen"},args:{activeKeys:[],onSelect:()=>{}}},s={tags:["!dev"],render:()=>t.jsx(N,{code:E,noInline:!0,scope:{Accordion:l}})};var C,g,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Accordion
  }} />
}`,...(A=(g=s.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};const V=["Example"],O=Object.freeze(Object.defineProperty({__proto__:null,Example:s,__namedExportsOrder:V,default:B},Symbol.toStringTag,{value:"Module"}));export{l as A,s as E,O as S,y as a};
