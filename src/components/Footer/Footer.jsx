import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../img/Logo.png'

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.footer__section}>
          <a className={styles.logo} href="/">
            <img src={logo} alt="Logo" />
          </a>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a href="/filials">Филиалы</a>
            </li>
            <li className={styles.footer__item}>
              <a href="/about">О нас</a>
            </li>
            <li className={styles.footer__item}>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__lisnk}>
          <a href="">©Zuzu 2005 - 2021 All rights reserved</a>
          <div className={styles.footer__socials}>
            <a href="">
              {/*<box-icon type="logo" name="instagram-alt"></box-icon> */}
            </a>
            <a href="">
              {/*<box-icon name="facebook-circle" type="logo"></box-icon> */}
            </a>
            <a href="">
              {/*<box-icon name="telegram" type="logo"></box-icon> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
