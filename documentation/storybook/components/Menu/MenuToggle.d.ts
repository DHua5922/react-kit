import { ReactNode, ButtonHTMLAttributes } from '../../../node_modules/react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}
export default function MenuToggle({ children, onClick, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MenuToggle.d.ts.map