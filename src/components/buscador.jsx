import { useBuscador } from "../hooks/useBuscador";
import Swal from 'sweetalert2'



//A los parámetros que entran en la función, se los puede desestructurar, como por ejemplo, en lugar de hacer props.setNombrePersonaje, sin {}, directamente desestructuramos y dejamos el {setNombrePersonaje}.
export const Buscador = ({setNombrePersonaje}) => {

    const [inputs, handleChange, reset] = useBuscador({
        nombre: ""
    })

    //desestructuro el input de lo que me traigo del buscador hook de arriba
    const {nombre} = inputs

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nombre)

        //validar campos.
        //.trim() => para quitar los espacios de la palabra buscada.
        if (!nombre.trim()) {
            return Swal.fire({
                title: 'Error!',
                text: 'Escriba algo por favor',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }

        setNombrePersonaje(nombre.trim().toLowerCase())

        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Ingrese personaje"
            className="form-control- mb-2"
            value={nombre}
            onChange={handleChange} 
            name="nombre"
            />

            <button
            type="submit"
            className="btn btn-dark">
                Buscar
            </button>
            
        </form>
    )
};