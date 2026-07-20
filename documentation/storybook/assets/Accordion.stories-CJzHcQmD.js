import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{r as c}from"./index-Bc2G9s8g.js";import{L as I}from"./LiveCodeBlock-ObSKZki_.js";const s=c.createContext({activeKeys:[],onSelect:()=>{}});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function _({children:e,activeKeys:n,onSelect:o,...r}){return t.jsx(s.Provider,{value:{activeKeys:n,onSelect:o},children:t.jsx("div",{...r,children:e})})}try{_.displayName="Accordion",_.__docgenInfo={description:"",displayName:"Accordion",props:{activeKeys:{defaultValue:null,description:"",name:"activeKeys",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(key: string) => void"}}}}}catch{}const p=c.createContext({eventKey:""});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function u({children:e,eventKey:n,...o}){return t.jsx(p.Provider,{value:{eventKey:n},children:t.jsx("div",{...o,children:e})})}try{u.displayName="AccordionItem",u.__docgenInfo={description:"",displayName:"AccordionItem",props:{eventKey:{defaultValue:null,description:"",name:"eventKey",required:!0,type:{name:"string"}}}}}catch{}const N="_container_fvlqg_1",h="_expanded_fvlqg_7",y={container:N,expanded:h,"container--inner":"_container--inner_fvlqg_11"};function m({children:e,className:n="",...o}){const{activeKeys:r}=c.useContext(s),{eventKey:l}=c.useContext(p),a=r.includes(l);return t.jsx("div",{className:`${y.container} ${a?y.expanded:""} ${n}`,"aria-hidden":!a,...o,children:t.jsx("div",{className:y["container--inner"],children:e})})}try{m.displayName="AccordionBody",m.__docgenInfo={description:"",displayName:"AccordionBody",props:{}}}catch{}const S="_button_z4trx_1",j="_active_z4trx_8",C={button:S,active:j};function x({children:e,className:n="",...o}){const{activeKeys:r,onSelect:l}=c.useContext(s),{eventKey:a}=c.useContext(p),v=r.includes(a);return t.jsx("button",{type:"button",className:`${C.button} ${v?C.active:""} ${n}`,"aria-expanded":v,onClick:()=>l(a),...o,children:e})}try{x.displayName="AccordionHeader",x.__docgenInfo={description:"",displayName:"AccordionHeader",props:{}}}catch{}const d=Object.assign(_,{Context:s,Item:u,ItemContext:p,Body:m,Header:x});try{d.displayName="Accordion",d.__docgenInfo={description:"",displayName:"Accordion",props:{activeKeys:{defaultValue:null,description:"",name:"activeKeys",required:!0,type:{name:"string[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(key: string) => void"}}}}}catch{}const g=`function Example() {
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

render(<Example />)`,q={title:"Components/Accordion",component:d,tags:["!autodocs"],parameters:{layout:"centered"}},i={args:{activeKeys:[],onSelect:()=>{}},parameters:{layout:"padded",docs:{source:{code:g}}},render:()=>t.jsx(I,{code:g,noInline:!0,scope:{Accordion:d}})};var A,f,K;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    activeKeys: [],
    onSelect: () => {}
  },
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        code: liveCode
      }
    }
  },
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Accordion
  }} />
}`,...(K=(f=i.parameters)==null?void 0:f.docs)==null?void 0:K.source}}};const $=["Example"];export{i as Example,$ as __namedExportsOrder,q as default};
