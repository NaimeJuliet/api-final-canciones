/* prueba cuando era estatico, no variaba el codigo let codigo="amd001"
export let uri=`www.cesde/${codigo}`*/

/*export function generarUri(codigo){
    let uri=`www.cesde/${codigo}`

    return (uri)
} uri para generar las frutas ya se cambia por el del artista de spotify*/

export function generarUri(codigo){
    let URI=`https://api.spotify.com/v1/artists/${codigo}/top-tracks?market=US`


    return (URI)
}

