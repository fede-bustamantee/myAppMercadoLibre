'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const BeneficioProductoComponent = ({ beneficioProducto }) => {
  return (
    <div className="flex m-10 w-[1208px] justify-center">
      {beneficioProducto.map((item, index) => (
        <div key={index} className="relative flex m-2 w-[584px] h-[250px] rounded-md hover:shadow-xl bg-white">
          <a href={item.enlaceBeneficio}>
            <img
              src={item.imagenPrincipal}
              alt="imagen producto"
              className="h-[250px] w-[250px] object-cover smoothing-antialiased rounded-r-md shadow-sm absolute -right-0"
            />
            <div className="flex flex-col absolute bottom-10 m-10">
              <span className="font-sans--apple-system text-xs">{item.text1}</span>
              <span className="font-melifuente font-semibold text-xl">{item.text2}</span>
              <span className="font-melifuente font-semibold text-xl">{item.text3}</span>
              <button className="bg-meli-azul duration-300 hover:bg-blue-700 h-[35px] w-[125px] mt-2">
                <a href={item.enlaceBeneficio} className="text-white">Ver ofertas</a>
              </button>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default dynamic(() => Promise.resolve(BeneficioProductoComponent), { ssr: false });