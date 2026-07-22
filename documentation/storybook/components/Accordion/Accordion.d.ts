import { HTMLAttributes } from '../../../node_modules/react';

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    activeKeys: string[];
    onSelect: (key: string) => void;
}
declare const Accordion: import('../../../node_modules/react').ForwardRefExoticComponent<AccordionProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map