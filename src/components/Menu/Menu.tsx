import { ReactNode, useMemo, useState } from 'react'
import MenuContext from './MenuContext'

interface MenuHookProps {
  showMenu?: boolean
  defaultShowMenu?: boolean
  onShowMenu?: () => void
  onHideMenu?: () => void
  offsetMenuPosVertical?: number
  offsetMenuPosHorizontal?: number
  onSelect?: (item: unknown) => void
}

export interface MenuProps extends MenuHookProps {
  children?: ReactNode
}

function useMenu({
  showMenu,
  defaultShowMenu = false,
  onShowMenu,
  onHideMenu,
  offsetMenuPosVertical = 0,
  offsetMenuPosHorizontal = 0,
  onSelect,
}: MenuHookProps) {
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

  return contextValue
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
}: MenuProps) {
  const contextValue = useMenu({
    showMenu,
    defaultShowMenu,
    onShowMenu,
    onHideMenu,
    offsetMenuPosVertical,
    offsetMenuPosHorizontal,
    onSelect,
  })

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  )
}
