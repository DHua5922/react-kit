import{j as s}from"./jsx-runtime-DiklIkkE.js";import{r}from"./index-DRjF_FHU.js";import{P as k}from"./index-CgmY5G0d.js";import{L as q}from"./index-QgfrSyUJ.js";import"./index-BKlBQwGM.js";const N={showMenu:!1,onShowMenu:()=>{},onHideMenu:()=>{},onSelect:()=>{},offsetMenuPosVertical:0,offsetMenuPosHorizontal:0,menuPos:{top:"0px",left:"0px"},setMenuPos:()=>{}},x=r.createContext(N);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const j="_container_12vid_1",H={container:j};function m({children:n,className:e="",...u}){const t=r.useContext(x);return s.jsx(k,{left:t.menuPos.left,top:t.menuPos.top,show:t.showMenu,onHide:t.onHideMenu,children:s.jsx("div",{className:`${H.container} ${e}`,...u,children:n})})}try{m.displayName="MenuContent",m.__docgenInfo={description:"",displayName:"MenuContent",props:{}}}catch{}function E(n){const e=r.useContext(x),u=r.useRef(null);if(!e)throw new Error("MenuToggle must be used within a Menu component");const t=()=>{const o=u.current;if(!o){e.onShowMenu&&e.onShowMenu();return}const a=o.getBoundingClientRect();e.setMenuPos({top:`${a.bottom+e.offsetMenuPosVertical}px`,left:`${a.left+e.offsetMenuPosHorizontal}px`}),e.onShowMenu&&e.onShowMenu()};return{context:e,triggerRef:u,openMenu:t,handleClick:o=>{n==null||n(o),t()}}}function g({children:n,onClick:e,type:u,...t}){const{context:l,triggerRef:o,openMenu:a,handleClick:i}=E(e);if(!l)return null;if(r.isValidElement(n)){const d=n,f=c=>{var y,p;const M=c;(p=(y=d.props).onClick)==null||p.call(y,c),e==null||e(M),a()};return s.jsx("div",{ref:o,children:r.cloneElement(d,{...t,...d.props,onClick:f})})}return s.jsx("div",{ref:o,children:s.jsx("button",{type:u||"button",onClick:i,...t,children:n})})}try{g.displayName="MenuToggle",g.__docgenInfo={description:"",displayName:"MenuToggle",props:{}}}catch{}function C({children:n,showMenu:e,defaultShowMenu:u=!1,onShowMenu:t,onHideMenu:l,offsetMenuPosVertical:o=0,offsetMenuPosHorizontal:a=0,onSelect:i,...d}){const[f,c]=r.useState(u),[M,y]=r.useState({top:"auto",left:"auto"}),p=typeof e=="boolean",w=p?e:f,b=r.useMemo(()=>({showMenu:w,onShowMenu:()=>{p||c(!0),t&&t()},onHideMenu:()=>{p||c(!1),l&&l()},offsetMenuPosVertical:o,offsetMenuPosHorizontal:a,menuPos:M,setMenuPos:y,onSelect:i||(()=>{})}),[p,M,a,o,l,t,i,w]);return s.jsx(x.Provider,{value:b,children:T(n)?n:s.jsx(m,{...d,children:n})})}function T(n){return r.Children.toArray(n).some(e=>r.isValidElement(e)&&(e.type===g||e.type===m))}try{C.displayName="Menu",C.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:{value:"false"},description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const $="_container_2j9z2_1",z={container:$};function S({children:n,className:e="",onClick:u,value:t,style:l,...o}){const{onSelect:a,onHideMenu:i}=r.useContext(x),d=c=>{a&&a(t),u&&u(c),i&&i()},f={cursor:a?"pointer":"default",...l};return s.jsx("button",{className:`${z.container} ${e}`,onClick:d,style:f,...o,children:n})}try{S.displayName="MenuItem",S.__docgenInfo={description:"",displayName:"MenuItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"unknown"}}}}}catch{}const h=Object.assign(C,{Content:m,Item:S,Toggle:g});try{h.displayName="Menu",h.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:null,description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:null,description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:null,description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const v=`function Example() {
  const [selection, setSelection] = React.useState('Profile')

  const containerStyle = {
    minHeight: 220,
    padding: 32,
    background: '#f8fafc'
  }

  const chosenDisplayStyle = {
    marginBottom: 16,
    color: '#475569',
    fontSize: 14,
  }

  const menuToggleStyle = {
    padding: '10px 14px',
    borderRadius: 10,
    border: '1px solid #cbd5e1',
    background: '#ffffff',
    cursor: 'pointer',
  }

  const onClickItem = (item: string) => () => setSelection(item)

  return (
    <div style={containerStyle}>
      <p style={chosenDisplayStyle}>
        Selected: {selection}
      </p>

      <Menu offsetMenuPosVertical={8}>
        <Menu.Toggle style={menuToggleStyle}>
          Open menu
        </Menu.Toggle>

        <Menu.Content>
          <Menu.Item onClick={onClickItem('Profile')}>Profile</Menu.Item>
          <Menu.Item onClick={onClickItem('Billing')}>Billing</Menu.Item>
          <Menu.Item onClick={onClickItem('Sign out')}>Sign out</Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}

render(<Example />)`,A={title:"Components/Menu",component:h,tags:["!autodocs"],parameters:{layout:"padded"}},_={parameters:{docs:{source:{code:v}}},render:()=>s.jsx(q,{code:v,noInline:!0,scope:{Menu:h}})};var V,P,I;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: liveCode
      }
    }
  },
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Menu
  }} />
}`,...(I=(P=_.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const F=["Example"];export{_ as Example,F as __namedExportsOrder,A as default};
