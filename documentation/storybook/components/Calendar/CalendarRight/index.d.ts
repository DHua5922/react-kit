import { HTMLAttributes } from '../../../../node_modules/react';

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
    onClick?: (date: Date) => void;
}
export default function CalendarRight({ children, onClick, className, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map