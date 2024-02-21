import React, { useEffect, useReducer } from 'react'
import { Gallery } from '../components/Gallery'
import { ApiConsult } from '../helper/ApiConsult'
import { productReduce } from '../reduce/productReduce'

const init=async(categoria)=>{
     
        
    const resultado=await ApiConsult(`category/${categoria}`)

   let newPhoto = resultado.map((photo) => ({
        id: photo.id,
        title:photo.title,
        src: photo.image,
        price:photo.price,
    }))


    return  newPhoto
}


export const Product = ({ categorias }) => {
    console.log(categorias)

  const [productos, dispatch] = useReducer(productReduce, [],()=>{init(categorias)})

    const onProducts=()=>{

        const action={
            type:"[PRODUCTS] ByCategory",
            payload:productos,
        }
        dispatch(action)

    }

  
    return (
        <div>
            <pre>{JSON.stringify(productos,null,3)}</pre>

            <button onClick={onProducts}>cargar</button>

            {/* <Gallery productos={productos} /> */}
        </div>
    )
}
