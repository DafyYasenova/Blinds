import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Create from './components/Create'
import ContactUs from './components/ContactUs'
import About from './components/About'
import NotFound from './components/NotFound'
import Details from './components/Details'
import Catalog from './components/Catalog'
import Footer from './components/Footer'
import Search from './components/Search'

function App() {


  return (
    <>
      <Header />

      <main>
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/register' element={<Register />} />
         <Route path='/login' element={<Login />} />
         <Route path='/contact-us' element={<ContactUs/>} />
         <Route path='/about' element={<About />} />
         <Route path='/not-found' element={<NotFound />} />
         <Route path='/catalog' element={<Catalog />} />
         <Route path='/create' element={<Create />} />
         <Route path='/search' element={<Search />} />

        

        </Routes>


      </main>

      <Footer />
    </>
  )
}

export default App
