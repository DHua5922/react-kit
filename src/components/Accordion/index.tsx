import AccordionParent from './Accordion'
import AccordionItem from './AccordionItem'
import AccordionBody from './AccordionBody'
import AccordionHeader from './AccordionHeader'

const Accordion = Object.assign(AccordionParent, {
  Item: AccordionItem,
  Body: AccordionBody,
  Header: AccordionHeader,
})

export default Accordion
