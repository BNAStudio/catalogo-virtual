import { Routes, Route } from 'react-router-dom'
import { DataContextProvider } from './context/CartContext'
import Login from './components/Login/Login'
import MainPage from './components/MainPage/MainPage'
import Cart from './components/Cart/ShoppingCart'
import './App.css'

function App() {

  return (
    <>
      <DataContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main-page' element={<MainPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </DataContextProvider>
    </>
  )
}

export default App
