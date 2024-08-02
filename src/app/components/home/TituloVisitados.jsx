export default function TituloVisitados ({tituloVisitado}){
    return(
    <div className="ml-16" >
        <span className="text-xl font-melifuente">{tituloVisitado.titulo}</span>
        <a className="text-sm text-meli-azul p-4" href={tituloVisitado.link_historial}>{tituloVisitado.titulo_historial}</a>
    </div>)}