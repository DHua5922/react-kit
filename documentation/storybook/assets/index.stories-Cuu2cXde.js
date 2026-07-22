import{j as d}from"./jsx-runtime-DiklIkkE.js";import{r}from"./index-DRjF_FHU.js";import{L as b}from"./index-Do02Yr6G.js";const B={show:!1,onShow:()=>{},onHide:()=>{}},g=r.createContext(B);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const S="_container_1d9s4_1",j={container:S};function I(e){const o=r.useRef(null);return r.useEffect(()=>{var t,n;e?(t=o.current)==null||t.showModal():(n=o.current)==null||n.close()},[e]),o}const i=r.forwardRef(function({children:o,className:t="",show:n,onShow:a,onHide:s,...x},w){const y=I(!!n);r.useImperativeHandle(w,()=>y.current);const $={show:n,onShow:a,onHide:s},N=v=>{v.preventDefault(),s==null||s()};return d.jsx(g.Provider,{value:$,children:d.jsx("dialog",{ref:y,onClose:s,onCancel:N,className:`${j.container} ${t}`,...x,children:o})})});try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean | undefined"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void) | undefined"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const R="_container_1snqr_1",E={container:R},p=r.forwardRef(function({children:o,className:t="",...n},a){return d.jsx("div",{ref:a,className:`${E.container} ${t}`,...n,children:o})});try{p.displayName="ModalHeader",p.__docgenInfo={description:"",displayName:"ModalHeader",props:{}}}catch{}const H="_container_vk310_1",T={container:H},u=r.forwardRef(function({children:o,className:t="",...n},a){return d.jsx("h2",{ref:a,className:`${T.container} ${t}`,...n,children:o})});try{u.displayName="ModalTitle",u.__docgenInfo={description:"",displayName:"ModalTitle",props:{}}}catch{}const O="_container_n8rx5_1",k={container:O},_=r.forwardRef(function({children:o,className:t="",...n},a){return d.jsx("div",{ref:a,className:`${k.container} ${t}`,...n,children:o})});try{_.displayName="ModalBody",_.__docgenInfo={description:"",displayName:"ModalBody",props:{}}}catch{}const q="_container_7u0pw_1",F={container:q},f=r.forwardRef(function({children:o,className:t="",...n},a){return d.jsx("div",{ref:a,className:`${F.container} ${t}`,...n,children:o})});try{f.displayName="ModalFooter",f.__docgenInfo={description:"",displayName:"ModalFooter",props:{}}}catch{}const V="_container_lnelr_1",L={container:V},m=r.forwardRef(function({children:o,className:t="",...n},a){const{onHide:s}=r.useContext(g);return d.jsx("button",{ref:a,type:"button",className:`${L.container} ${t}`,onClick:s,...n,children:o||"X"})});try{m.displayName="ModalCloseButton",m.__docgenInfo={description:"",displayName:"ModalCloseButton",props:{}}}catch{}const c=Object.assign(i,{Header:p,Title:u,CloseButton:m,Body:_,Footer:f});try{c.displayName="Modal",c.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean | undefined"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void) | undefined"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const D=`function Example() {
  const [show, setShow] = React.useState(false)

  const handleOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <button type="button" onClick={handleOpen}>Open Modal</button>

      <Modal show={show} onShow={handleOpen} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>

        <Modal.Body>
          Modal body content goes here.
        </Modal.Body>

        <Modal.Footer>
          <button type="button" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

render(<Example />)`,P={title:"Components/Modal",component:c,tags:["!autodocs"],parameters:{layout:"fullscreen"}},l={tags:["!dev"],render:()=>d.jsx(b,{code:D,noInline:!0,scope:{Modal:c}})};var M,h,C;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Modal
  }} />
}`,...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const z=["Example"],J=Object.freeze(Object.defineProperty({__proto__:null,Example:l,__namedExportsOrder:z,default:P},Symbol.toStringTag,{value:"Module"}));export{l as E,c as M,J as S};
