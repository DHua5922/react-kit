import{j as u}from"./jsx-runtime-DFAAy_2V.js";import{r as d,R as c}from"./index-Bc2G9s8g.js";import{u as q}from"./styled-components.browser.esm-BWXllbBW.js";import{P as E}from"./index-Cw-l8Em6.js";import{L as N}from"./LiveCodeBlock-ObSKZki_.js";import"./index-Dy83Z4lh.js";const V=d.createContext(null);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const v=q.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;function R(e,n){return c.Children.map(e,t=>{if(!c.isValidElement(t))return t;const r=t;return c.cloneElement(r,{...r.props,onClick:o=>{var s,i;(i=(s=r.props).onClick)==null||i.call(s,o),n==null||n()}})})}function f({children:e,...n}){const t=d.useContext(V);return t?u.jsx(E,{left:t.menuPos.left,top:t.menuPos.top,show:t.showMenu,onHide:t.onHideMenu,children:u.jsx(v,{...n,children:R(e,t.onHideMenu)})}):u.jsx(v,{...n,children:e})}try{f.displayName="MenuContent",f.__docgenInfo={description:"",displayName:"MenuContent",props:{}}}catch{}function _({children:e,onClick:n,type:t,...r}){const o=d.useContext(V),s=d.useRef(null);if(!o)return null;const i=()=>{const a=s.current;if(!a){o.onShowMenu();return}const l=a.getBoundingClientRect();o.setMenuPos({top:`${l.bottom+o.offsetMenuPosVertical}px`,left:`${l.left+o.offsetMenuPosHorizontal}px`}),o.onShowMenu()},x=a=>{n==null||n(a),i()};if(c.isValidElement(e)){const a=e;return u.jsx("div",{ref:s,children:c.cloneElement(a,{...r,...a.props,onClick:l=>{var p,m;(m=(p=a.props).onClick)==null||m.call(p,l),n==null||n(l),i()}})})}return u.jsx("div",{ref:s,children:u.jsx("button",{type:t||"button",onClick:x,...r,children:e})})}try{_.displayName="MenuToggle",_.__docgenInfo={description:"",displayName:"MenuToggle",props:{}}}catch{}function H(e){return c.Children.toArray(e).some(n=>c.isValidElement(n)&&(n.type===_||n.type===f))}function h({children:e,showMenu:n,defaultShowMenu:t=!1,onShowMenu:r,onHideMenu:o,offsetMenuPosVertical:s=0,offsetMenuPosHorizontal:i=0,...x}){const[a,l]=d.useState(t),[p,m]=d.useState({top:"auto",left:"auto"}),M=typeof n=="boolean",b=M?n:a,j=d.useMemo(()=>({showMenu:b,onShowMenu:()=>{M||l(!0),r&&r()},onHideMenu:()=>{M||l(!1),o&&o()},offsetMenuPosVertical:s,offsetMenuPosHorizontal:i,menuPos:p,setMenuPos:m}),[M,p,i,s,o,r,b]);return u.jsx(V.Provider,{value:j,children:H(e)?e:u.jsx(f,{...x,children:e})})}try{h.displayName="Menu",h.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:{value:"false"},description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}}}}}catch{}const C=q.div`
  padding: 8px;
`;try{C.displayName="MenuItem",C.__docgenInfo={description:"",displayName:"MenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}}}}}catch{}const g=Object.assign(h,{Content:f,Item:C,Toggle:_});try{g.displayName="Menu",g.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:null,description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:null,description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:null,description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}}}}}catch{}const w=`function Example() {
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

render(<Example />)`,O={title:"Components/Menu",component:g,tags:["!autodocs"],parameters:{layout:"padded"}},y={parameters:{docs:{source:{code:w}}},render:()=>u.jsx(N,{code:w,noInline:!0,scope:{Menu:g}})};var S,I,P;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(I=y.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const $=["Example"];export{y as Example,$ as __namedExportsOrder,O as default};
