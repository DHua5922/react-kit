import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{L as v}from"./index-QgfrSyUJ.js";const B={show:!1,onShow:()=>{},onHide:()=>{}},C=d.createContext(B);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const S="_container_1d9s4_1",j={container:S};function I(e){const o=d.useRef(null);return d.useEffect(()=>{var n,a;e?(n=o.current)==null||n.showModal():(a=o.current)==null||a.close()},[e]),o}function c({children:e,className:o="",show:n,onShow:a,onHide:r,...x}){const g=I(!!n),w={show:n,onShow:a,onHide:r},$=N=>{N.preventDefault(),r==null||r()};return t.jsx(C.Provider,{value:w,children:t.jsx("dialog",{ref:g,onClose:r,onCancel:$,className:`${j.container} ${o}`,...x,children:e})})}try{c.displayName="Modal",c.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean | undefined"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void) | undefined"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const b="_container_1snqr_1",H={container:b};function i({children:e,className:o="",...n}){return t.jsx("div",{className:`${H.container} ${o}`,...n,children:e})}try{i.displayName="ModalHeader",i.__docgenInfo={description:"",displayName:"ModalHeader",props:{}}}catch{}const E="_container_vk310_1",k={container:E};function p({children:e,className:o="",...n}){return t.jsx("h2",{className:`${k.container} ${o}`,...n,children:e})}try{p.displayName="ModalTitle",p.__docgenInfo={description:"",displayName:"ModalTitle",props:{}}}catch{}const q="_container_n8rx5_1",T={container:q};function _({children:e,className:o="",...n}){return t.jsx("div",{className:`${T.container} ${o}`,...n,children:e})}try{_.displayName="ModalBody",_.__docgenInfo={description:"",displayName:"ModalBody",props:{}}}catch{}const V="_container_7u0pw_1",F={container:V};function u({children:e,className:o="",...n}){return t.jsx("div",{className:`${F.container} ${o}`,...n,children:e})}try{u.displayName="ModalFooter",u.__docgenInfo={description:"",displayName:"ModalFooter",props:{}}}catch{}const O="_container_lnelr_1",R={container:O};function m({children:e,className:o="",...n}){const{onHide:a}=d.useContext(C);return t.jsx("button",{className:`${R.container} ${o}`,onClick:a,...n,children:e||"X"})}try{m.displayName="ModalCloseButton",m.__docgenInfo={description:"",displayName:"ModalCloseButton",props:{}}}catch{}const l=Object.assign(c,{Header:i,Title:p,CloseButton:m,Body:_,Footer:u});try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean | undefined"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void) | undefined"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const f=`function Example() {
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

render(<Example />)`,X={title:"Components/Modal",component:l,tags:["!autodocs"],parameters:{layout:"centered"}},s={args:{show:!1,onShow:()=>{},onHide:()=>{}},parameters:{docs:{source:{code:f}}},render:()=>t.jsx(v,{code:f,noInline:!0,scope:{Modal:l}})};var y,h,M;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Modal
  }} />
}`,...(M=(h=s.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const z=["Examples"];export{s as Examples,z as __namedExportsOrder,X as default};
