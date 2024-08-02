'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CarouselComponent.module.css'; // Importa el módulo CSS

const CarouselComponent = ({ bannerPrincipal }) => {
  const [indice, setIndice] = useState(0); // Estado para el índice de la imagen actual
  const [direction, setDirection] = useState(0); // Estado para la dirección de la animación (1 = adelante, -1 = atrás)
  const [hover, setHover] = useState(false); // Estado para controlar la visibilidad de los botones de navegación
  const intervalRef = useRef(null); // Ref para almacenar la referencia del intervalo de cambio automático de imágenes

  // Función para avanzar a la siguiente imagen
  const siguienteImagen = () => {
    setDirection(1); // Establece la dirección de la animación hacia adelante (derecha)
    setIndice((prevIndex) =>
      prevIndex === bannerPrincipal.length - 1 ? 0 : prevIndex + 1 // Avanza al siguiente índice o vuelve al principio si está en el último
    );
  };

  // Función para retroceder a la imagen anterior
  const anteriorImagen = () => {
    setDirection(-1); // Establece la dirección de la animación hacia atrás (izquierda)
    setIndice((prevIndex) =>
      prevIndex === 0 ? bannerPrincipal.length - 1 : prevIndex - 1 // Retrocede al índice anterior o vuelve al final si está en el primero
    );
  };

  // Efecto para iniciar y limpiar el intervalo de cambio automático de imágenes
  useEffect(() => {
    // Función para iniciar el intervalo
    const startInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current); // Limpia el intervalo existente
      intervalRef.current = setInterval(siguienteImagen, 6000); // Cambia la imagen cada 6 segundos
    };

    startInterval(); // Inicia el intervalo

    // Limpia el intervalo cuando el componente se desmonte o el índice cambie
    return () => clearInterval(intervalRef.current);
  }, [indice]); // Dependencia en `indice` para reiniciar el intervalo cuando cambie

  return (
    <div
      className="relative h-[340px] overflow-hidden"
      onMouseEnter={() => setHover(true)} // Muestra los botones de navegación al pasar el ratón
      onMouseLeave={() => setHover(false)} // Oculta los botones de navegación al quitar el ratón
    >
      <AnimatePresence initial={false}>
        {bannerPrincipal.map((item, index) => (
          index === indice && (
            <motion.div
              key={`${item.id}-${index}`}
              className="absolute top-0 left-0 w-full h-[340px]"
              initial={{ opacity: 1, x: direction === 1 ? 1000 : -1000 }} // Configura la animación inicial basada en la dirección
              animate={{ opacity: 1, x: 0 }} // Configura la animación final para la imagen visible
              exit={{ opacity: 1, x: direction === 1 ? -1000 : 1000 }} // Configura la animación de salida basada en la dirección
              transition={{ duration: 0.5 }} // Duración de la transición
            >
              <a href={item.linkImagen}>
                <img
                  src={item.imagen}
                  alt={`imagen banner principal ${index + 1}`}
                  className="w-full h-[340px]"
                />
              </a>
              <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-customGray to-transparent"></div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <div className={`${hover ? 'flex' : 'hidden'} absolute top-1/2 w-full transform -translate-y-1/2`}>
        <button 
          onClick={anteriorImagen}
          className="absolute left-0 transform -translate-y-1/2 px-5 py-7 bg-white rounded-r-full"
        >
          <img className={styles.left} src="/imagenes/left.png" alt="Anterior" />
        </button>
        <button
          onClick={siguienteImagen}
          className="absolute right-0 transform -translate-y-1/2 px-5 py-7 rounded-l-full bg-white"
        >
          <img className={styles.right} src="/imagenes/right.png" alt="Siguiente" />
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-10 flex space-x-1">
        {bannerPrincipal.map((_, index) => (
          <span
            key={index}
            className={`block w-2 h-2 rounded-full border ${index === indice ? 'bg-white border-gray-600' : 'bg-gray-600 border-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
