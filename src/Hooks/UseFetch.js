import { useEffect, useState } from "react"
import { ApiConsult } from "../helper/ApiConsult"



export const UseFetch = () => {
    const [ state, setState] = useState([])

    const getPhotos=async(categoria)=>{
     
        const init=()=>{
            
        }
        

        const resultado=await ApiConsult(`category/${categoria}`)

       let newPhoto = resultado.map((photo) => ({
            id: photo.id,
            title:photo.title,
            src: photo.image,
            price:photo.price,
        }))

    }

    const getPhotosById=async(id)=>{
        
    }

    const getPhotosBySerch=async(search)=>{
        
    }
    



    return {
        state
       
    }
}
