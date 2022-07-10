import { useState } from "react"
import { Buscador } from "./components/buscador"
import { PintarDatos } from "./components/pintarDatos"

const App = () => {

    const [nombrePersonaje, setNombrePersonaje] = useState("");

    return (
        <div className="container">
            <h1>Rick and Morty</h1>
            <Buscador setNombrePersonaje = {setNombrePersonaje}/>
            <PintarDatos nombrePersonaje = {nombrePersonaje}/>
        </div>
    )
}

export default App