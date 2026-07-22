import { HTMLAttributes } from "react";
import styles from "./index.module.css";

export type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

export default function ModalBody({
  children,
  className = "",
  ...props
}: ModalBodyProps) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
}
