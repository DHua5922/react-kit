import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{C as i,L as s}from"./LiveCodeBlock-Ck6Guhcd.js";import"./index-Bc2G9s8g.js";const l={title:"Components/Center",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"radio",options:["","vertical","horizontal"]}},args:{children:"Centered content",style:{width:240,height:120,border:"1px dashed #cbd5e1",borderRadius:8,background:"#f8fafc",padding:16}}},o=`<Center
  style={{
    width: 260,
    height: 140,
    border: '1px dashed #cbd5e1',
    borderRadius: 8,
    background: '#f8fafc',
    padding: 16,
  }}
>
  Live render preview
</Center>`,e={parameters:{layout:"padded",docs:{source:{code:o}}},render:()=>r.jsx("div",{style:{maxWidth:960,margin:"0 auto"},children:r.jsx(s,{title:"Center Live Playground",code:o,editorHeight:"280px",scope:{Center:i}})})};var t,d,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        code: liveCode
      }
    }
  },
  render: () => <div style={{
    maxWidth: 960,
    margin: '0 auto'
  }}>
      <LiveCodeBlock title="Center Live Playground" code={liveCode} editorHeight="280px" scope={{
      Center
    }} />
    </div>
}`,...(a=(d=e.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const m=["LiveExample"];export{e as LiveExample,m as __namedExportsOrder,l as default};
