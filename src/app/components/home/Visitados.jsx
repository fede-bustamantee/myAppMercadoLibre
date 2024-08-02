import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CarouselComponent = ({ visitado }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const siguienteImagen = () => {
    setDirection(1);
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(visitado.length / itemsPerPage) - 1 ? 0 : prevPage + 1
    );
  };

  const anteriorImagen = () => {
    setDirection(-1);
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(visitado.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  return (
    <div className="relative h-[421px] w-[1280px] p-4 -mt-20 flex align-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentPage}
          className="absolute w-full flex justify-center"
          initial={{ opacity: 0, x: direction === 1 ? 1000 : -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 1 ? 1000 : -1000 }}
          transition={{ duration: 0.5 }}
        >
          {visitado.slice(startIdx, endIdx).map((item, index) => (
            <div key={`${item.enlaceProducto}-${index}`} className="w-[227px] h-[400px] p-2">
              <a href={item.enlaceProducto}>
                <div className="bg-white flex shadow-md hover:shadow-2xl rounded-t-lg h-[65%]">
                  <img className="h-full w-full object-contain m-auto rounded-t-lg" src={item.imagen} alt="imagen producto" />
                </div>
              </a>
              <a href={item.enlaceProducto}>
                <div className="bg-white h-[35%] shadow-md rounded-b-lg p-2">
                  <h1 className="text-[12px] truncate">{item.nombreProducto}</h1>
                  <p className="text-[10px] line-through">{item.precioAnterior}</p>
                  <span className="text-2xl">{item.precio}</span>
                  <span className="font-melifuente text-meli-verde text-[13px]">{item.descuento}</span>
                  <h3 className="text-[10px]">{item.formaPago}</h3>
                  <p className="text-xs font-semibold text-meli-verde">{item.envio}</p>
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      {currentPage !== Math.ceil(visitado.length / itemsPerPage) - 1 && (
        <button
          onClick={siguienteImagen}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-5 px-4 py-4 bg-white rounded-full border border-blue-600"
        >
          <img className="h-5 w-5" src="/imagenes/right.png" alt="Imagen Siguiente" />
        </button>
      )}
      {currentPage !== 0 && (
        <button
          onClick={anteriorImagen}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-5 px-4 py-4 bg-white rounded-full border border-blue-600"
        >
          <img className="h-5 w-5" src="/imagenes/left.png" alt="Imagen Anterior" />
        </button>
      )}
    </div>
  );
};

export default CarouselComponent;
