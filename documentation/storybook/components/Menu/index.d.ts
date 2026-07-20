import { default as MenuParent } from './Menu';
import { default as MenuItem } from './MenuItem';
import { default as MenuContent } from './MenuContent';
import { default as MenuToggle } from './MenuToggle';

declare const Menu: typeof MenuParent & {
    Content: typeof MenuContent;
    Item: typeof MenuItem;
    Toggle: typeof MenuToggle;
};
export default Menu;
//# sourceMappingURL=index.d.ts.map