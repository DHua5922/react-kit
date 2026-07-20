import { createContext } from "react";

const AccordionContext = createContext<{
  activeKeys: string[];
  onSelect: (key: string) => void;
}>({
  activeKeys: [],
  onSelect: () => {},
});

export default AccordionContext;
