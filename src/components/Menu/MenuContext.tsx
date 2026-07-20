import { createContext } from 'react'

interface DefaultValue {
  showMenu?: boolean
  onShowMenu?: () => void
  onHideMenu?: () => void
  onSelect?: (item: unknown) => void
  offsetMenuPosVertical: number
  offsetMenuPosHorizontal: number
  menuPos: {
    top: string
    left: string
  }
  setMenuPos: (position: { top: string; left: string }) => void
}

const MenuContext = createContext<DefaultValue>({
  showMenu: false,
  onShowMenu: () => {},
  onHideMenu: () => {},
  onSelect: () => {},
  offsetMenuPosVertical: 0,
  offsetMenuPosHorizontal: 0,
  menuPos: {
    top: '0px',
    left: '0px',
  },
  setMenuPos: () => {},
})

export default MenuContext
