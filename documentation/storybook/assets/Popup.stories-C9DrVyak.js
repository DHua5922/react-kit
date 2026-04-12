import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as l}from"./index-Bc2G9s8g.js";import{P as t}from"./Popup-DTBhATLJ.js";import{L as x}from"./LiveCodeBlock-MP6rWtjX.js";import"./index-Dy83Z4lh.js";const s=`function Example() {
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

render(<Example />)`,y={title:"Components/Popup",component:t,tags:["autodocs"],parameters:{layout:"padded"},args:{show:!0,left:"32px",top:"88px",children:e.jsx("div",{style:{width:220,padding:16,borderRadius:12,background:"#ffffff",boxShadow:"0 12px 32px rgba(15, 23, 42, 0.16)"},children:"Popup content"}),onHide:()=>{}}},o={render:function(){const[f,d]=l.useState(!1);return e.jsxs("div",{style:{minHeight:260,padding:32,background:"#f8fafc"},children:[e.jsx("button",{type:"button",onClick:()=>d(!0),style:{padding:"10px 14px",borderRadius:10,border:"1px solid #cbd5e1",background:"#ffffff",cursor:"pointer"},children:"Open popup"}),e.jsx(t,{show:f,onHide:()=>d(!1),left:"32px",top:"88px",children:e.jsx("div",{style:{width:240,padding:16,borderRadius:12,background:"#ffffff",boxShadow:"0 12px 32px rgba(15, 23, 42, 0.16)"},children:"Press Escape or click outside to close."})})]})}},r={parameters:{docs:{source:{code:s}}},render:()=>e.jsx("div",{style:{maxWidth:1080,margin:"0 auto"},children:e.jsx(x,{title:"Popup Live Playground",code:s,editorHeight:"340px",noInline:!0,scope:{Popup:t}})})};var p,a,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    const [show, setShow] = useState(false);
    return <div style={{
      minHeight: 260,
      padding: 32,
      background: '#f8fafc'
    }}>
        <button type="button" onClick={() => setShow(true)} style={{
        padding: '10px 14px',
        borderRadius: 10,
        border: '1px solid #cbd5e1',
        background: '#ffffff',
        cursor: 'pointer'
      }}>
          Open popup
        </button>

        <Popup show={show} onHide={() => setShow(false)} left="32px" top="88px">
          <div style={{
          width: 240,
          padding: 16,
          borderRadius: 12,
          background: '#ffffff',
          boxShadow: '0 12px 32px rgba(15, 23, 42, 0.16)'
        }}>
            Press Escape or click outside to close.
          </div>
        </Popup>
      </div>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var n,c,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      <LiveCodeBlock title="Popup Live Playground" code={liveCode} editorHeight="340px" noInline scope={{
      Popup
    }} />
    </div>
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const k=["Interactive","LiveExample"];export{o as Interactive,r as LiveExample,k as __namedExportsOrder,y as default};
