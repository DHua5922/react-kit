import { forwardRef, useContext } from 'react'
import DatePickerContext from './DatePickerContext'
import Popup, { PopupProps } from '../Popup'

export type DatePickerPopupProps = Omit<
  PopupProps,
  'open' | 'left' | 'top' | 'onOpenChange'
>

const DatePickerPopup = forwardRef<HTMLDivElement, DatePickerPopupProps>(
  function DatePickerPopup({ children, ...props }, ref) {
    const context = useContext(DatePickerContext)

    return (
      <Popup
        ref={ref}
        {...props}
        open={context.showPopup}
        left={context.popupPos.left}
        top={context.popupPos.top}
        onOpenChange={(open) => {
          if (!open) context.closePopup()
        }}
      >
        {children}
      </Popup>
    )
  }
)

export default DatePickerPopup
