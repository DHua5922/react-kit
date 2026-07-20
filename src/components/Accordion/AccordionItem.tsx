import AccordionItemContext from "./AccordionItemContext";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  eventKey: string;
  children?: React.ReactNode;
}

export default function AccordionItem({ children, eventKey, ...props }: Props) {
  return (
    <AccordionItemContext.Provider value={{ eventKey }}>
      <div {...props}>{children}</div>
    </AccordionItemContext.Provider>
  );
}
