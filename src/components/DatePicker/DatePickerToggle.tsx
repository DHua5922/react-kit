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
    open,
    setOpen,
    popupOffsetHorizontal,
    popupOffsetVertical,
    setPopupPos,
  } = useContext(DatePickerContext)

  const { triggerRef, updatePosition } = usePopupPosition<HTMLButtonElement>({
    open,
    horizontalOffset: popupOffsetHorizontal,
    verticalOffset: popupOffsetVertical,
    setPosition: setPopupPos,
  })

  useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event)

    if (event.defaultPrevented) return

    if (open) {
      setOpen(false)
      return
    }

    updatePosition()
    setOpen(true)
  }

  return { handleClick, open, triggerRef }
}

const DatePickerToggle = forwardRef<HTMLButtonElement, DatePickerToggleProps>(
  function DatePickerToggle(
    { children, onClick, type = 'button', ...props },
    ref
  ) {
    const { handleClick, open, triggerRef } = useDatePickerToggle(ref, onClick)

    return (
      <button
        ref={triggerRef}
        type={type}
        {...props}
        aria-expanded={open}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }
)

export default DatePickerToggle
