import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import type {
  ButtonHTMLAttributes,
  ForwardedRef,
  MouseEventHandler,
} from 'react'
import DatePickerContext from './DatePickerContext'

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

  const triggerRef = useRef<HTMLButtonElement>(null)

  useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement)

  const updatePopupPosition = useCallback(() => {
    const trigger = triggerRef.current
    if (!trigger) return

    const rect = trigger.getBoundingClientRect()
    setPopupPos({
      top: `${rect.bottom + popupOffsetVertical}px`,
      left: `${rect.left + popupOffsetHorizontal}px`,
    })
  }, [popupOffsetHorizontal, popupOffsetVertical, setPopupPos])

  useEffect(() => {
    if (!showPopup) return undefined

    updatePopupPosition()
    window.addEventListener('scroll', updatePopupPosition, true)
    window.addEventListener('resize', updatePopupPosition)

    return () => {
      window.removeEventListener('scroll', updatePopupPosition, true)
      window.removeEventListener('resize', updatePopupPosition)
    }
  }, [showPopup, updatePopupPosition])

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event)

    if (event.defaultPrevented) return

    if (showPopup) {
      closePopup()
      return
    }

    updatePopupPosition()
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
