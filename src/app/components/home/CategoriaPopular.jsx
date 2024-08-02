'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CategoriaPopular = ({ populares }) => {
  const itemsPerPage = 12; // 3 columnas * 4 filas
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const siguientePagina = () => {
    setDirection(1);
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(populares.length / itemsPerPage) - 1 ? 0 : prevPage + 1
    );
  };

  const anteriorPagina = () => {
    setDirection(-1);
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(populares.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  return (
    <div className="relative h-[350px] w-[1180px] m-auto shadow-md overflow-visible bg-white rounded-lg -translate-x-8 -mt-8">
      <AnimatePresence initial={false} custom={direction}>
      <motion.div
          key={currentPage}
          className="absolute grid grid-cols-4 grid-rows-3 gap-x-5 gap-y-2"
          initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }} // Reduce el movimiento
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 1 ? -50 : 50 }} // Reduce el movimiento
          transition={{ duration: 0.5 }} // Ajusta la duración
        >
          {populares.slice(startIdx, endIdx).map((item, index) => (
            <div
              key={`${item.enlace}-${index}`}
              className="flex flex-col h-[90px] w-[270px] border border-gray-300 rounded-lg overflow-hidden mt-4 translate-x-5" // Añadido overflow-hidden
            >
              <a href={item.enlace} className="flex h-full w-full">
                <div className="flex-1 bg-gray-200 flex items-center justify-center">
                  <img
                    src={item.icono}
                    alt={item.descripcion}
                    className="h-[75px] w-[75px]"
                  />
                </div>
                <div className="flex-1 bg-white group flex flex-col items-center justify-center p-2 transition duration-300 ease-in-out">
                  <p className="font-melifuente text-sm text-center group-hover:text-meli-azul">
                    {item.descripcion}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      {currentPage !== Math.ceil(populares.length / itemsPerPage) - 1 && (
        <button
          onClick={siguientePagina}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-7 px-4 py-4 bg-white rounded-full border border-blue-600 z-20"
        >
          <img className="h-5 w-5" src="/imagenes/right.png" alt="Imagen Siguiente" />
        </button>
      )}
      {currentPage !== 0 && (
        <button
          onClick={anteriorPagina}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-7 px-4 py-4 bg-white rounded-full border border-blue-600 z-20"
        >
          <img className="h-5 w-5" src="/imagenes/left.png" alt="Imagen Anterior" />
        </button>
      )}
    </div>
  );
};

export default CategoriaPopular;