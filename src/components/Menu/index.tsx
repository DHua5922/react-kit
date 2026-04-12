import MenuParent from './Menu'
import MenuItem from './MenuItem'
import MenuContent from './MenuContent'
import MenuToggle from './MenuToggle'

const Menu = Object.assign(MenuParent, {
  Content: MenuContent,
  Item: MenuItem,
  Toggle: MenuToggle,
})

export default Menu
