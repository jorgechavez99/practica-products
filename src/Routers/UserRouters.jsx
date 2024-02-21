import React from 'react'
import { HomePages } from '../Pages'
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { JewelPages } from '../Pages/JewelPages'
import { MasInfo } from '../Pages/MasInfo'
import { ElectronicsPages } from '../Pages/ElectronicsPages'
import { BuscarPages } from '../Pages/BuscarPages'
import { NavBar } from '../components/NavBar'
import { ProductInfoPage } from '../Pages/ProductInfoPage'
import { Product } from '../Pages/Product'

export const UserRouters = () => {
    return (
        <>
        
            <NavBar />
            <main>
                <Routes>
                    <Route path='/producto' element={<HomePages />} />
                    <Route path='/jewels' element={<JewelPages />} />
                    <Route path='/electronics' element={<ElectronicsPages />} />
                    <Route path='/buscar' element={<BuscarPages />} />
                    <Route path='/product/category/jewelery' element={<Product categorias={"jewelery"}/>} />
                    <Route path='/product/:id' element={<ProductInfoPage />} />


                    <Route path='/*' element={<Navigate to="/producto" />} />
                </Routes>
            </main>
        </>

    )
}
