import React from 'react'
import styles from './Pizza.module.scss'
import pizza from '../../img/pizza.png'
import Card from '../Card/Card'
import pizzas from './data'

const mappedPizzas = () => {
  return pizzas.map((el, i) => {
    return (
      <Card
        //img={pizza}
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

export default function Pizza({ setProducts }) {
  return (
    <div className={styles.pizza__section}>
      <div className={styles.container}>
        <h2 className={styles.section__title}>Пицца</h2>
        <ul className={styles.cards}>{mappedPizzas()}</ul>
      </div>
    </div>
  )
}
