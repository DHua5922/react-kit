import { useCallback, useEffect, useRef } from 'react'

interface UsePopupPositionOptions {
  open: boolean
  horizontalOffset: number
  verticalOffset: number
  setPosition: (position: { top: string; left: string }) => void
}

export default function usePopupPosition<T extends HTMLElement>({
  open,
  horizontalOffset,
  verticalOffset,
  setPosition,
}: UsePopupPositionOptions) {
  const triggerRef = useRef<T>(null)

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current
    if (!trigger) return

    const rect = trigger.getBoundingClientRect()
    setPosition({
      top: `${rect.bottom + verticalOffset}px`,
      left: `${rect.left + horizontalOffset}px`,
    })
  }, [horizontalOffset, setPosition, verticalOffset])

  useEffect(() => {
    if (!open) return

    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [open, updatePosition])

  return { triggerRef, updatePosition }
}
