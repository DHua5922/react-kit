import{j as u}from"./jsx-runtime-DFAAy_2V.js";import{r as d,R as _}from"./index-Bc2G9s8g.js";import{P as N}from"./index-JaGxwB3V.js";import{L as j}from"./LiveCodeBlock-ObSKZki_.js";import"./index-Dy83Z4lh.js";const S=d.createContext({showMenu:!1,onShowMenu:()=>{},onHideMenu:()=>{},onSelect:()=>{},offsetMenuPosVertical:0,offsetMenuPosHorizontal:0,menuPos:{top:"0px",left:"0px"},setMenuPos:()=>{}});try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const H="_container_12vid_1",k={container:H};function m({children:e,className:n="",...i}){const o=d.useContext(S);return u.jsx(N,{left:o.menuPos.left,top:o.menuPos.top,show:o.showMenu,onHide:o.onHideMenu,children:u.jsx("div",{className:`${k.container} ${n}`,...i,children:e})})}try{m.displayName="MenuContent",m.__docgenInfo={description:"",displayName:"MenuContent",props:{}}}catch{}function g({children:e,onClick:n,type:i,...o}){const t=d.useContext(S),l=d.useRef(null);if(!t)return null;const a=()=>{const r=l.current;if(!r){t.onShowMenu&&t.onShowMenu();return}const s=r.getBoundingClientRect();t.setMenuPos({top:`${s.bottom+t.offsetMenuPosVertical}px`,left:`${s.left+t.offsetMenuPosHorizontal}px`}),t.onShowMenu&&t.onShowMenu()},c=r=>{n==null||n(r),a()};if(_.isValidElement(e)){const r=e;return u.jsx("div",{ref:l,children:_.cloneElement(r,{...o,...r.props,onClick:s=>{var p,f;(f=(p=r.props).onClick)==null||f.call(p,s),n==null||n(s),a()}})})}return u.jsx("div",{ref:l,children:u.jsx("button",{type:i||"button",onClick:c,...o,children:e})})}try{g.displayName="MenuToggle",g.__docgenInfo={description:"",displayName:"MenuToggle",props:{}}}catch{}function E(e){return _.Children.toArray(e).some(n=>_.isValidElement(n)&&(n.type===g||n.type===m))}function h({children:e,showMenu:n,defaultShowMenu:i=!1,onShowMenu:o,onHideMenu:t,offsetMenuPosVertical:l=0,offsetMenuPosHorizontal:a=0,onSelect:c,...r}){const[s,p]=d.useState(i),[f,b]=d.useState({top:"auto",left:"auto"}),M=typeof n=="boolean",w=M?n:s,q=d.useMemo(()=>({showMenu:w,onShowMenu:()=>{M||p(!0),o&&o()},onHideMenu:()=>{M||p(!1),t&&t()},offsetMenuPosVertical:l,offsetMenuPosHorizontal:a,menuPos:f,setMenuPos:b,onSelect:c||(()=>{})}),[M,f,a,l,t,o,c,w]);return u.jsx(S.Provider,{value:q,children:E(e)?e:u.jsx(m,{...r,children:e})})}try{h.displayName="Menu",h.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:{value:"false"},description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const $="_container_2j9z2_1",R={container:$};function C({children:e,className:n="",onClick:i,value:o,style:t,...l}){const{onSelect:a,onHideMenu:c}=d.useContext(S),r=p=>{a&&a(o),i&&i(p),c&&c()},s={cursor:a?"pointer":"default",...t};return u.jsx("button",{className:`${R.container} ${n}`,onClick:r,style:s,...l,children:e})}try{C.displayName="MenuItem",C.__docgenInfo={description:"",displayName:"MenuItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"unknown"}}}}}catch{}const x=Object.assign(h,{Content:m,Item:C,Toggle:g});try{x.displayName="Menu",x.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:null,description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:null,description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:null,description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const v=`function Example() {
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

render(<Example />)`,D={title:"Components/Menu",component:x,tags:["!autodocs"],parameters:{layout:"padded"}},y={parameters:{docs:{source:{code:v}}},render:()=>u.jsx(j,{code:v,noInline:!0,scope:{Menu:x}})};var P,V,I;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(V=y.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const A=["Example"];export{y as Example,A as __namedExportsOrder,D as default};
