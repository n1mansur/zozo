import React, { useEffect, useState } from 'react'
import styles from './Basket.module.scss'
import BasketCard from '../BasketCard/BasketCard'
import EmptyBasket from '../EmptyBasket/EmptyBasket'
import { useSelector } from 'react-redux'

export default function Basket() {
  const orders = useSelector((orders) => orders)

  return (
    <>
      {orders.length == 0 ? (
        <EmptyBasket />
      ) : (
        <div className={styles.basket}>
          <div className={styles.basket__container}>
            <div className={styles.hero__section}>
              <h2 className={styles.title}>Корзина</h2>
              <button className={styles.clear_basket}>
                <box-icon name="trash"></box-icon> Очистить корзину
              </button>
            </div>
            <ul className={styles.basket__list}>
              {orders.map((el, i) => {
                return <BasketCard el={el} key={i} />
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
