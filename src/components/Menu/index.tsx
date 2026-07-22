import MenuParent from './Menu'
import MenuItem from './MenuItem'
import MenuContent from './MenuContent'
import MenuToggle from './MenuToggle'

export type { MenuProps } from './Menu'
export type { MenuContentProps } from './MenuContent'
export type { MenuItemProps } from './MenuItem'
export type { MenuToggleProps } from './MenuToggle'

const Menu = Object.assign(MenuParent, {
  Content: MenuContent,
  Item: MenuItem,
  Toggle: MenuToggle,
})

export default Menu
