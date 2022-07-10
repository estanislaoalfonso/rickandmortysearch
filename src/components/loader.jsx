export const Loader = () => {
    return (
        //Me traigo el loader de Bootstrap, es todo el div que tengo aqui debajo.
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}