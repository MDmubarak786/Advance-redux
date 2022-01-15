import { useSelector } from 'react-redux'
import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import styles from './Header.module.css'

const Header = () => {
  const isLoggedIn = useSelector((state) => state?.data?.isAuth)

  const logOut = () => {
    localStorage.setItem('userData', JSON.stringify({}))
    window.location.reload()
  }

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
            <Button variant="contained" onClick={logOut} disabled={!isLoggedIn}>
              {isLoggedIn ? 'Log out' : 'Log in'}
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Header
