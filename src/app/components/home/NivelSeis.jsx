export default function NivelSeis() {
    return (
        <div className="w-[1140px] h-[210px] shadow-md m-auto -translate-x-8">
            <div className="w-full h-[70px] flex items-center justify-between bg-gradient-to-r from-fuchsia-700 via-pink-500 to-violet-950 rounded-t-lg shadow-md">
                <div className="flex items-center pl-4">
                    <span className="text-xl text-white font-semibold">Suscribite al nivel 6 por</span>
                    <div className="ml-2 text-white font-melifuente-bol">
                        <span className="line-through text-xl">$10.008</span>
                        <span className="ml-2 text-xl font-bold">$3.999/mes</span>
                    </div>
                </div>
                <div className="flex items-center pr-4 ml-auto">
                    <button className="h-[30px] w-[90px] bg-indigo-950 duration-300 hover:bg-indigo-900 text-white text-sm font-melifuente py-24px rounded-lg">
                        <a href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=widget_l6#c_id=/home/user-loyalty-benefits&c_uid=efc9e7c4-7f9d-4df8-9cec-3f8d09c06c9a">Suscribite</a>
                    </button>
                </div>
            </div>
            <div className="bg-white flex align-center justify-center">
                <div className="h-[140px] w-[1180px] p-5">
                    <span className="font-melifuente font-semibold pl-1">Conseguí los mejores beneficios en Mercado Libre</span>
                    <div className="flex justify-around mt-4">
                        <div className="flex items-center m-1">
                            <img className="h-[50px] rounded-lg border-l-neutral-500 border-2 m-1" src="/imagenes/dplus.png" />
                            <span>Disney+ incluido</span>
                        </div>
                        <div className="flex items-center">
                            <img className="h-[50px] rounded-xl border-l-neutral-500 border-2 m-1" src="/imagenes/transporte.png" />
                            <span className="w-[350px] h-[50px]">Envíos gratis y rápidos desde $ 23.000 y 45% OFF en envíos de menos de $ 23.000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
