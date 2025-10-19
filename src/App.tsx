import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/home'
import About from './components/pages/about/about'
import Header from './components/page-layout/header'
import Footer from './components/page-layout/footer'
import Menu from './components/pages/menu/menu'
import Reservations from './components/pages/reservations/reservations'
import OrderOnline from './components/pages/order-online/order-online'
import Login from './components/pages/login/login'


function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
