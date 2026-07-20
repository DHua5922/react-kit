import styles from "./index.module.css";
import { format } from "date-fns";
import React, { useContext } from "react";
import CalendarContext from "../CalendarContext";

function CalendarTitle({
  children,
  className = "",
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  const { currentMonth } = useContext(CalendarContext);
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children || format(currentMonth, "MMMM yyyy")}
    </div>
  );
}

export default CalendarTitle;
