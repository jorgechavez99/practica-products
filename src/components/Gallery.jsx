import React, { useContext } from 'react'
import { Cards } from './Cards'
import { UseFetch } from '../Hooks/UseFetch'


export const Gallery = ({categorias}) => {
    const{pictures}=UseFetch(categorias)


    return (
        <section>
            <h1>{categorias}</h1>
            <hr />
            <div className='flex-container'>
                {
                    pictures.map((item) => {
                        return <Cards key={item.id} item={item} />
                    })
                }
            </div>


        </section>
    )
}
