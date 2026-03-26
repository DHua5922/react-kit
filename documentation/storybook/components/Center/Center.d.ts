import { BaseComponentProps } from '../../types/common';
import { default as React } from '../../../node_modules/react';

interface Props extends React.HTMLProps<HTMLDivElement>, BaseComponentProps {
    type?: 'vertical' | 'horizontal' | '';
}
declare function Center({ type, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default Center;
//# sourceMappingURL=Center.d.ts.map