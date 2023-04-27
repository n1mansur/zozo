import React from 'react'
import styles from './Categories.module.scss'
import values from './data'

const valuesMap = () => {
  return values.map((el, i) => (
    <li className={styles.item} key={i}>
      <a href="">{el.value}</a>
    </li>
  ))
}

export default function Categories() {
  return (
    <>
      <div className={styles.categories__box}>
        <ul className={styles.list}>{valuesMap()}</ul>
      </div>
    </>
  )
}
