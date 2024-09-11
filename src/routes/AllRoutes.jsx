import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Products, Services, Contact, PageNotFound } from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about-us' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='services' element={<Services />} />
            <Route path='contact-us' element={<Contact />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </>
  )
}
