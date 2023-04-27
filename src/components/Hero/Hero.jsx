import React from 'react'
import styles from './Hero.module.scss'
import Slider from '../Slider/Slider'
import Categories from '../Categorises/Categories'

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__container}>
          <Slider />
          <Categories />
        </div>
      </div>
    </>
  )
}
