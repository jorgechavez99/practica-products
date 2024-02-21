import React from 'react'
import {useLocation, useParams}from 'react-router-dom'


export const ProductInfoPage = () => {

    
    const param=useParams()

    const location=useLocation()

    console.log("reviso el param",param)
    
console.log(location)

  return (
    <div>ProductInfoPage


    </div>
  )
}
