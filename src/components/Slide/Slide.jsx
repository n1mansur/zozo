import React from 'react'
import styles from './Slide.module.scss'

export default function Slide({ img }) {
  return (
    <div className={styles.slide}>
      <img className={styles.slide__img} src={img} />
    </div>
  )
}
