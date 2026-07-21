import { HTMLAttributes } from '../../../node_modules/react';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    activeKeys: string[];
    onSelect: (key: string) => void;
}
export default function Accordion({ children, activeKeys, onSelect, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Accordion.d.ts.map