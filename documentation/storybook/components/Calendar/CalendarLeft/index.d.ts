import { ButtonHTMLAttributes } from '../../../../node_modules/react';

export interface CalendarLeftProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    onClick?: (date: Date) => void;
}
declare const CalendarLeft: import('../../../../node_modules/react').ForwardRefExoticComponent<CalendarLeftProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default CalendarLeft;
//# sourceMappingURL=index.d.ts.map