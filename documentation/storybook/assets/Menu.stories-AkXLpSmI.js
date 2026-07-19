import{j as i}from"./jsx-runtime-DFAAy_2V.js";import{r as d,R as c}from"./index-Bc2G9s8g.js";import{u as q}from"./styled-components.browser.esm-BWXllbBW.js";import{P as E}from"./index-Cw-l8Em6.js";import{L as N}from"./LiveCodeBlock-ObSKZki_.js";import"./index-Dy83Z4lh.js";const v=d.createContext(null);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const b=q.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;function H(e,n){return c.Children.map(e,t=>{if(!c.isValidElement(t))return t;const r=t;return c.cloneElement(r,{...r.props,onClick:o=>{var u,s;(s=(u=r.props).onClick)==null||s.call(u,o),n==null||n()}})})}function f({children:e,...n}){const t=d.useContext(v);return t?i.jsx(E,{left:t.menuPos.left,top:t.menuPos.top,show:t.showMenu,onHide:t.onHideMenu,children:i.jsx(b,{...n,children:H(e,t.onHideMenu)})}):i.jsx(b,{...n,children:e})}try{f.displayName="MenuContent",f.__docgenInfo={description:"",displayName:"MenuContent",props:{}}}catch{}function g({children:e,onClick:n,type:t,...r}){const o=d.useContext(v),u=d.useRef(null);if(!o)return null;const s=()=>{const a=u.current;if(!a){o.onShowMenu();return}const l=a.getBoundingClientRect();o.setMenuPos({top:`${l.bottom+o.offsetMenuPosVertical}px`,left:`${l.left+o.offsetMenuPosHorizontal}px`}),o.onShowMenu()},x=a=>{n==null||n(a),s()};if(c.isValidElement(e)){const a=e;return i.jsx("div",{ref:u,children:c.cloneElement(a,{...r,...a.props,onClick:l=>{var p,m;(m=(p=a.props).onClick)==null||m.call(p,l),n==null||n(l),s()}})})}return i.jsx("div",{ref:u,children:i.jsx("button",{type:t||"button",onClick:x,...r,children:e})})}try{g.displayName="MenuToggle",g.__docgenInfo={description:"",displayName:"MenuToggle",props:{}}}catch{}function R(e){return c.Children.toArray(e).some(n=>c.isValidElement(n)&&(n.type===g||n.type===f))}function h({children:e,showMenu:n,defaultShowMenu:t=!1,onShowMenu:r,onHideMenu:o,offsetMenuPosVertical:u=0,offsetMenuPosHorizontal:s=0,...x}){const[a,l]=d.useState(t),[p,m]=d.useState({top:"auto",left:"auto"}),M=typeof n=="boolean",V=M?n:a,j=d.useMemo(()=>({showMenu:V,onShowMenu:()=>{M||l(!0),r&&r()},onHideMenu:()=>{M||l(!1),o&&o()},offsetMenuPosVertical:u,offsetMenuPosHorizontal:s,menuPos:p,setMenuPos:m}),[M,p,s,u,o,r,V]);return i.jsx(v.Provider,{value:j,children:R(e)?e:i.jsx(f,{...x,children:e})})}try{h.displayName="Menu",h.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:{value:"false"},description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}}}}}catch{}const C=q.div`
  padding: 8px;
`;try{C.displayName="MenuItem",C.__docgenInfo={description:"",displayName:"MenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}}}}}catch{}const _=Object.assign(h,{Content:f,Item:C,Toggle:g});try{_.displayName="Menu",_.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:null,description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:null,description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:null,description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}}}}}catch{}const w=`function Example() {
  const [selection, setSelection] = React.useState('Profile')

  return (
    <div style={{ minHeight: 220, padding: 32, background: '#f8fafc' }}>
      <div style={{ marginBottom: 16, color: '#475569', fontSize: 14 }}>
        Selected: {selection}
      </div>

      <Menu offsetMenuPosVertical={8}>
        <Menu.Toggle
          style={{
            padding: '10px 14px',
            borderRadius: 10,
            border: '1px solid #cbd5e1',
            background: '#ffffff',
            cursor: 'pointer',
          }}
        >
          Open menu
        </Menu.Toggle>

        <Menu.Content style={{ minWidth: 180, padding: 8 }}>
          <Menu.Item onClick={() => setSelection('Profile')}>Profile</Menu.Item>
          <Menu.Item onClick={() => setSelection('Billing')}>Billing</Menu.Item>
          <Menu.Item onClick={() => setSelection('Sign out')}>Sign out</Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  )
}

render(<Example />)`,O={title:"Components/Menu",component:_,tags:["autodocs"],parameters:{layout:"padded"}},y={parameters:{docs:{source:{code:w}}},render:()=>i.jsx("div",{style:{maxWidth:1080,margin:"0 auto"},children:i.jsx(N,{title:"Menu Live Playground",code:w,editorHeight:"360px",noInline:!0,scope:{Menu:_}})})};var S,P,I;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      <LiveCodeBlock title="Menu Live Playground" code={liveCode} editorHeight="360px" noInline scope={{
      Menu
    }} />
    </div>
}`,...(I=(P=y.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const W=["Example"];export{y as Example,W as __namedExportsOrder,O as default};
