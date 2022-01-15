import { useSelector } from 'react-redux'
import './App.css'
import Header from './Header/Header'
import Login from './Login/Login'
import Home from './Home/Home'

function App() {
  const isLoggedIn = useSelector((state) => state?.data?.isAuth)

  return (
    <div>
      <Header />
      {isLoggedIn ? <Home /> : <Login />}
    </div>
  )
}

export default App
