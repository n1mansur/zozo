import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import Pizza from '../Pizza/Pizza'
import Pasta from '../Pasta/Pasta'
import Salads from '../Salads/Salads'
import data from '../Pizza/data'
import styles from './Home.module.scss'
import Order from '../Order/Order'
import { Modal } from '@mui/material'

export default function Home() {
  const [products, setProducts] = useState({})
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    setProducts(data)
  }, [])
  const onProductButtonClick = (id) => {
    console.log('prod id', id)
  }

  return (
    <div className={styles.wrapper}>
      <Hero />
      <div className={styles.other__Sections}>
        {/*<Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Order />
        </Modal>*/}
        <Pizza setProducts={setProducts} />
        <Pasta />
        <Salads />
      </div>
    </div>
  )
}
