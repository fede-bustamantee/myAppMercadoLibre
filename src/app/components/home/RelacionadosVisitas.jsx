"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RelacionadosVisitados({ relacionadosVisita }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const siguienteImagen = () => {
    setDirection(1);
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(relacionadosVisita.length / itemsPerPage) - 1 ? 0 : prevPage + 1
    );
  };

  const anteriorImagen = () => {
    setDirection(-1);
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(relacionadosVisita.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  return (
    <div data-aos="fade-up">
    <div className="relative h-[400px] w-[1280px] p-4 flex align-center justify-center overflow-hidden rounded-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentPage}
          className="absolute w-full flex justify-center"
          initial={{ opacity: 0, x: direction === 1 ? 1000 : -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 1 ? 1000 : -1000 }}
          transition={{ duration: 0.5 }}
        >
          {relacionadosVisita.slice(startIndex, endIndex).map((item, index) => (
            <div key={index} className="w-[227px] h-[400px] flex-shrink-0">
              <a href={item.enlaceProducto}>
                <div className="bg-white flex h-[65%] rounded-none">
                  <img
                    className="h-full w-full object-contain m-auto"
                    src={item.imagen}
                    alt="imagen producto"
                  />
                </div>
              </a>
              <a href={item.enlaceProducto}>
                <div className="bg-white h-[35%] p-2">
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
      {currentPage !== Math.ceil(relacionadosVisita.length / itemsPerPage) - 1 && (
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
    </div>
  );
}
