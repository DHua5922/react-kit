import { ReactNode, useMemo, useState, isValidElement, Children } from 'react'
import MenuContext from './MenuContext'
import MenuContent from './MenuContent'
import MenuToggle from './MenuToggle'

interface Props {
  children?: ReactNode
  showMenu?: boolean
  defaultShowMenu?: boolean
  onShowMenu?: () => void
  onHideMenu?: () => void
  offsetMenuPosVertical?: number
  offsetMenuPosHorizontal?: number
  onSelect?: (item: unknown) => void
}

export default function Menu({
  children,
  showMenu,
  defaultShowMenu = false,
  onShowMenu,
  onHideMenu,
  offsetMenuPosVertical = 0,
  offsetMenuPosHorizontal = 0,
  onSelect,
  ...props
}: Props) {
  const [internalShowMenu, setInternalShowMenu] = useState(defaultShowMenu)
  const [menuPos, setMenuPos] = useState({
    top: 'auto',
    left: 'auto',
  })
  const isControlled = typeof showMenu === 'boolean'
  const visible = isControlled ? showMenu : internalShowMenu

  const contextValue = useMemo(
    () => ({
      showMenu: visible,
      onShowMenu: () => {
        if (!isControlled) {
          setInternalShowMenu(true)
        }

        onShowMenu && onShowMenu()
      },
      onHideMenu: () => {
        if (!isControlled) {
          setInternalShowMenu(false)
        }

        onHideMenu && onHideMenu()
      },
      offsetMenuPosVertical,
      offsetMenuPosHorizontal,
      menuPos,
      setMenuPos,
      onSelect: onSelect || (() => {}),
    }),
    [
      isControlled,
      menuPos,
      offsetMenuPosHorizontal,
      offsetMenuPosVertical,
      onHideMenu,
      onShowMenu,
      onSelect,
      visible,
    ]
  )

  return (
    <MenuContext.Provider value={contextValue}>
      {hasCompoundChildren(children) ? (
        children
      ) : (
        <MenuContent {...props}>{children}</MenuContent>
      )}
    </MenuContext.Provider>
  )
}

function hasCompoundChildren(children: ReactNode) {
  return Children.toArray(children).some(
    (child) =>
      isValidElement(child) &&
      (child.type === MenuToggle || child.type === MenuContent)
  )
}
