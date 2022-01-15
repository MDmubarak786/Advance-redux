import React from 'react'
import { createStore } from 'redux'
import { LoginAuthReducer } from '../reducer/loginAuthReducer'

const store = createStore(LoginAuthReducer)

export default store
