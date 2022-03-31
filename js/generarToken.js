//export let TOKEN="Bearer BQDn_ReXXmPiUi6dO3e1PExlhQnq1BnzS3RL8cFLQqBsl3qQ6bQ-3HWqgtQxVZvXmTRuzZaJo1jjg40FaekaUD_3DCjksklT59d0uDn5faneeKNcBVhF5lMNyOoin8Jtd9vv2R6XOWAExM-8Qwg7M6crQ9cBDI8tka8"

export async function generarToken(){
    let URI="https://accounts.spotify.com/api/token"
    let client_id="client_id=91b8e7f252d941d194988119c013b9f0"
    let client_secret="client_secret=6d3caa99691e48ceba59420b9125b6e3"
    let grant_type="grant_type=client_credentials"

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`

    }
    let respuesta=await fetch(URI,parametros)
    let respuestaFINAL=await respuesta.json()
    let token=`${respuestaFINAL.token_type} ${respuestaFINAL.access_token}`
    return (token)
}

