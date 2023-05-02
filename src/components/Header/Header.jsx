import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../img/Logo.png'
import RU from '../../img/RU.png'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import Language from '../Language/Language'
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer'

const menu = (e) => {
  const burger = document.getElementById('burger')
  burger.style.cssText = 'display:block'
}

export default function Header() {
  const [langBox, setLangBox] = useState(false)
  const navigate = useNavigate()
  function handleClick() {
    navigate('/')
  }
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.header__left}>
            <TemporaryDrawer />
            <div className={styles.logo} id="headerLogo" onClick={handleClick}>
              <img src={logo} alt="Logo" />
            </div>
            <div className={styles.location} id="headerLocation">
              <Button
                ico={<box-icon name="map"></box-icon>}
                text={'Tashkent'}
              />
            </div>
          </div>
          <div className={styles.header__right}>
            <Link to="/order">
              <Button
                ico={<box-icon name="cart-alt"></box-icon>}
                text={'Корзина'}
              />
            </Link>
            <button className={styles.btn} onClick={() => setLangBox(!langBox)}>
              <img src={RU} alt="Lan" />
              <box-icon name="chevron-down"></box-icon>
              {langBox ? <Language /> : <></>}
            </button>
            <Button ico={<box-icon name="user"></box-icon>} text={'Войти'} />
          </div>
        </header>
      </div>
    </div>
  )
}
