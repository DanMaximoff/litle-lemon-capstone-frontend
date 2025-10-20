import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Header from './components/page-layout/Header'
import Footer from './components/page-layout/Footer'
import Menu from './components/pages/menu/Menu'
import Reservations from './components/pages/reservations/Reservations'
import OrderOnline from './components/pages/order-online/OrderOnline'
import Login from './components/pages/login/Login'


function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
