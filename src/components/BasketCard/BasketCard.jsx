import React from 'react'
import styles from './BasketCard.module.scss'
import { useDispatch } from 'react-redux'
import {
  deleteOrderActionCreate,
  minusActionCreate,
  plusActionCreate,
} from '../../redux/Redux'

export default function BasketCard({ el }) {
  const dispatch = useDispatch()
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
            onClick={() =>
              el.count > 1 ? dispatch(minusActionCreate(el)) : ''
            }
          >
            <box-icon name="minus"></box-icon>
          </button>
          <span>{el.count}</span>
          <button
            className={styles.plus}
            onClick={() => dispatch(plusActionCreate(el))}
          >
            <box-icon name="plus"></box-icon>
          </button>
          <button onClick={() => dispatch(deleteOrderActionCreate(el))}>
            <box-icon name="x"></box-icon>
          </button>
        </div>
      </div>
    </li>
  )
}
