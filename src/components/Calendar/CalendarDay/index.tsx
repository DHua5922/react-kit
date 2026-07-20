import styles from "./index.module.css";
import React, { useContext } from "react";
import CalendarContext from "../CalendarContext";
import { format, isSameMonth } from "date-fns";

interface Props extends Omit<
  React.HTMLProps<HTMLDivElement>,
  "value" | "onClick"
> {
  value: Date;
  onClick?: (value: Date) => void;
  textStyle?: React.CSSProperties;
}

function CalendarDay({
  className = "",
  children,
  value,
  onClick,
  textStyle,
  style,
  ...props
}: Props) {
  const {
    currentMonth,
    value: chosenDate,
    onChange,
  } = useContext(CalendarContext);

  const isChosen =
    chosenDate &&
    chosenDate.getFullYear() === value.getFullYear() &&
    chosenDate.getMonth() === value.getMonth() &&
    chosenDate.getDate() === value.getDate();

  const isInCurrentMonth = isSameMonth(value, currentMonth);

  return (
    <div className={`${styles.container} ${className}`}>
      <div
        className={styles.number}
        {...props}
        onClick={() => {
          if (isInCurrentMonth) {
            onChange(value);
            onClick && onClick(value);
          }
        }}
        style={{
          backgroundColor:
            isInCurrentMonth && isChosen ? "#0d6efd" : "transparent",
          ...style,
        }}
      >
        <div
          style={{
            color: isChosen && isInCurrentMonth ? "#ffffff" : "#000000",
            opacity: isInCurrentMonth ? 1 : 0.25,
            ...textStyle,
          }}
        >
          {children || format(value, "d")}
        </div>
      </div>
    </div>
  );
}

export default CalendarDay;
