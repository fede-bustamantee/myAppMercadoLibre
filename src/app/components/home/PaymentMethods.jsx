export default function PaymentMethods({ metodos, accion }) {
    return (
        <>
            <div className="flex w-[1184px] mx-auto bg-white p-4 rounded-md shadow-sm">
                <div className="flex flex-1 justify-between">
                    {metodos.map((item, index) => (
                        <div key={index} className="col-span-1 flex gap-2">
                            <img src={item.icono} alt={item.link_texto} />
                            <div className="flex flex-col">
                                <span className="font-normal">{item.titulo}</span>
                                <a className="text-sm text-meli-azul" href={item.link}>
                                    {item.link_texto}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-44 flex justify-end">
                    <a href={accion.link}>
                        <img src={accion.icono} alt="icono" />
                    </a>
                </div>
            </div>
        </>
    );
}
