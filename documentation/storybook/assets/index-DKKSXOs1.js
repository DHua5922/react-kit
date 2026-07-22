import{j as e}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as c}from"./index-ChEI-nsM.js";import{M as t,C as d,A as i}from"./index-Dr5d_Lhj.js";import{S as r,E as a,A as l,a as h}from"./index.stories-Bz9WW4U3.js";import"./index-DRjF_FHU.js";import"./iframe-CbuPzcZH.js";import"./index-BKlBQwGM.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";import"./index-Do02Yr6G.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:r}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(n.p,{children:`Accordions organize related content into expandable sections. They work well
when users need to scan several headings while viewing only one or a few
sections at a time.`}),`
`,e.jsx(n.h2,{id:"usage-guidance",children:"Usage guidance"}),`
`,e.jsx(n.p,{children:"Use an accordion when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Content can be divided into clearly labeled sections."}),`
`,e.jsx(n.li,{children:"Showing everything simultaneously would make the page difficult to scan."}),`
`,e.jsx(n.li,{children:"Users do not need to compare the hidden sections side by side."}),`
`]}),`
`,e.jsx(n.p,{children:"Avoid using an accordion for essential information that users must always see."}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:`Accordion headers should clearly describe their associated content. Users
should be able to operate each header using only a keyboard and understand
whether the section is expanded.`}),`
`,e.jsxs(n.p,{children:[`Consumers are responsible for supplying the ARIA relationships between each
header and its associated panel. Use attributes such as `,e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"aria-controls"}),`,
and `,e.jsx(n.code,{children:"aria-labelledby"})," to connect them when appropriate."]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsxs(n.p,{children:[`Accordion is a controlled component. Supply the expanded item keys through
`,e.jsx(n.code,{children:"activeKeys"}),", and update them when ",e.jsx(n.code,{children:"onSelect"})," receives a selected item key."]}),`
`,e.jsxs(n.p,{children:["In the example below, clicking the header updates ",e.jsx(n.code,{children:"activeKeys"}),` to expand or
collapse its content.`]}),`
`,e.jsx(d,{of:a,sourceState:"none",layout:"fullscreen"}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"accordion-1",children:"Accordion"}),`
`,e.jsxs(n.p,{children:["Accepts standard props for an HTML ",e.jsx(n.code,{children:"<div>"})," element, except ",e.jsx(n.code,{children:"onSelect"}),`, which is
used to receive the selected accordion item key.`]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"accordionitem",children:"Accordion.Item"}),`
`,e.jsxs(n.p,{children:["Accepts all standard props for an HTML ",e.jsx(n.code,{children:"<div>"}),` element:
`,e.jsx(n.code,{children:"React.HTMLAttributes<HTMLDivElement>"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"accordionheader",children:"Accordion.Header"}),`
`,e.jsxs(n.p,{children:["Accepts all standard props for an HTML ",e.jsx(n.code,{children:"<button>"}),` element:
`,e.jsx(n.code,{children:"React.ButtonHTMLAttributes<HTMLButtonElement>"}),"."]}),`
`,e.jsx(n.h3,{id:"accordionbody",children:"Accordion.Body"}),`
`,e.jsxs(n.p,{children:["Accepts all standard props for an HTML ",e.jsx(n.code,{children:"<div>"}),` element:
`,e.jsx(n.code,{children:"React.HTMLAttributes<HTMLDivElement>"}),"."]})]})}function w(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{w as default};
