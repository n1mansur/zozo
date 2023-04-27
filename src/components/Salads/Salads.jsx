import React from 'react'
import styles from './Salads.module.scss'
import salad from '../../img/salad.png'
import Card from '../Card/Card'
import salads from './data'

const mappedSalads = () => {
  return salads.map((el, i) => {
    return (
      <Card
        //img={salad}
        //title={el.name}
        //price={el.price}
        //subtitle={el.comment}
        //id={el.id}
        key={i}
        el={el}
      />
    )
  })
}

export default function Salads() {
  return (
    <div className={styles.salad__section}>
      <div className={styles.container}>
        <h2 className={styles.section__title}>Салаты</h2>
        <ul className={styles.cards}>{mappedSalads()}</ul>
      </div>
    </div>
  )
}
