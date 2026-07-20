import { default as AccordionParent } from './Accordion';
import { default as AccordionItem } from './AccordionItem';
import { default as AccordionBody } from './AccordionBody';
import { default as AccordionHeader } from './AccordionHeader';

declare const Accordion: typeof AccordionParent & {
    Context: import('../../../node_modules/react').Context<{
        activeKeys: string[];
        onSelect: (key: string) => void;
    }>;
    Item: typeof AccordionItem;
    ItemContext: import('../../../node_modules/react').Context<{
        eventKey: string;
    }>;
    Body: typeof AccordionBody;
    Header: typeof AccordionHeader;
};
export default Accordion;
//# sourceMappingURL=index.d.ts.map