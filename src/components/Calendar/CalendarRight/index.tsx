import { ButtonHTMLAttributes, useContext } from 'react'
import CalendarContext from '../CalendarContext'
import { addMonths } from 'date-fns'
import styles from './index.module.css'

interface Props extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> {
  onClick?: (date: Date) => void
}

export default function CalendarRight({
  children,
  onClick,
  className = '',
  ...props
}: Props) {
  const { currentMonth, setCurrentMonth } = useContext(CalendarContext)

  const handleClick = () => {
    const newMonth = addMonths(currentMonth, 1)
    setCurrentMonth(newMonth)
    onClick && onClick(newMonth)
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.container} ${className}`}
      {...props}
    >
      {children || <div>▶</div>}
    </button>
  )
}
