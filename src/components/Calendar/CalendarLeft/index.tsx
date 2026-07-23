import {
  useContext,
  ButtonHTMLAttributes,
  forwardRef,
  MouseEventHandler,
} from 'react'
import CalendarContext from '../CalendarContext'
import { subMonths } from 'date-fns'
import styles from './index.module.css'

export type CalendarLeftProps = ButtonHTMLAttributes<HTMLButtonElement>

const CalendarLeft = forwardRef<HTMLButtonElement, CalendarLeftProps>(
  function CalendarLeft({ children, onClick, className = '', ...props }, ref) {
    const { currentMonth, setCurrentMonth } = useContext(CalendarContext)

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      onClick?.(event)

      if (event.defaultPrevented) {
        return
      }

      const newMonth = subMonths(currentMonth, 1)
      setCurrentMonth(newMonth)
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={`${styles.container} ${className}`}
        {...props}
      >
        {children || <div>◀</div>}
      </button>
    )
  }
)

export default CalendarLeft
