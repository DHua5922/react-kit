import { ButtonHTMLAttributes } from '../../../../node_modules/react';

export interface CalendarRightProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    onClick?: (date: Date) => void;
}
declare const CalendarRight: import('../../../../node_modules/react').ForwardRefExoticComponent<CalendarRightProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default CalendarRight;
//# sourceMappingURL=index.d.ts.map