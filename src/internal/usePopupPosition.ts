import { useCallback, useEffect, useRef } from 'react'
import type { RefObject } from 'react'

interface UsePopupPositionOptions<T extends HTMLElement> {
  open: boolean
  horizontalOffset: number
  verticalOffset: number
  setPosition: (position: { top: string; left: string }) => void
  triggerRef?: RefObject<T>
}

export default function usePopupPosition<T extends HTMLElement>({
  open,
  horizontalOffset,
  verticalOffset,
  setPosition,
  triggerRef: providedTriggerRef,
}: UsePopupPositionOptions<T>) {
  const internalTriggerRef = useRef<T>(null)
  const triggerRef = providedTriggerRef ?? internalTriggerRef

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current
    if (!trigger) return

    const rect = trigger.getBoundingClientRect()
    setPosition({
      top: `${rect.bottom + verticalOffset}px`,
      left: `${rect.left + horizontalOffset}px`,
    })
  }, [horizontalOffset, setPosition, triggerRef, verticalOffset])

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
