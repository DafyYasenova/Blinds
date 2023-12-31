import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext'

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
import Edit from './components/Edit/Edit'
import Loading from './components/Loading/Loading'
import Delete from './components/Delete/Delete'
import Logout from './components/Logout/Logout'
import AuthGuard from './guards/AuthGuard'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Profile from './components/Profile/Profile'
import {UserGuard} from './guards/AuthGuard'

function App() {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(false);
  }, []);



  return (
    <ErrorBoundary>
      <AuthProvider >
        <Header />

        <main>
          {isLoading && <Loading />}
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/register' element={<UserGuard>
              <Register />
            </UserGuard>} />

            <Route path='/login' element={<UserGuard>
              <Login />
            </UserGuard>} />

            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/about' element={<About />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/not-found' element={<NotFound />} />

            <Route element={<AuthGuard />}>
              <Route path='/create' element={<Create />} />
              <Route path='/details/:blindId' element={<Details />} />
              <Route path='/details/:blindId/edit' element={<Edit />} />
              <Route path='/details/:blindId/delete' element={<Delete />} />
              <Route path='/search' element={<Search />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
