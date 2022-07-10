import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import { CardPersonaje } from "./cardPersonaje";
import { Loader } from "./loader";

export const PintarDatos = ({nombrePersonaje}) => {

    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false)


    useEffect (() => {
        consumirApi(nombrePersonaje)
    },[nombrePersonaje])


    const consumirApi = async (nombreParam) => {
        //Para activar el Loading, lo que voy a hacer, es que mientras la información no llegue (O sea, antes del fetch), nuestro loader arranque en true. Luego en el FINALLI, de la misma función lo voy a setear en FALSE.
        setLoading (true)

        let fetchURL = `https://rickandmortyapi.com/api/character/?name=${nombreParam}&status=alive`

        try {
            const respuesta = await fetch (fetchURL)
            console.log(respuesta)
            //cuando ponemos el ! delante de la propiedad, es que queremos decir que si esa propiedad es falsa.
            if(!respuesta.ok) {
                return Swal.fire({
                    title: 'Error!',
                    text: 'Personaje no encontrado',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }

            const datosPersonaje = await respuesta.json()
            console.log(datosPersonaje.results)
            setPersonajes(datosPersonaje.results)
        }
        catch (err) {
            console.log(err)
        } 
        finally {
            //Aquí, cuando la app haya recopilado los datos, quita el Loader.
            setLoading (false)
        }
    }



    return (
        <div> 
            {
            loading ? <Loader/> : 
            <div className="row">
             {personajes.map(item => <CardPersonaje key={item.id} personajeParam={item}/>)}
            </div>
         }
        </div>
    )
}