import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'

import styles from './button.module.scss'

const Button =({
  primary = false,
  secondary = false,
  ghost = false,
  ghostOnHover = false,
  large = false,
  href = '',
  to = '',
  handleClick = () => {},
  sameWindow = false,
  children,
}) => {
  const isPrimary = primary && !secondary;
  const isSecondary = !primary && secondary;
  const isNotGhost = !ghost && !ghostOnHover;
  const isGhost = ghost && !ghostOnHover;
  const isGhostOnHover = !ghost && ghostOnHover;

  const classes = classnames(
    styles.button,
    { [styles.buttonPrimary]: isNotGhost && isPrimary },
    { [styles.buttonPrimaryGhost]: isGhost && isPrimary },
    { [styles.buttonPrimaryGhostOnHover]: isGhostOnHover && isPrimary },
    { [styles.buttonSecondary]: isNotGhost && isSecondary },
    { [styles.buttonSecondaryGhost]: isGhost && isSecondary },
    { [styles.buttonSecondaryGhostOnHover]: isGhostOnHover && isSecondary },
    { [styles.buttonLarge]: large },
  )

  if (href) {
    return <a
      href={href}
      target={sameWindow ? '_blank' : '_self'}
      className={classes}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  }

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }

  return <button className={classes} onClick={handleClick}>{children}</button>
}

export default Button
