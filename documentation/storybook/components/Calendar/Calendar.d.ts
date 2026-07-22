import { HTMLAttributes } from '../../../node_modules/react';

export interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
    value: Date;
    onChange: (date: Date) => void;
}
declare const Calendar: import('../../../node_modules/react').ForwardRefExoticComponent<CalendarProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map