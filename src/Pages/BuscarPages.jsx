import React, { useContext } from 'react'
import { Gallery } from '../components/Gallery'
import { Form } from '../components/Form'
import { UserContext } from '../context/UserContext'

export const BuscarPages = () => {
  const {categorias} = useContext(UserContext)
  return (
    <>
     <Form/>
      
      <Gallery categorias={categorias} />

    </>
  )
}
