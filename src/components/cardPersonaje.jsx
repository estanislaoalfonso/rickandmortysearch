export const CardPersonaje = ({personajeParam}) => {

    //desestructuro el parámetro para tener a la vista lo que me sirve.
    const {name, species, image} = personajeParam

    return (
        <div className="col-md-4 mb-2 mt-2">
            <div className="card">
                <img src={image} alt={`imagen-${name}`} className="card-img-top" />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>{species}</p>
                </div>
            </div>
        </div>
    )
}