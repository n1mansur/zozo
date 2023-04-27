import React from 'react'
import styles from './Burger.module.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const cancelBtn = (e) => {
  const burger = document.getElementById('burger')
  burger.style.cssText = 'display:none'
}

export default function Burger() {
  return (
    <div className={styles.burger} id="burger">
      <div className={styles.menu}>
        <div className={styles.section}>
          <span>Меню</span>
          <button onClick={cancelBtn}>
            <box-icon color="#808080" name="x"></box-icon>
          </button>
        </div>
        <div className={styles.btns}>
          <Link className={styles.button} to={'/filials'}>
            Филиалы
          </Link>

          <Link className={styles.button} to={'/about'}>
            О нас
          </Link>
          <Link className={styles.button} to="/contacts">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  )
}
