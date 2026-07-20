import { HTMLAttributes, ReactNode } from '../../../node_modules/react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    eventKey: string;
    children?: ReactNode;
}
export default function AccordionItem({ children, eventKey, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AccordionItem.d.ts.map