import React from 'react'


export const Cards = ({item}) => {

  return (

    <article className='card'>
      <h3>{item.title}</h3>
      <div>
        <img src={item.src} alt={item.title} />
      </div>
      <p>{`Price:${item.price}€`}</p>

      <a href="/masInfo" className='btn-info'>Mas Info</a>
    </article>

  )
}
