import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.subHeader}>
        <div>
          <h1>Shopping Mall</h1>
        </div>
        <div>
          <Stack spacing={2} direction="row">
            <Button variant="text">Products</Button>
            <Button variant="text">Contact Us</Button>
            <Button variant="contained">Log in</Button>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Header
