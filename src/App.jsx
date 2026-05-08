import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './pages/PrivateRoutes'
import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'
import Login from './pages/auth/Login'
import PublicRoutes from './pages/PublicRoutes'
import Signup from './pages/auth/Signup'

const App = () => {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route element={<PrivateRoutes/>}>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/help' element={<Help/>}/>
    </Route>

<Route element={<PublicRoutes/>}>

    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
</Route>

  </Routes>

   
    </>
  )
}

export default App