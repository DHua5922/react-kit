import { HTMLAttributes } from "react";
import styles from "./index.module.css";

export type ModalHeaderProps = HTMLAttributes<HTMLDivElement>;

export default function ModalHeader({
  children,
  className = "",
  ...props
}: ModalHeaderProps) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
}
