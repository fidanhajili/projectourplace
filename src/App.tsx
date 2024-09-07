import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Notification from './components/Notification'
import Header from './components/Header'


import { useEffect } from 'react'

import AOS from 'aos'
import'aos/dist/aos.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import Shop from './components/pages/Shop'
import Mission from './components/pages/Mission'
import Footer from './components/Footer'
import FAQ from './components/pages/FAQ'

function App() {

  useEffect(()=> {
    AOS.init({
      duration : 2000
    })
  }, [])

  return (
  <>
  <BrowserRouter>
  <Notification />
<Header />

<Routes>
  <Route path='/' element={<Home />} />
<Route path='/shop' element={<Shop />} />
<Route path='/mission' element={<Mission />} />
<Route path='/faq' element={<FAQ />} />


<Route path='*' element={<NotFound />} />

</Routes>
<Footer />
  </BrowserRouter>



</>
  )
}

export default App
