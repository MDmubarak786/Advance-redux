import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector((state) => state.data)

  return (
    <div>
      <h1>Welcome {state.username}</h1>
    </div>
  )
}

export default Home
