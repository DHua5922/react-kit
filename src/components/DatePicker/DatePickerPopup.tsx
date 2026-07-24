import { forwardRef, useContext } from 'react'
import DatePickerContext from './DatePickerContext'
import Popup, { PopupProps } from '../Popup'

export type DatePickerPopupProps = Omit<
  PopupProps,
  'show' | 'left' | 'top' | 'onHide'
>

const DatePickerPopup = forwardRef<HTMLDivElement, DatePickerPopupProps>(
  function DatePickerPopup({ children, ...props }, ref) {
    const context = useContext(DatePickerContext)

    return (
      <Popup
        ref={ref}
        {...props}
        show={context.showPopup}
        left={context.popupPos.left}
        top={context.popupPos.top}
        onHide={context.closePopup}
      >
        {children}
      </Popup>
    )
  }
)

export default DatePickerPopup
