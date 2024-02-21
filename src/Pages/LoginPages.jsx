import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

export const LoginPages = () => {
    const [data, setData] = useState([])

    const {user,setUser,setAuth} = useContext(UserContext)

    const handleSubmit=(ev)=>{
        ev.preventDefault()
    
        const newData = {
            id: Date.now(),
            email: ev.target.email.value,
            password: ev.target.password.value,
            rol:"user"
        }
    
      setData([
        ...data,newData
      ])
      setAuth("authentication")

    
      ev.target.email.value=''
      ev.target.password.value=''
    }
    useEffect( () => {
        setUser(data)
        
       }, [data])

    
        return (
            <div>
                <h1>LoginPages</h1>
                <pre>{JSON.stringify(data,null,3)}</pre>
                <pre>{JSON.stringify(user, null, 3)}</pre>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='email' placeholder='email'/>
                    <input type="password" name='password' placeholder='password' />
    
                    <input type="submit" value='Login' />
    
                </form>
            </div>
        )
}
