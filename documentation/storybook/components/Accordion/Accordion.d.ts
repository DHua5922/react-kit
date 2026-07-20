interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
    activeKeys: string[];
    onSelect: (key: string) => void;
    children?: React.ReactNode;
}
export default function Accordion({ children, activeKeys, onSelect, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Accordion.d.ts.map