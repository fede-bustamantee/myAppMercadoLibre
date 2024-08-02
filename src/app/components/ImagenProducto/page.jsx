import Link from "next/link"


const ImagenProducto = ({ thumbnail, title, permalink }) => {
  return (
    <div>
      <img className="w-40 h-40 object-contain " src={thumbnail} alt={title} />			
    </div>
  )
}

export default ImagenProducto
