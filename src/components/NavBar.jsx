import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const NavBar = () => {
  const {setUser,setAuth} = useContext(UserContext)
  return (
    <div>
        <nav className='nav-center'>
                <ul >
                    <li><Link to='/producto' className='text-decoration-null'>Producto</Link></li>
                    <li><NavLink to='/jewels' className={({isActive})=> isActive ? "activo text-decoration-null":"text-decoration-null"}>Jewels</NavLink></li>
                    <li><NavLink to='/electronics' className={({isActive})=> isActive ? "activo text-decoration-null":"text-decoration-null"}>Electronics</NavLink></li>
                    <li><NavLink to='/buscar' className={({isActive})=> isActive ? "activo text-decoration-null":"text-decoration-null"}>Buscar</NavLink></li>
                    <li><NavLink to='/product/category/jewelery' className={({isActive})=> isActive ? "activo text-decoration-null":"text-decoration-null"}>Product</NavLink></li>
                    
                    <li >Hola Nombre</li>
                    <li ><button onClick={()=>{setUser({});setAuth('no-authentication')}} className='bt-logout'>Logout</button></li>
                    </ul>
            </nav>
    </div>
  )
}
