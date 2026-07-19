import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{P as s}from"./index-Cw-l8Em6.js";import{L as d}from"./LiveCodeBlock-ObSKZki_.js";import"./index-Bc2G9s8g.js";import"./index-Dy83Z4lh.js";const e=`function Example() {
  const [show, setShow] = React.useState(false)
  
  const containerStyle = {
    minHeight: 260,
    padding: 32,
    background: '#f8fafc'
  }

  const buttonStyle = {
    padding: '10px 14px',
    borderRadius: 10,
    border: '1px solid #cbd5e1',
    background: '#ffffff',
    cursor: 'pointer',
  }

  const popupContentStyle = {
    width: 240,
    padding: 16,
    borderRadius: 12,
    background: '#ffffff',
    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.16)',
  }

  const onOpenPopup = () => {
    setShow(true)
  }

  const onClosePopup = () => {
    setShow(false)
  }

  return (
    <div style={containerStyle}>
      <button
        type="button"
        onClick={onOpenPopup}
        style={buttonStyle}
      >
        Open popup
      </button>

      <Popup
        show={show}
        onHide={onClosePopup}
        left="32px"
        top="88px"
      >
        <div style={popupContentStyle}>
          Popup content rendered through a portal.
        </div>
      </Popup>
    </div>
  )
}

render(<Example />)`,f={title:"Components/Popup",component:s,tags:["!autodocs"],parameters:{layout:"padded"},args:{show:!0,left:"32px",top:"88px",children:r.jsx("div",{style:{width:220,padding:16,borderRadius:12,background:"#ffffff",boxShadow:"0 12px 32px rgba(15, 23, 42, 0.16)"},children:"Popup content"}),onHide:()=>{}}},o={parameters:{docs:{source:{code:e}}},render:()=>r.jsx(d,{code:e,noInline:!0,scope:{Popup:s}})};var t,n,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: liveCode
      }
    }
  },
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Popup
  }} />
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const m=["Example"];export{o as Example,m as __namedExportsOrder,f as default};
