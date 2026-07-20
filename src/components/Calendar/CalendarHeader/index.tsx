import styles from "./index.module.css";
import React from "react";

function CalendarHeader({
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

export default CalendarHeader;
