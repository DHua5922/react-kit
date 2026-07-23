import DatePickerParent from './DatePicker'
import DatePickerPopup from './DatePickerPopup'
import DatePickerToggle from './DatePickerToggle'

export type { DatePickerProps } from './DatePicker'
export type { DatePickerPopupProps } from './DatePickerPopup'
export type { DatePickerToggleProps } from './DatePickerToggle'

const DatePicker = Object.assign(DatePickerParent, {
  Toggle: DatePickerToggle,
  Popup: DatePickerPopup,
})

export default DatePicker
