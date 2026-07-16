import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{r as d}from"./index-Bc2G9s8g.js";import{L as N}from"./LiveCodeBlock-DYl2xIvc.js";const w=d.createContext({show:!1,onShow:()=>{},onHide:()=>{}});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const v="_container_118eu_1",B={container:v};function p({children:e,className:n="",show:o,onShow:c,onHide:a,...$}){const i=d.useRef(null);return d.useEffect(()=>{var r,h;o?(r=i.current)==null||r.showModal():(h=i.current)==null||h.close()},[o]),t.jsx(w.Provider,{value:{show:o,onShow:c,onHide:a},children:t.jsx("dialog",{ref:i,onClose:a,onCancel:r=>{r.preventDefault(),a==null||a()},className:`${B.container} ${n}`,...$,children:e})})}try{p.displayName="Modal",p.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean | undefined"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void) | undefined"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const S="_container_1snqr_1",j={container:S};function _({children:e,className:n="",...o}){return t.jsx("div",{className:`${j.container} ${n}`,...o,children:e})}try{_.displayName="ModalHeader",_.__docgenInfo={description:"",displayName:"ModalHeader",props:{}}}catch{}const H="_container_vk310_1",I={container:H};function u({children:e,className:n="",...o}){return t.jsx("h2",{className:`${I.container} ${n}`,...o,children:e})}try{u.displayName="ModalTitle",u.__docgenInfo={description:"",displayName:"ModalTitle",props:{}}}catch{}const b="_container_n8rx5_1",E={container:b};function m({children:e,className:n="",...o}){return t.jsx("div",{className:`${E.container} ${n}`,...o,children:e})}try{m.displayName="ModalBody",m.__docgenInfo={description:"",displayName:"ModalBody",props:{}}}catch{}const k="_container_7u0pw_1",q={container:k};function y({children:e,className:n="",...o}){return t.jsx("div",{className:`${q.container} ${n}`,...o,children:e})}try{y.displayName="ModalFooter",y.__docgenInfo={description:"",displayName:"ModalFooter",props:{}}}catch{}const T="_container_lnelr_1",F={container:T};function f({children:e,className:n="",...o}){const{onHide:c}=d.useContext(w);return t.jsx("button",{className:`${F.container} ${n}`,onClick:c,...o,children:e||"X"})}try{f.displayName="ModalCloseButton",f.__docgenInfo={description:"",displayName:"ModalCloseButton",props:{}}}catch{}const l=Object.assign(p,{Header:_,Title:u,CloseButton:f,Body:m,Footer:y});try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean | undefined"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void) | undefined"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const M=`function Example() {
  const [show, setShow] = React.useState(false)

  const handleOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>

      <Modal show={show} onShow={handleOpen} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>

        <Modal.Body>
          Modal body content goes here.
        </Modal.Body>

        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

render(<Example />)`,P={title:"Components/Modal",component:l,tags:["!autodocs"],parameters:{layout:"centered"}},s={args:{show:!1,onShow:()=>{},onHide:()=>{}},parameters:{docs:{source:{code:M}}},render:()=>t.jsx(N,{title:"Modal Live Playground",code:M,editorHeight:"360px",noInline:!0,previewPosition:"top",scope:{Modal:l}})};var x,C,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    show: false,
    onShow: () => {},
    onHide: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: liveCode
      }
    }
  },
  render: () => <LiveCodeBlock title="Modal Live Playground" code={liveCode} editorHeight="360px" noInline previewPosition="top" scope={{
    Modal
  }} />
}`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const R=["Examples"];export{s as Examples,R as __namedExportsOrder,P as default};
