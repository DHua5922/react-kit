import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{C as s}from"./Center-CeCnhLpT.js";import{L as i}from"./LiveCodeBlock-MP6rWtjX.js";import"./index-Bc2G9s8g.js";const m={title:"Components/Center",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"radio",options:["","vertical","horizontal"]}},args:{children:"Centered content",style:{width:240,height:120,border:"1px dashed #cbd5e1",borderRadius:8,background:"#f8fafc",padding:16}}},o=`<Center
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
</Center>`,e={parameters:{layout:"padded",docs:{source:{code:o}}},render:()=>r.jsx("div",{style:{maxWidth:960,margin:"0 auto"},children:r.jsx(i,{title:"Center Live Playground",code:o,editorHeight:"280px",scope:{Center:s}})})};var t,d,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(d=e.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const u=["Example"];export{e as Example,u as __namedExportsOrder,m as default};
