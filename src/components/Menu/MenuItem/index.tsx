import React, { HTMLAttributes, useContext } from 'react'
import MenuContext from '../MenuContext'
import styles from './index.module.css'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  value: unknown
}

export default function MenuItem({
  children,
  className = '',
  onClick,
  value,
  style,
  ...props
}: Props) {
  const { onSelect, onHideMenu } = useContext(MenuContext)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect && onSelect(value)
    onClick && onClick(event)
    onHideMenu && onHideMenu()
  }

  const buttonStyle = {
    cursor: onSelect ? 'pointer' : 'default',
    ...style,
  }

  return (
    <button
      className={`${styles.container} ${className}`}
      onClick={handleClick}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  )
}
