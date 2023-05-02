import React from 'react'
import styles from './Pasta.module.scss'
import pasta from '../../img/pasta.png'
import Card from '../Card/Card'
import pastas from './data'

const mappedPastas = () => {
  return pastas.map((el, i) => {
    return <Card key={i} el={el} />
  })
}

export default function Pasta() {
  return (
    <div className={styles.pasta__section} id="pasta">
      <div className={styles.container}>
        <h2 className={styles.section__title}>Паста</h2>
        <ul className={styles.cards}>{mappedPastas()}</ul>
      </div>
    </div>
  )
}
