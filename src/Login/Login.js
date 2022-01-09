import React from 'react'
import styles from './Login.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function Login() {
  return (
    <div className={styles.center}>
      <h1 className={styles.marginT}>Login</h1>
      <div className={styles.marginT}>
        <TextField
          label="Email"
          color="primary"
          focused
          sx={{ width: '25%' }}
        />
      </div>
      <div className={styles.marginT}>
        <TextField
          label="Password"
          color="primary"
          focused
          sx={{ width: '25%' }}
        />
      </div>

      <div className={styles.marginT}>
        <Button variant="contained">Log in</Button>
      </div>
    </div>
  )
}

export default Login
