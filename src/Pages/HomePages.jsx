import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const HomePages = () => {

  const {msg} = useContext(UserContext)

  return (
    <div>
        <h1>HomePages</h1>
        <p>{msg}</p>
    </div>
  )
}
