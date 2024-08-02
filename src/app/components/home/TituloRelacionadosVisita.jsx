export default function TituloRelacionadosVisitas ({tituloRelacionadosVisita}){
    return(
    <div data-aos="fade-up">
    <div className="ml-16">
        <span className="text-xl font-melifuente ml-2 flex flex-col">{tituloRelacionadosVisita.titulo}</span>
        <a className="text-sm text-meli-azul p-4 -ml-2" href={tituloRelacionadosVisita.link_historial}>{tituloRelacionadosVisita.titulo_historial}</a>
    </div>
    </div>)}