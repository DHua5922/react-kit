import React, { useContext } from 'react'
import styled from 'styled-components'
import Popup from '../Popup/Popup'
import MenuContext from './MenuContext'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`

function renderItems(children: React.ReactNode, onHideMenu?: () => void) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child
    }

    const element = child as React.ReactElement<{
      onClick?: React.MouseEventHandler<HTMLElement>
    }>

    return React.cloneElement(element, {
      ...element.props,
      onClick: (event: React.MouseEvent<HTMLElement>) => {
        element.props.onClick?.(event)
        onHideMenu?.()
      },
    })
  })
}

function MenuContent({ children, ...props }: Props) {
  const context = useContext(MenuContext)

  if (!context) {
    return <Container {...props}>{children}</Container>
  }

  return (
    <Popup
      left={context.menuPos.left}
      top={context.menuPos.top}
      show={context.showMenu}
      onHide={context.onHideMenu}
    >
      <Container {...props}>
        {renderItems(children, context.onHideMenu)}
      </Container>
    </Popup>
  )
}

export default MenuContent
