import {
  ButtonHTMLAttributes,
  forwardRef,
  MouseEventHandler,
  useContext,
} from 'react'
import CalendarContext from '../CalendarContext'
import { addMonths } from 'date-fns'
import styles from './index.module.css'

export type CalendarRightProps = ButtonHTMLAttributes<HTMLButtonElement>

const CalendarRight = forwardRef<HTMLButtonElement, CalendarRightProps>(
  function CalendarRight({ children, onClick, className = '', ...props }, ref) {
    const { currentMonth, setCurrentMonth } = useContext(CalendarContext)

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      onClick?.(event)

      if (!event.defaultPrevented) {
        const newMonth = addMonths(currentMonth, 1)
        setCurrentMonth(newMonth)
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={`${styles.container} ${className}`}
        {...props}
      >
        {children || <div>▶</div>}
      </button>
    )
  }
)

export default CalendarRight
