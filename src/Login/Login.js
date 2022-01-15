import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import styles from './Login.module.css'
import Button from '@mui/material/Button'
import { LOGIN } from '../action/loginAuthAction'
import Input from '../components/TextField'

function Login() {
  const isLoggedIn = useSelector((state) => state?.isLoggedIn)
  const dispatch = useDispatch()
  const [userEmail, setUserEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'muba' && password === '123') {
      const data = {
        userEmail: userEmail,
        username: username,
        password: password,
        isAuth: true,
      }
      dispatch(LOGIN(data))
      localStorage.setItem('userData', JSON.stringify(data))
    } else {
      alert('Invalid username or password')
    }
  }

  const getUserName = (e) => setUsername(e.target.value)
  const getUserEmail = (e) => setUserEmail(e.target.value)
  const getPassWord = (e) => setPassword(e.target.value)

  return (
    <div className={styles.center}>
      <h1 className={styles.marginT}>Login</h1>

      <Input
        label="Username"
        onChange={getUserName}
        value={username}
        styles={styles.marginT}
      />
      <Input
        label="Email"
        onChange={getUserEmail}
        value={userEmail}
        styles={styles.marginT}
      />
      <Input
        label="Password"
        onChange={getPassWord}
        value={password}
        styles={styles.marginT}
      />

      <div className={styles.marginT}>
        <Button variant="contained" onClick={handleSubmit}>
          Log in
        </Button>
      </div>
    </div>
  )
}

export default Login
