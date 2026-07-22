import AccordionParent from './Accordion'
import AccordionItem from './AccordionItem'
import AccordionBody from './AccordionBody'
import AccordionHeader from './AccordionHeader'

export type { AccordionProps } from './Accordion'
export type { AccordionItemProps } from './AccordionItem'
export type { AccordionBodyProps } from './AccordionBody'
export type { AccordionHeaderProps } from './AccordionHeader'

const Accordion = Object.assign(AccordionParent, {
  Item: AccordionItem,
  Body: AccordionBody,
  Header: AccordionHeader,
})

export default Accordion
