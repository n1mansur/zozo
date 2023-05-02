import React from 'react'
import styles from './Slider.module.scss'
import Slide from '../Slide/Slide'
import img from '../../img/slider 1.jpg'

export default function Slider() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {/*<div className={styles.btns}>
          <button className={styles.Button__left}>
            <box-icon name="chevron-left"></box-icon>
          </button>
          <button className={styles.button__right}>
            <box-icon name="chevron-right"></box-icon>
          </button>
        </div>*/}
        <Slide img={img} />
      </div>
    </div>
  )
}
