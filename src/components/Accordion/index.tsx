import AccordionParent from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionItemContext from "./AccordionItemContext";
import AccordionBody from "./AccordionBody";
import AccordionHeader from "./AccordionHeader";
import AccordionContext from "./AccordionContext";

const Accordion = Object.assign(AccordionParent, {
  Context: AccordionContext,
  Item: AccordionItem,
  ItemContext: AccordionItemContext,
  Body: AccordionBody,
  Header: AccordionHeader,
});

export default Accordion;
