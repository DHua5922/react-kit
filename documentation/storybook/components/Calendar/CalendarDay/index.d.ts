import { ButtonHTMLAttributes } from '../../../../node_modules/react';

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onClick'> {
    value: Date;
    onClick?: (value: Date) => void;
}
export default function CalendarDay({ className, children, value, onClick, style, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map