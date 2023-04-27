import React, { useState } from 'react'
import styles from './BasketCard.module.scss'

export default function BasketCard({ el }) {
  const [newCount, setNewCount] = useState(el.count)
  return (
    <li className={styles.basket__item}>
      <div className={styles.pizzaInfo}>
        <div className={styles.item__img}>
          <img src={el.img} alt="Img" />
        </div>
        <div className={styles.item__title}>
          <h3>{el.name}</h3>
          <p>{el.comment}</p>
        </div>
      </div>
      {/****vvv****/}
      <div className={styles.quantity}>
        <span>{el.price} сум</span>
        <div className={styles.item__btns}>
          <button
            className={styles.minus}
            onClick={() => setNewCount(newCount > 1 ? newCount - 1 : 1)}
          >
            <box-icon name="minus"></box-icon>
          </button>
          <span>{newCount}</span>
          <button
            className={styles.plus}
            onClick={() => setNewCount(newCount + 1)}
          >
            {/*{console.log(newCount)}*/}
            <box-icon name="plus"></box-icon>
          </button>
          <button>
            <box-icon name="x"></box-icon>
          </button>
        </div>
      </div>
    </li>
  )
}
