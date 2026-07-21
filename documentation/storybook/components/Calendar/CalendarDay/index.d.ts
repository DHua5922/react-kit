import { HTMLProps, CSSProperties } from '../../../../node_modules/react';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'onClick'> {
    value: Date;
    onClick?: (value: Date) => void;
    textStyle?: CSSProperties;
}
export default function CalendarDay({ className, children, value, onClick, textStyle, style, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map