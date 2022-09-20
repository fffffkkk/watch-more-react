import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Routers from './config/Routers'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routers />
        <Footer />
    </BrowserRouter>
  )
}

export default App
