import{j as o}from"./jsx-runtime-DFAAy_2V.js";import{P as a}from"./Popup-UsBpTGPP.js";import{L as s}from"./LiveCodeBlock-AoAg4Juf.js";import"./index-Bc2G9s8g.js";import"./index-Dy83Z4lh.js";import"./styled-components.browser.esm-BWXllbBW.js";const t=`function Example() {
  const [show, setShow] = React.useState(false)

  return (
    <div style={{ minHeight: 260, padding: 32, background: '#f8fafc' }}>
      <button
        type="button"
        onClick={() => setShow(true)}
        style={{
          padding: '10px 14px',
          borderRadius: 10,
          border: '1px solid #cbd5e1',
          background: '#ffffff',
          cursor: 'pointer',
        }}
      >
        Open popup
      </button>

      <Popup
        show={show}
        onHide={() => setShow(false)}
        left="32px"
        top="88px"
      >
        <div
          style={{
            width: 240,
            padding: 16,
            borderRadius: 12,
            background: '#ffffff',
            boxShadow: '0 12px 32px rgba(15, 23, 42, 0.16)',
          }}
        >
          Popup content rendered through a portal.
        </div>
      </Popup>
    </div>
  )
}

render(<Example />)`,m={title:"Components/Popup",component:a,tags:["autodocs"],parameters:{layout:"padded"},args:{show:!0,left:"32px",top:"88px",children:o.jsx("div",{style:{width:220,padding:16,borderRadius:12,background:"#ffffff",boxShadow:"0 12px 32px rgba(15, 23, 42, 0.16)"},children:"Popup content"}),onHide:()=>{}}},e={parameters:{docs:{source:{code:t}}},render:()=>o.jsx("div",{style:{maxWidth:1080,margin:"0 auto"},children:o.jsx(s,{code:t,editorHeight:"340px",noInline:!0,scope:{Popup:a}})})};var r,d,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: liveCode
      }
    }
  },
  render: () => <div style={{
    maxWidth: 1080,
    margin: '0 auto'
  }}>
      <LiveCodeBlock code={liveCode} editorHeight="340px" noInline scope={{
      Popup
    }} />
    </div>
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Example"];export{e as Example,x as __namedExportsOrder,m as default};
