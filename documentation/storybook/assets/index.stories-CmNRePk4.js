import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as l}from"./index-DRjF_FHU.js";import{L as w}from"./index-Do02Yr6G.js";const v={show:!1,onShow:()=>{},onHide:()=>{}},h=l.createContext(v);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const S="_container_1d9s4_1",j={container:S};function B(e){const o=l.useRef(null);return l.useEffect(()=>{var n,a;e?(n=o.current)==null||n.showModal():(a=o.current)==null||a.close()},[e]),o}function c({children:e,className:o="",show:n,onShow:a,onHide:r,...C}){const g=B(!!n),x={show:n,onShow:a,onHide:r},$=N=>{N.preventDefault(),r==null||r()};return t.jsx(h.Provider,{value:x,children:t.jsx("dialog",{ref:g,onClose:r,onCancel:$,className:`${j.container} ${o}`,...C,children:e})})}try{c.displayName="Modal",c.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean | undefined"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void) | undefined"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const b="_container_1snqr_1",I={container:b};function i({children:e,className:o="",...n}){return t.jsx("div",{className:`${I.container} ${o}`,...n,children:e})}try{i.displayName="ModalHeader",i.__docgenInfo={description:"",displayName:"ModalHeader",props:{}}}catch{}const E="_container_vk310_1",O={container:E};function p({children:e,className:o="",...n}){return t.jsx("h2",{className:`${O.container} ${o}`,...n,children:e})}try{p.displayName="ModalTitle",p.__docgenInfo={description:"",displayName:"ModalTitle",props:{}}}catch{}const T="_container_n8rx5_1",k={container:T};function _({children:e,className:o="",...n}){return t.jsx("div",{className:`${k.container} ${o}`,...n,children:e})}try{_.displayName="ModalBody",_.__docgenInfo={description:"",displayName:"ModalBody",props:{}}}catch{}const q="_container_7u0pw_1",H={container:q};function u({children:e,className:o="",...n}){return t.jsx("div",{className:`${H.container} ${o}`,...n,children:e})}try{u.displayName="ModalFooter",u.__docgenInfo={description:"",displayName:"ModalFooter",props:{}}}catch{}const V="_container_lnelr_1",F={container:V};function m({children:e,className:o="",...n}){const{onHide:a}=l.useContext(h);return t.jsx("button",{className:`${F.container} ${o}`,onClick:a,...n,children:e||"X"})}try{m.displayName="ModalCloseButton",m.__docgenInfo={description:"",displayName:"ModalCloseButton",props:{}}}catch{}const d=Object.assign(c,{Header:i,Title:p,CloseButton:m,Body:_,Footer:u});try{d.displayName="Modal",d.__docgenInfo={description:"",displayName:"Modal",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean | undefined"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void) | undefined"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const R=`function Example() {
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

render(<Example />)`,L={title:"Components/Modal",component:d,tags:["!autodocs"],parameters:{layout:"fullscreen"}},s={tags:["!dev"],render:()=>t.jsx(w,{code:R,noInline:!0,scope:{Modal:d}})};var f,y,M;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Modal
  }} />
}`,...(M=(y=s.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const D=["Example"],A=Object.freeze(Object.defineProperty({__proto__:null,Example:s,__namedExportsOrder:D,default:L},Symbol.toStringTag,{value:"Module"}));export{s as E,d as M,A as S};
