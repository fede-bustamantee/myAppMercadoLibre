export default function Footer({ footer }) {
    return (
        <div className="flex m-auto w-[1200px] content-center justify-center bg-white">
            {footer.map((item, index) => (
                <div key={index} className="w-[362px] h-[242px] ml-4 p-2">
                    <div className="flex items-center justify-center p-2 border-gray-300 border-l-2">
                        <img src={item.imagen} className="h-[46px] w-[66px]" alt="icono del footer" />
                    </div>
                    <h2 className="text-center text-lg">{item.titulo}</h2>
                    <p className="text-center text-xs px-6">
                        <span className="w-[313px] h-[54px]">{item.descripcion}</span>
                    </p>
                    <div className="flex justify-center items-center">
                        <a href={item.enlaceEnlace} className="text-meli-azul p-2 font-melifuente text-sm duration-500 hover:text-blue-900">
                            {item.nombreEnlace}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}