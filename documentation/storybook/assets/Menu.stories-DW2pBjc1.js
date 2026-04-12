import{j as o}from"./jsx-runtime-DFAAy_2V.js";import{r as c,R as p}from"./index-Bc2G9s8g.js";import{u as B,L as N}from"./LiveCodeBlock-MP6rWtjX.js";import{P as H}from"./Popup-DTBhATLJ.js";import"./index-Dy83Z4lh.js";const S=c.createContext(null);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const P=B.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;function T(n,e){return p.Children.map(n,t=>{if(!p.isValidElement(t))return t;const i=t;return p.cloneElement(i,{...i.props,onClick:r=>{var d,l;(l=(d=i.props).onClick)==null||l.call(d,r),e==null||e()}})})}function m({children:n,...e}){const t=c.useContext(S);return t?o.jsx(H,{left:t.menuPos.left,top:t.menuPos.top,show:t.showMenu,onHide:t.onHideMenu,children:o.jsx(P,{...e,children:T(n,t.onHideMenu)})}):o.jsx(P,{...e,children:n})}try{m.displayName="MenuContent",m.__docgenInfo={description:"",displayName:"MenuContent",props:{}}}catch{}function _({children:n,onClick:e,type:t,...i}){const r=c.useContext(S),d=c.useRef(null);if(!r)return null;const l=()=>{const s=d.current;if(!s){r.onShowMenu();return}const u=s.getBoundingClientRect();r.setMenuPos({top:`${u.bottom+r.offsetMenuPosVertical}px`,left:`${u.left+r.offsetMenuPosHorizontal}px`}),r.onShowMenu()},h=s=>{e==null||e(s),l()};if(p.isValidElement(n)){const s=n;return o.jsx("div",{ref:d,children:p.cloneElement(s,{...i,...s.props,onClick:u=>{var f,g;(g=(f=s.props).onClick)==null||g.call(f,u),e==null||e(u),l()}})})}return o.jsx("div",{ref:d,children:o.jsx("button",{type:t||"button",onClick:h,...i,children:n})})}try{_.displayName="MenuToggle",_.__docgenInfo={description:"",displayName:"MenuToggle",props:{}}}catch{}function z(n){return p.Children.toArray(n).some(e=>p.isValidElement(e)&&(e.type===_||e.type===m))}function b({children:n,showMenu:e,defaultShowMenu:t=!1,onShowMenu:i,onHideMenu:r,offsetMenuPosVertical:d=0,offsetMenuPosHorizontal:l=0,...h}){const[s,u]=c.useState(t),[f,g]=c.useState({top:"auto",left:"auto"}),M=typeof e=="boolean",v=M?e:s,E=c.useMemo(()=>({showMenu:v,onShowMenu:()=>{M||u(!0),i&&i()},onHideMenu:()=>{M||u(!1),r&&r()},offsetMenuPosVertical:d,offsetMenuPosHorizontal:l,menuPos:f,setMenuPos:g}),[M,f,l,d,r,i,v]);return o.jsx(S.Provider,{value:E,children:z(n)?n:o.jsx(m,{...h,children:n})})}try{b.displayName="Menu",b.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:{value:"false"},description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:{value:"0"},description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}}}}}catch{}const C=B.div`
  padding: 8px;
`;try{C.displayName="MenuItem",C.__docgenInfo={description:"",displayName:"MenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}}}}}catch{}const a=Object.assign(b,{Content:m,Item:C,Toggle:_});try{a.displayName="Menu",a.__docgenInfo={description:"",displayName:"Menu",props:{showMenu:{defaultValue:null,description:"",name:"showMenu",required:!1,type:{name:"boolean | undefined"}},defaultShowMenu:{defaultValue:null,description:"",name:"defaultShowMenu",required:!1,type:{name:"boolean | undefined"}},onShowMenu:{defaultValue:null,description:"",name:"onShowMenu",required:!1,type:{name:"(() => void) | undefined"}},onHideMenu:{defaultValue:null,description:"",name:"onHideMenu",required:!1,type:{name:"(() => void) | undefined"}},offsetMenuPosVertical:{defaultValue:null,description:"",name:"offsetMenuPosVertical",required:!1,type:{name:"number | undefined"}},offsetMenuPosHorizontal:{defaultValue:null,description:"",name:"offsetMenuPosHorizontal",required:!1,type:{name:"number | undefined"}}}}}catch{}const I=`function Example() {
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

render(<Example />)`,D={title:"Components/Menu",component:a,tags:["autodocs"],parameters:{layout:"padded"}},y={render:function(){const[e,t]=c.useState("Profile");return o.jsxs("div",{style:{minHeight:240,padding:32,background:"#f8fafc"},children:[o.jsxs("div",{style:{marginBottom:16,color:"#475569",fontSize:14},children:["Selected: ",e]}),o.jsxs(a,{offsetMenuPosVertical:8,children:[o.jsx(a.Toggle,{style:{padding:"10px 14px",borderRadius:10,border:"1px solid #cbd5e1",background:"#ffffff",cursor:"pointer"},children:"Open menu"}),o.jsxs(a.Content,{style:{minWidth:180,padding:8},children:[o.jsx(a.Item,{style:{padding:10,cursor:"pointer",borderRadius:8},onClick:()=>t("Profile"),children:"Profile"}),o.jsx(a.Item,{style:{padding:10,cursor:"pointer",borderRadius:8},onClick:()=>t("Billing"),children:"Billing"}),o.jsx(a.Item,{style:{padding:10,cursor:"pointer",borderRadius:8},onClick:()=>t("Sign out"),children:"Sign out"})]})]})]})}},x={parameters:{docs:{source:{code:I}}},render:()=>o.jsx("div",{style:{maxWidth:1080,margin:"0 auto"},children:o.jsx(N,{title:"Menu Live Playground",code:I,editorHeight:"360px",noInline:!0,scope:{Menu:a}})})};var V,w,j;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render() {
    const [selection, setSelection] = useState('Profile');
    return <div style={{
      minHeight: 240,
      padding: 32,
      background: '#f8fafc'
    }}>
        <div style={{
        marginBottom: 16,
        color: '#475569',
        fontSize: 14
      }}>
          Selected: {selection}
        </div>

        <Menu offsetMenuPosVertical={8}>
          <Menu.Toggle style={{
          padding: '10px 14px',
          borderRadius: 10,
          border: '1px solid #cbd5e1',
          background: '#ffffff',
          cursor: 'pointer'
        }}>
            Open menu
          </Menu.Toggle>

          <Menu.Content style={{
          minWidth: 180,
          padding: 8
        }}>
            <Menu.Item style={{
            padding: 10,
            cursor: 'pointer',
            borderRadius: 8
          }} onClick={() => setSelection('Profile')}>
              Profile
            </Menu.Item>
            <Menu.Item style={{
            padding: 10,
            cursor: 'pointer',
            borderRadius: 8
          }} onClick={() => setSelection('Billing')}>
              Billing
            </Menu.Item>
            <Menu.Item style={{
            padding: 10,
            cursor: 'pointer',
            borderRadius: 8
          }} onClick={() => setSelection('Sign out')}>
              Sign out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </div>;
  }
}`,...(j=(w=y.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var R,k,q;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(q=(k=x.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const F=["BasicMenu","LiveExample"];export{y as BasicMenu,x as LiveExample,F as __namedExportsOrder,D as default};
