import { default as React } from '../../../node_modules/react';

interface Props extends Omit<React.HTMLProps<HTMLDivElement>, 'value' | 'onClick'> {
    value: Date;
    onClick?: (value: Date) => void;
    textStyle?: React.CSSProperties;
}
declare function CalendarDay({ children, value, onClick, textStyle, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default CalendarDay;
//# sourceMappingURL=CalendarDay.d.ts.map