import { HTMLAttributes } from "react";
import styles from "./index.module.css";

export default function ModalBody({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
}
