import React from 'react'
import styles from './Button.module.scss'

export default function Button({ ico, text, style }) {
  return (
    <button className={styles.btn} style={style}>
      {ico}
      {text}
    </button>
  )
}
