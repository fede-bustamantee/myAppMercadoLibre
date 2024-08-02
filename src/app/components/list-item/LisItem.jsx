import ImagenProducto from "../ImagenProducto/page";
import Clasificacion from "../Clasificacion/page";
import DetalleProducto from "../DetalleProducto/page";

export default function LisItem({ 
  id,
  title, 
  price,
  currency_id,
  shipping,
  installments,
  thumbnail,
  permalink,
  seller,
  ratings,
  total,
  attributes
}) {
  return (
    <li>
      <a href={permalink} rel="noopener noreferrer"> {/* Redirige al enlace proporcionado por MercadoLibre en la misma pestaña */}
        <div className="flex p-1 border-b border-b-gray-200">
          <ImagenProducto
            permalink={permalink}  
            thumbnail={thumbnail} 
            title={title}
          />
          <DetalleProducto
            title={title}
            price={price}
            currency_id={currency_id}
            shipping={shipping}
            installments={installments}
            permalink={permalink}
            attributes={attributes}
          />
          <div className="w-40 h-40 bg-white">
            <Clasificacion ratings={ratings} total={total} seller={seller} />
          </div>
        </div>
      </a>
    </li>
  );
}
