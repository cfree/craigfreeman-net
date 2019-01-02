import React from 'react'
import classnames from 'classnames'

import styles from './card.module.scss'
import { Icon } from '../../Common'

const Card = ({
  right = false,
  className,
  background,
  children,
}) => {
  const cardStyles = classnames(styles.card, className)
  const iconClasses = classnames(styles.icon, { [styles.iconRight]: right })

  return (
    <div className={cardStyles}>
      <div className={iconClasses}>
        <Icon char={background} />
      </div>
      <div className={right ? styles.contentRight : styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Card
