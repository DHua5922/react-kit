import { ButtonHTMLAttributes } from '../../../../node_modules/react';

export interface CalendarDayProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onClick'> {
    value: Date;
    onClick?: (value: Date) => void;
}
declare const CalendarDay: import('../../../../node_modules/react').ForwardRefExoticComponent<CalendarDayProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default CalendarDay;
//# sourceMappingURL=index.d.ts.map