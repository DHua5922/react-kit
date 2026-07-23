import {
  cloneElement,
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
  ReactElement,
} from 'react'
import DatePickerContext from './DatePickerContext'

export type DatePickerToggleProps = ButtonHTMLAttributes<HTMLButtonElement>

function useDatePickerToggle(
  ref: ForwardedRef<HTMLButtonElement>,
  onClick?: MouseEventHandler<HTMLButtonElement>
) {
  const {
    showPopup,
    openPopup,
    offsetMenuPosHorizontal,
    offsetMenuPosVertical,
    setPopupPos,
  } = useContext(DatePickerContext)

  const triggerRef = useRef<HTMLButtonElement>(null)

  useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement)

  const updatePopupPosition = useCallback(() => {
    const trigger = triggerRef.current
    if (!trigger) return

    const rect = trigger.getBoundingClientRect()
    setPopupPos({
      top: `${rect.bottom + offsetMenuPosVertical}px`,
      left: `${rect.left + offsetMenuPosHorizontal}px`,
    })
  }, [offsetMenuPosHorizontal, offsetMenuPosVertical, setPopupPos])

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
    updatePopupPosition()
    openPopup()
  }

  return { handleClick, triggerRef }
}

const DatePickerToggle = forwardRef<HTMLButtonElement, DatePickerToggleProps>(
  function DatePickerToggle({ children, onClick, ...props }, ref) {
    const { handleClick, triggerRef } = useDatePickerToggle(ref, onClick)

    return cloneElement(children as ReactElement, {
      onClick: handleClick,
      ...props,
      ref: triggerRef,
    })
  }
)

export default DatePickerToggle
