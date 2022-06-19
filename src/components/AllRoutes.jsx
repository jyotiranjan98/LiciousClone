import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Cart } from './Cart'
import { Chicken } from './Chicken'
import { Fish } from './Fish'
import { Home } from './Home'
import { Mutton } from './Mutton'
import { Navbar } from './Navbar'

export const AllRoutes = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path = "/chicken" element={<Chicken/>}></Route>
        <Route path = "/fish" element={<Fish/>}></Route>
        <Route path = "/mutton" element={<Mutton/>}></Route>
        <Route path = "/cart" element={<Cart/>}></Route>

        </Routes>
    </div>
  )
}
