import Link from "next/link";


const Clasificacion = ({ seller  }) => {

const { seller_reputation } = seller;

  return (
  <Link href={ seller } >
    <div className="flex mt-8">
      <span>{  }</span>
      <img className="w-5 h-5 bg-blue-600" clas src="/imagenes/starBlue.png"  />
      <img className="w-5 h-5 bg-blue-600" clas src="/imagenes/starBlue.png" />
      <img className="w-5 h-5 bg-blue-600" clas src="/imagenes/starBlue.png" />
      <img className="w-5 h-5 bg-blue-600" clas src="/imagenes/starBlue.png" />
      <img className="w-5 h-5 bg-blue-600" clas src="/imagenes/starBlue.png" />
      <span>{  }</span>
    </div>
    </Link>
  )
}

export default Clasificacion
