

export const ApiConsult =async (url) => {
 

try {
  
  let respuesta= await fetch(`https://fakestoreapi.com/products/${url}`)

if(!respuesta){
  return respuesta.json({
    error:true,
    msg:"no se encontro la pagina",
  })
  
}

respuesta= await respuesta.json()

return respuesta

} catch (error) {
 console.log(error)
  
}

}

