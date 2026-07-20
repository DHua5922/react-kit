import AccordionContext from "./AccordionContext";

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  activeKeys: string[];
  onSelect: (key: string) => void;
  children?: React.ReactNode;
}

export default function Accordion({
  children,
  activeKeys,
  onSelect,
  ...props
}: Props) {
  return (
    <AccordionContext.Provider value={{ activeKeys, onSelect }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
}
