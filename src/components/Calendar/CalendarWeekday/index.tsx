import styles from "./index.module.css";
import React from "react";

function CalendarWeekday({
  children,
  className = "",
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
}

export default CalendarWeekday;
