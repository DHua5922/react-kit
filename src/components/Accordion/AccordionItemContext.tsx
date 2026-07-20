import { createContext } from "react";

const AccordionItemContext = createContext<{
  eventKey: string;
}>({
  eventKey: "",
});

export default AccordionItemContext;
