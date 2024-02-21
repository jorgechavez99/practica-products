import { useEffect, useState } from "react"
import { ApiConsult } from "../helper/ApiConsult"



export const UseFetch = (categoria=null,id=null,search=null) => {
    const [ state, setState] = useState([])
    

    const getPhotos = async () => {
        let url;
        let newPhoto;


        if(categoria){
            url=`category/${categoria}`
        }else if(id){
             url=`${id}`
        }

       
        const  photos  = await ApiConsult(url)


        if (photos.length>=1){
             newPhoto = photos.map((photo) => ({
                id: photo.id,
                title:photo.title,
                src: photo.image,
                price:photo.price,
            }))
        }else{
            newPhoto = {
                id: photos.id,
                title:photos.title,
                src: photos.image,
                price:photos.price,
            }
        }

       


        setState(newPhoto)
        
    }


    useEffect(() => {

        getPhotos()

    }, [state])




    return {
        state
       
    }
}
