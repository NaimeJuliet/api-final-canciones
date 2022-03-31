/*import { nombrePersona } from "./generadordenombre.js";
import { estatura } from "./generadorEstatura.js";
import { institucion } from "./generadorInstitucion.js";*/
import{generarToken} from "./generarToken.js";
//import{uri} from "./generadorUri.js"; importacion let estatica uri en -generador uri
import{generarUri} from "./generadorUri.js"
import{consumirAPI} from "./servicio.js"
import{pintarCanciones} from "./pintardatos.js"

/*console.log("su nombre es: "+nombrePersona)
console.log("su estatura es: " +estatura)
console.log("su Institucion es: " +institucion)*/

//traigo el token
//console.log(TOKEN)

//Rutina para detectar el clic en el boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let frutaSeleccionada=document.getElementById("fruta").value
    //console.log("la fruta seleccionada es: "+ frutaSeleccionada)
    let URI=generarUri(frutaSeleccionada)
    //console.log(URI)

    async function activarAPI(){
        let token=await generarToken()
        let cancionesApi=await consumirAPI(URI,token)
        //llamar pintar canciones
        //console.log(cancionesApi)
        pintarCanciones(cancionesApi)
    }
    activarAPI()
    
})