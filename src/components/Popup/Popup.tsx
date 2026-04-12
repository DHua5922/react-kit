import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface Props {
  left?: string
  top?: string
  children?: React.ReactNode
  show?: boolean
  onHide: () => void
}

interface PopupContainerProps {
  $left?: string
  $top?: string
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
`

const PopupContainer = styled.div<PopupContainerProps>`
  position: absolute;
  left: ${({ $left }) => $left || 'auto'};
  top: ${({ $top }) => $top || 'auto'};
`

function Popup({ children, left, top, show = false, onHide }: Props) {
  useEffect(() => {
    if (!show) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onHide()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onHide, show])

  if (!show) {
    return null
  }

  return createPortal(
    <Overlay onClick={onHide}>
      <PopupContainer
        $left={left}
        $top={top}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </PopupContainer>
    </Overlay>,
    document.body
  )
}

export default Popup
