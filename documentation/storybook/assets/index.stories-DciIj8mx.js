import{j as c}from"./jsx-runtime-DiklIkkE.js";import{r as u}from"./index-DRjF_FHU.js";import{P as v}from"./index-XyLNmAHg.js";import{L as I}from"./index-Do02Yr6G.js";const P={showMenu:!1,onShowMenu:()=>{},onHideMenu:()=>{},onSelect:()=>{},offsetMenuPosVertical:0,offsetMenuPosHorizontal:0,menuPos:{top:"0px",left:"0px"},setMenuPos:()=>{}},m=u.createContext(P);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}function V({showMenu:n,defaultShowMenu:t=!1,onShowMenu:r,onHideMenu:o,offsetMenuPosVertical:s=0,offsetMenuPosHorizontal:a=0,onSelect:e}){const[l,i]=u.useState(t),[f,_]=u.useState({top:"auto",left:"auto"}),d=typeof n=="boolean",M=d?n:l;return u.useMemo(()=>({showMenu:M,onShowMenu:()=>{d||i(!0),r&&r()},onHideMenu:()=>{d||i(!1),o&&o()},offsetMenuPosVertical:s,offsetMenuPosHorizontal:a,menuPos:f,setMenuPos:_,onSelect:e||(()=>{})}),[d,f,a,s,o,r,e,M])}function g({children:n,showMenu:t,defaultShowMenu:r=!1,onShowMenu:o,onHideMenu:s,offsetMenuPosVertical:a=0,offsetMenuPosHorizontal:e=0,onSelect:l}){const i=V({showMenu:t,defaultShowMenu:r,onShowMenu:o,onHideMenu:s,offsetMenuPosVertical:a,offsetMenuPosHorizontal:e,onSelect:l});return c.jsx(m.Provider,{value:i,children:n})}try{g.displayName="Menu",g.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:{value:"false"},description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const k="_container_2j9z2_1",q={container:k},x=u.forwardRef(function({children:t,className:r="",onClick:o,value:s,style:a,...e},l){const{onSelect:i,onHideMenu:f}=u.useContext(m),_=M=>{i&&i(s),o&&o(M),f&&f()},d={cursor:i?"pointer":"default",...a};return c.jsx("button",{ref:l,type:"button",className:`${q.container} ${r}`,onClick:_,style:d,...e,children:t})});try{x.displayName="MenuItem",x.__docgenInfo={description:"",displayName:"MenuItem",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"unknown"}}}}}catch{}const H="_container_12vid_1",N={container:H};function j(){const n=u.useContext(m),t=u.useRef(null);return u.useEffect(()=>{if(!n.showMenu)return;const r=t.current;if(!r)return;const o=r.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');o==null||o.focus()},[n.showMenu]),{containerRef:t,context:n}}const h=u.forwardRef(function({children:t,className:r="",...o},s){const{containerRef:a,context:e}=j();return u.useImperativeHandle(s,()=>a.current),c.jsx(v,{left:e.menuPos.left,top:e.menuPos.top,show:e.showMenu,onHide:e.onHideMenu,children:c.jsx("div",{ref:a,className:`${N.container} ${r}`,...o,children:t})})});try{h.displayName="MenuContent",h.__docgenInfo={description:"",displayName:"MenuContent",props:{}}}catch{}function R(n){const t=u.useContext(m),r=u.useRef(null),o=()=>{const e=r.current;if(!e){t.onShowMenu&&t.onShowMenu();return}const l=e.getBoundingClientRect();t.setMenuPos({top:`${l.bottom+t.offsetMenuPosVertical}px`,left:`${l.left+t.offsetMenuPosHorizontal}px`}),t.onShowMenu&&t.onShowMenu()};return{triggerRef:r,handleClick:e=>{n==null||n(e),o()},handleKeyDown:e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),o())}}}const S=u.forwardRef(function({children:t,onClick:r,...o},s){const a=u.useContext(m),{triggerRef:e,handleClick:l,handleKeyDown:i}=R(r);return c.jsx("div",{ref:e,children:c.jsx("button",{ref:s,type:"button","aria-haspopup":"menu","aria-expanded":!!a.showMenu,onKeyDown:i,onClick:l,...o,children:t})})});try{S.displayName="MenuToggle",S.__docgenInfo={description:"",displayName:"MenuToggle",props:{}}}catch{}const y=Object.assign(g,{Content:h,Item:x,Toggle:S});try{y.displayName="Menu",y.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:null,description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:null,description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:null,description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: unknown) => void) | undefined"}}}}}catch{}const T=`function Example() {
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

render(<Example />)`,E={title:"Components/Menu",component:y,tags:["!autodocs"],parameters:{layout:"fullscreen"}},p={tags:["!dev"],render:()=>c.jsx(I,{code:T,noInline:!0,scope:{Menu:y}})};var w,C,b;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <LiveCodeBlock code={liveCode} noInline scope={{
    Menu
  }} />
}`,...(b=(C=p.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const $=["Example"],L=Object.freeze(Object.defineProperty({__proto__:null,Example:p,__namedExportsOrder:$,default:E},Symbol.toStringTag,{value:"Module"}));export{p as E,y as M,L as S,x as a};
