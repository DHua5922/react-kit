import { HTMLAttributes } from "react";
import styles from "./index.module.css";

export default function ModalFooter({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
}
