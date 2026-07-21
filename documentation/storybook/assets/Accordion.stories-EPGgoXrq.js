import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{L as I}from"./index-QgfrSyUJ.js";const S={activeKeys:[],onSelect:()=>{}},v=c.createContext(S);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function _({children:e,activeKeys:o,onSelect:n,...r}){const a={activeKeys:o,onSelect:n};return t.jsx(v.Provider,{value:a,children:t.jsx("div",{...r,children:e})})}try{_.displayName="Accordion",_.__docgenInfo={description:"",displayName:"Accordion",props:{activeKeys:{defaultValue:null,description:"",name:"activeKeys",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(key: string) => void"}}}}}catch{}const h={eventKey:""},x=c.createContext(h);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function y({children:e,eventKey:o,...n}){return t.jsx(x.Provider,{value:{eventKey:o},children:t.jsx("div",{...n,children:e})})}try{y.displayName="AccordionItem",y.__docgenInfo={description:"",displayName:"AccordionItem",props:{eventKey:{defaultValue:null,description:"",name:"eventKey",required:!0,type:{name:"string"}}}}}catch{}const j="_container_1v5xv_1",b="_expanded_1v5xv_6",p={container:j,expanded:b,"container--inner":"_container--inner_1v5xv_10"};function u({children:e,className:o="",...n}){const{activeKeys:r}=c.useContext(v),{eventKey:a}=c.useContext(x),s=r.includes(a),d=`${p.container} ${s?p.expanded:""}`;return t.jsx("div",{className:`${d} ${o}`,"aria-hidden":!s,...n,children:t.jsx("div",{className:p["container--inner"],children:e})})}try{u.displayName="AccordionBody",u.__docgenInfo={description:"",displayName:"AccordionBody",props:{}}}catch{}const k="_button_1be34_1",$="_active_1be34_11",f={button:k,active:$};function m({children:e,className:o="",...n}){const{activeKeys:r,onSelect:a}=c.useContext(v),{eventKey:s}=c.useContext(x),d=r.includes(s),K=`${f.button} ${d?f.active:""}`,N=()=>a(s);return t.jsx("button",{type:"button",className:`${K} ${o}`,"aria-expanded":d,onClick:N,...n,children:e})}try{m.displayName="AccordionHeader",m.__docgenInfo={description:"",displayName:"AccordionHeader",props:{}}}catch{}const l=Object.assign(_,{Item:y,Body:u,Header:m});try{l.displayName="Accordion",l.__docgenInfo={description:"",displayName:"Accordion",props:{activeKeys:{defaultValue:null,description:"",name:"activeKeys",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(key: string) => void"}}}}}catch{}const E=`function Example() {
  const eventKey = "0";
  const [activeKeys, setActiveKeys] = React.useState<string[]>([]);

  const onSelect = (key: string) => {
    setActiveKeys((prev) => (prev.includes(key) ? [] : [key]));
  }
  
  return (
    <Accordion
      activeKeys={activeKeys}
      onSelect={onSelect}
    >
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          Click Me!
        </Accordion.Header>
        
        <Accordion.Body>
          Body
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

render(<Example />)`,B={title:"Components/Accordion",component:l,tags:["!autodocs"],parameters:{layout:"fullscreen"}},i={tags:["!dev"],args:{activeKeys:[],onSelect:()=>{}},render:()=>t.jsx(I,{code:E,noInline:!0,scope:{Accordion:l}})};var g,C,A;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    activeKeys: [],
    onSelect: () => {}
  },
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Accordion
  }} />
}`,...(A=(C=i.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const V=["Example"],O=Object.freeze(Object.defineProperty({__proto__:null,Example:i,__namedExportsOrder:V,default:B},Symbol.toStringTag,{value:"Module"}));export{O as A,i as E,y as a};
