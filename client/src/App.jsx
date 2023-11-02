import './App.css'
import Header from './components/Header'
import SideHeader from './components/SideHeader'
import Register from './components/Register'
import Login from './components/Login'
import Create from './components/Create'
import ContactUs from './components/ContactUs'
import Welcome from './components/Welcome'
import NotFound from './components/NotFound'
import Details from './components/Details'
import Catalog from './components/Catalog'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header />

    <main>
        <SideHeader />

        <Register />

       <Login /> 

       <Create />

        <ContactUs />

        <Welcome />
        
       <NotFound />

        <Details />

        <Catalog />
        
    </main> 

    <Footer />
    </>
  )
}

export default App
