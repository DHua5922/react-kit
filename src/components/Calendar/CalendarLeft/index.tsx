import { useContext, ButtonHTMLAttributes, forwardRef } from 'react'
import CalendarContext from '../CalendarContext'
import { subMonths } from 'date-fns'
import styles from './index.module.css'

export interface CalendarLeftProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> {
  onClick?: (date: Date) => void
}

const CalendarLeft = forwardRef<HTMLButtonElement, CalendarLeftProps>(
  function CalendarLeft({ children, onClick, className = '', ...props }, ref) {
    const { currentMonth, setCurrentMonth } = useContext(CalendarContext)

    const handleClick = () => {
      const newMonth = subMonths(currentMonth, 1)
      setCurrentMonth(newMonth)
      onClick && onClick(newMonth)
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
