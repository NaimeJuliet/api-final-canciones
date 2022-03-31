export async function consumirAPI(URI,token){

    let parametros={
        method:"GET",
        headers:{Authorization:token}
    }

    let respuesta=await fetch(URI,parametros)
    let respuestaFINAL=respuesta.json()

    return (respuestaFINAL)


}