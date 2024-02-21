import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


export const Form = () => {

const {categorias,setCategorias} = useContext(UserContext)

    const clearInput = (ev) => {

        ev.target.search.value = ''
    }

    const handleSubmit = (ev) => {

        ev.preventDefault()

        const newCathegory = ev.target.search.value

        const find = categorias.find((item) => item === newCathegory)

        if (find) return

        setCategorias([newCathegory])

        clearInput(ev)

    }

  return (
<>
<pre>{JSON.stringify(categorias)}</pre>
    <form onSubmit={handleSubmit} >
            <input
                type="text"
                id='search'
                name='search'
                placeholder='Buscar'
            />
            <input
                type='submit'
                value='Buscar' />
        </form>

</>
   
  )
}
