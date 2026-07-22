import { HTMLAttributes } from '../../../node_modules/react';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
    value: Date;
    onChange: (date: Date) => void;
}
export default function Calendar({ children, value, onChange, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Calendar.d.ts.map