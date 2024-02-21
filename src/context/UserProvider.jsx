import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([])
    const [user, setUser] = useState([])
    const [auth, setAuth] = useState("no-authentication")

    return (
        <UserContext.Provider value={{categorias,setCategorias,auth,setAuth,user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
