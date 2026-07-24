import { forwardRef, useContext, useImperativeHandle } from 'react'
import type {
  ButtonHTMLAttributes,
  ForwardedRef,
  MouseEventHandler,
} from 'react'
import DatePickerContext from './DatePickerContext'
import usePopupPosition from '@/internal/usePopupPosition'

export type DatePickerToggleProps = ButtonHTMLAttributes<HTMLButtonElement>

function useDatePickerToggle(
  ref: ForwardedRef<HTMLButtonElement>,
  onClick?: MouseEventHandler<HTMLButtonElement>
) {
  const {
    showPopup,
    closePopup,
    openPopup,
    popupOffsetHorizontal,
    popupOffsetVertical,
    setPopupPos,
  } = useContext(DatePickerContext)

  const { triggerRef, updatePosition } = usePopupPosition<HTMLButtonElement>({
    open: showPopup,
    horizontalOffset: popupOffsetHorizontal,
    verticalOffset: popupOffsetVertical,
    setPosition: setPopupPos,
  })

  useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event)

    if (event.defaultPrevented) return

    if (showPopup) {
      closePopup()
      return
    }

    updatePosition()
    openPopup()
  }

  return { handleClick, showPopup, triggerRef }
}

const DatePickerToggle = forwardRef<HTMLButtonElement, DatePickerToggleProps>(
  function DatePickerToggle(
    { children, onClick, type = 'button', ...props },
    ref
  ) {
    const { handleClick, showPopup, triggerRef } = useDatePickerToggle(
      ref,
      onClick
    )

    return (
      <button
        ref={triggerRef}
        type={type}
        {...props}
        aria-expanded={showPopup}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }
)

export default DatePickerToggle
