import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Create from './components/Create/Create'
import ContactUs from './components/ContactUs/ContactUs'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import Details from './components/Details/Details'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'

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
         <Route path='/details' element={<Details />} />
         <Route path='*' element={<NotFound />} />


        

        </Routes>


      </main>

      <Footer />
    </>
  )
}

export default App
