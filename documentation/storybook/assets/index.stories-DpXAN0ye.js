import{j as r}from"./jsx-runtime-DiklIkkE.js";import{P as p}from"./index-CgmY5G0d.js";import{L as s}from"./index-Do02Yr6G.js";const a=`function Example() {
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

render(<Example />)`,d={title:"Components/Popup",component:p,tags:["!autodocs"],parameters:{layout:"fullscreen"}},o={tags:["!dev"],render:()=>r.jsx(s,{code:a,noInline:!0,scope:{Popup:p}})};var e,t,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Popup
  }} />
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const u=["Example"],f=Object.freeze(Object.defineProperty({__proto__:null,Example:o,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{o as E,f as S};
