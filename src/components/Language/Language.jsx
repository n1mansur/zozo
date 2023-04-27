import React from 'react'
import styles from './Language.module.scss'

export default function Language() {
  return (
    <div className={styles.languageBox}>
      <button className={styles.langBtn}>O’zbekchа</button>
      <button className={styles.langBtn}>Русский</button>
      <button className={styles.langBtn}>English</button>
    </div>
  )
}
