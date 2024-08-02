export default function TituloBeneficios ({tituloBeneficio}){
    return(
    <div className="ml-16">
        
        <span className="text-xl font-melifuente">{tituloBeneficio.titulo}</span>
        <a className="text-sm text-meli-azul p-4" href={tituloBeneficio.link_historial}>{tituloBeneficio.titulo_historial}</a>
    </div>)}