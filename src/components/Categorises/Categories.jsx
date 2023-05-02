import React, { useState } from 'react'
import styles from './Categories.module.scss'
import values from './data'
import { Link } from 'react-scroll'

const valuesMap = (closeMenu) => {
  return values.map((el, i) => (
    <li className={styles.item} key={i}>
      <Link
        to={el.id}
        spy={true}
        smooth={true}
        offset={0}
        duration={50}
        onClick={closeMenu}
      >
        {el.value}
      </Link>
    </li>
  ))
}

export default function Categories() {
  const [click, setClick] = useState(false)
  return (
    <>
      <div className={styles.categories__box}>
        <ul className={styles.list}>
          {valuesMap(() => {
            setClick(false)
          })}
        </ul>
      </div>
    </>
  )
}
