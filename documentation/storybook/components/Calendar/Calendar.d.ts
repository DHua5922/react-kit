import { default as React } from '../../../node_modules/react';

interface Props extends Omit<React.HTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
    value: Date;
    onChange: (date: Date) => void;
}
declare function Calendar({ children, value, onChange, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map