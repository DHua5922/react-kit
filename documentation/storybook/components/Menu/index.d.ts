import { default as MenuParent } from './Menu';
import { default as MenuContent } from './MenuContent';
import { default as MenuToggle } from './MenuToggle';

declare const Menu: typeof MenuParent & {
    Content: typeof MenuContent;
    Item: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
    Toggle: typeof MenuToggle;
};
export default Menu;
//# sourceMappingURL=index.d.ts.map