import React, { useState } from 'react'
import styles from './Card.module.scss'
import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux'
import { addOrderActionCreate } from '../../redux/Redux'

export default function Card({ el }) {
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const doneBtn = () => {
    el.count = count
    dispatch(addOrderActionCreate(el))
    setCount(0)
    handleClose()
  }
  return (
    <li className={styles.card}>
      <React.Fragment>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...styles.modal, width: 200 }}>
            <div className={styles.modal}>
              <button className={styles.close} onClick={handleClose}>
                <box-icon size="md" name="x"></box-icon>
              </button>
              <div className={styles.img}>
                <img src={el.img} alt="Order-img" />
              </div>
              <div className={styles.order__section}>
                <h2 className={styles.order__title}>{el.name}</h2>
                <p className={styles.order__subTitle}>{el.comment}</p>
                <div className={styles.btns}>
                  <button
                    className={styles.button}
                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                  >
                    <box-icon name="minus"></box-icon>
                  </button>
                  <span>{count}</span>
                  <button
                    className={styles.button}
                    onClick={() => setCount(count + 1)}
                  >
                    <box-icon name="plus"></box-icon>
                  </button>
                  <button className={styles.buy} onClick={() => doneBtn()}>
                    Добавить <span>{el.price} сум</span>
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </React.Fragment>
      <div className={styles.card__img}>
        <img src={el.img} alt="Pizza" />
      </div>
      <div className={styles.card__text}>
        <h3 className={styles.card__title}>{el.name}</h3>
        <p className={styles.card__subtitle}>{el.comment}</p>
        <div className={styles.card__price}>
          <span>От {el.price} сумов</span>
          <button onClick={handleOpen}>Выбрать</button>
        </div>
      </div>
    </li>
  )
}
