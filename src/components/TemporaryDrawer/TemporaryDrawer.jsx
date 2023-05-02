import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import { Link } from 'react-router-dom'
import styles from './TemproraryDrawer.module.scss'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  return (
    <div className={styles.TD}>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>
          <box-icon color="#292929" name="menu"></box-icon>
        </Button>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          <Box>
            <div className={styles.sectionHeader}>
              <span>Меню</span>
              <button
                className={styles.closeBtn}
                onClick={toggleDrawer('left', false)}
              >
                <box-icon size="md" name="x"></box-icon>
              </button>
            </div>
            <List>
              <div className={styles.btns}>
                <Link
                  className={styles.button}
                  to={'/filials'}
                  onClick={toggleDrawer('left', false)}
                >
                  Филиалы
                </Link>
                <Link
                  className={styles.button}
                  to={'/about'}
                  onClick={toggleDrawer('left', false)}
                >
                  О нас
                </Link>
                <Link
                  className={styles.button}
                  to="/contacts"
                  onClick={toggleDrawer('left', false)}
                >
                  Контакты
                </Link>
              </div>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  )
}
