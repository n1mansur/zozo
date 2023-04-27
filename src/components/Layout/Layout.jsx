import React from 'react'
import Header from '..//Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

export default function Layout() {
  return (
    <div className={styles.wrapper}>
        <Header />
      {/*<div className={styles.container}>*/}
        <main className={styles.main}>
          <Outlet />
        </main>
      {/*</div>*/}
        <Footer />
    </div>
  )
}
