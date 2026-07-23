import styles from './index.module.css'
import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  copied?: boolean
}

const copiedIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
)

const copyIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
  </svg>
)

export default function CopyButton({ copied = false, ...props }: Props) {
  const title = copied ? 'Copied!' : 'Copy code'
  return (
    <button
      type="button"
      className={styles.container}
      aria-label={title}
      title={title}
      {...props}
    >
      {copied ? copiedIcon : copyIcon}
    </button>
  )
}
