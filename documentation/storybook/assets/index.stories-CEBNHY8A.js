import{j as i}from"./jsx-runtime-DiklIkkE.js";import{r}from"./index-DRjF_FHU.js";import{P as v}from"./index-CgmY5G0d.js";import{L as P}from"./index-Do02Yr6G.js";const V={showMenu:!1,onShowMenu:()=>{},onHideMenu:()=>{},onSelect:()=>{},offsetMenuPosVertical:0,offsetMenuPosHorizontal:0,menuPos:{top:"0px",left:"0px"},setMenuPos:()=>{}},f=r.createContext(V);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function I({showMenu:e,defaultShowMenu:n=!1,onShowMenu:o,onHideMenu:a,offsetMenuPosVertical:u=0,offsetMenuPosHorizontal:s=0,onSelect:t}){const[l,c]=r.useState(n),[p,y]=r.useState({top:"auto",left:"auto"}),m=typeof e=="boolean",S=m?e:l;return r.useMemo(()=>({showMenu:S,onShowMenu:()=>{m||c(!0),o&&o()},onHideMenu:()=>{m||c(!1),a&&a()},offsetMenuPosVertical:u,offsetMenuPosHorizontal:s,menuPos:p,setMenuPos:y,onSelect:t||(()=>{})}),[m,p,s,u,a,o,t,S])}function _({children:e,showMenu:n,defaultShowMenu:o=!1,onShowMenu:a,onHideMenu:u,offsetMenuPosVertical:s=0,offsetMenuPosHorizontal:t=0,onSelect:l}){const c=I({showMenu:n,defaultShowMenu:o,onShowMenu:a,onHideMenu:u,offsetMenuPosVertical:s,offsetMenuPosHorizontal:t,onSelect:l});return i.jsx(f.Provider,{value:c,children:e})}try{_.displayName="Menu",_.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:{value:"false"},description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const k="_container_2j9z2_1",q={container:k};function g({children:e,className:n="",onClick:o,value:a,style:u,...s}){const{onSelect:t,onHideMenu:l}=r.useContext(f),c=y=>{t&&t(a),o&&o(y),l&&l()},p={cursor:t?"pointer":"default",...u};return i.jsx("button",{type:"button",className:`${q.container} ${n}`,onClick:c,style:p,...s,children:e})}try{g.displayName="MenuItem",g.__docgenInfo={description:"",displayName:"MenuItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"unknown"}}}}}catch{}const N="_container_12vid_1",j={container:N};function H(){const e=r.useContext(f),n=r.useRef(null);return r.useEffect(()=>{if(!e.showMenu)return;const o=n.current;if(!o)return;const a=o.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');a==null||a.focus()},[e.showMenu]),{containerRef:n,context:e}}function x({children:e,className:n="",...o}){const{containerRef:a,context:u}=H();return i.jsx(v,{left:u.menuPos.left,top:u.menuPos.top,show:u.showMenu,onHide:u.onHideMenu,children:i.jsx("div",{ref:a,className:`${j.container} ${n}`,...o,children:e})})}try{x.displayName="MenuContent",x.__docgenInfo={description:"",displayName:"MenuContent",props:{}}}catch{}function R(e){const n=r.useContext(f),o=r.useRef(null),a=()=>{const t=o.current;if(!t){n.onShowMenu&&n.onShowMenu();return}const l=t.getBoundingClientRect();n.setMenuPos({top:`${l.bottom+n.offsetMenuPosVertical}px`,left:`${l.left+n.offsetMenuPosHorizontal}px`}),n.onShowMenu&&n.onShowMenu()};return{triggerRef:o,handleClick:t=>{e==null||e(t),a()},handleKeyDown:t=>{(t.key==="ArrowDown"||t.key==="ArrowUp")&&(t.preventDefault(),a())}}}function h({children:e,onClick:n,...o}){const a=r.useContext(f),{triggerRef:u,handleClick:s,handleKeyDown:t}=R(n);return i.jsx("div",{ref:u,children:i.jsx("button",{"aria-haspopup":"menu","aria-expanded":!!a.showMenu,onKeyDown:t,onClick:s,...o,children:e})})}try{h.displayName="MenuToggle",h.__docgenInfo={description:"",displayName:"MenuToggle",props:{}}}catch{}const M=Object.assign(_,{Content:x,Item:g,Toggle:h});try{M.displayName="Menu",M.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:null,description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:null,description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:null,description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const T=`function Example() {
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

render(<Example />)`,E={title:"Components/Menu",component:M,tags:["!autodocs"],parameters:{layout:"fullscreen"}},d={tags:["!dev"],render:()=>i.jsx(P,{code:T,noInline:!0,scope:{Menu:M}})};var w,C,b;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Menu
  }} />
}`,...(b=(C=d.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const $=["Example"],L=Object.freeze(Object.defineProperty({__proto__:null,Example:d,__namedExportsOrder:$,default:E},Symbol.toStringTag,{value:"Module"}));export{d as E,M,L as S,g as a};
