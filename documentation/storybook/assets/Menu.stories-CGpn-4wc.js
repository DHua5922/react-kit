import{j as i}from"./jsx-runtime-DiklIkkE.js";import{r as a}from"./index-DRjF_FHU.js";import{P as I}from"./index-CgmY5G0d.js";import{L as b}from"./index-QgfrSyUJ.js";import"./index-BKlBQwGM.js";const k={showMenu:!1,onShowMenu:()=>{},onHideMenu:()=>{},onSelect:()=>{},offsetMenuPosVertical:0,offsetMenuPosHorizontal:0,menuPos:{top:"0px",left:"0px"},setMenuPos:()=>{}},x=a.createContext(k);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const q="_container_12vid_1",N={container:q};function M({children:e,className:n="",...o}){const t=a.useContext(x);return i.jsx(I,{left:t.menuPos.left,top:t.menuPos.top,show:t.showMenu,onHide:t.onHideMenu,children:i.jsx("div",{className:`${N.container} ${n}`,...o,children:e})})}try{M.displayName="MenuContent",M.__docgenInfo={description:"",displayName:"MenuContent",props:{}}}catch{}function j(e){const n=a.useContext(x),o=a.useRef(null);if(!n)throw new Error("MenuToggle must be used within a Menu component");const t=()=>{const r=o.current;if(!r){n.onShowMenu&&n.onShowMenu();return}const u=r.getBoundingClientRect();n.setMenuPos({top:`${u.bottom+n.offsetMenuPosVertical}px`,left:`${u.left+n.offsetMenuPosHorizontal}px`}),n.onShowMenu&&n.onShowMenu()};return{context:n,triggerRef:o,openMenu:t,handleClick:r=>{e==null||e(r),t()}}}function _({children:e,onClick:n,type:o,...t}){const{context:l,triggerRef:r,openMenu:u,handleClick:d}=j(n);if(!l)return null;if(a.isValidElement(e)){const s=e,c=p=>{var m,h;const f=p;(h=(m=s.props).onClick)==null||h.call(m,p),n==null||n(f),u()};return i.jsx("div",{ref:r,children:a.cloneElement(s,{...t,...s.props,onClick:c})})}return i.jsx("div",{ref:r,children:i.jsx("button",{type:o||"button",onClick:d,...t,children:e})})}try{_.displayName="MenuToggle",_.__docgenInfo={description:"",displayName:"MenuToggle",props:{}}}catch{}function H(e,n=!1,o,t,l=0,r=0,u){const[d,s]=a.useState(n),[c,p]=a.useState({top:"auto",left:"auto"}),f=typeof e=="boolean",m=f?e:d;return a.useMemo(()=>({showMenu:m,onShowMenu:()=>{f||s(!0),o&&o()},onHideMenu:()=>{f||s(!1),t&&t()},offsetMenuPosVertical:l,offsetMenuPosHorizontal:r,menuPos:c,setMenuPos:p,onSelect:u||(()=>{})}),[f,c,r,l,t,o,u,m])}function C({children:e,showMenu:n,defaultShowMenu:o=!1,onShowMenu:t,onHideMenu:l,offsetMenuPosVertical:r=0,offsetMenuPosHorizontal:u=0,onSelect:d,...s}){const c=H(n,o,t,l,r,u,d);return i.jsx(x.Provider,{value:c,children:E(e)?e:i.jsx(M,{...s,children:e})})}function E(e){return a.Children.toArray(e).some(n=>a.isValidElement(n)&&(n.type===_||n.type===M))}try{C.displayName="Menu",C.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:{value:"false"},description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const T="_container_2j9z2_1",$={container:T};function S({children:e,className:n="",onClick:o,value:t,style:l,...r}){const{onSelect:u,onHideMenu:d}=a.useContext(x),s=p=>{u&&u(t),o&&o(p),d&&d()},c={cursor:u?"pointer":"default",...l};return i.jsx("button",{className:`${$.container} ${n}`,onClick:s,style:c,...r,children:e})}try{S.displayName="MenuItem",S.__docgenInfo={description:"",displayName:"MenuItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"unknown"}}}}}catch{}const g=Object.assign(C,{Content:M,Item:S,Toggle:_});try{g.displayName="Menu",g.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:null,description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:null,description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:null,description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const w=`function Example() {
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

render(<Example />)`,D={title:"Components/Menu",component:g,tags:["!autodocs"],parameters:{layout:"padded"}},y={parameters:{docs:{source:{code:w}}},render:()=>i.jsx(b,{code:w,noInline:!0,scope:{Menu:g}})};var V,v,P;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(P=(v=y.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const A=["Example"];export{y as Example,A as __namedExportsOrder,D as default};
