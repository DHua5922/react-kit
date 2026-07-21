import { HTMLProps } from '../../../node_modules/react';

interface Props extends HTMLProps<HTMLDivElement> {
    onPress?: (date: Date) => void;
}
export default function CalendarLeft({ children, onPress, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CalendarLeft.d.ts.map