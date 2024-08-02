"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const HeaderComponent = () => {
  const searchInputRef = useRef(null);

  const handleSearchClick = (e) => {
    if (!searchInputRef.current.value.trim()) {
      e.preventDefault();
      searchInputRef.current.focus();  // Enfoca el campo de búsqueda
    }
  };

  return (
    <header className="w-full bg-customYellow">
      <div className="max-w-screen-xl mx-auto p-8 flex items-center">
        <Link href="/">
          <img
            className="logoML"
            src="/imagenes/logoMercadoLibre.png"
            alt="LogoMercaLibre"
          />
        </Link>

        <form action="/items" className="w-full flex">
          <input
            ref={searchInputRef}
            className="buscar shadow-md outline-none"
            autoComplete="off"
            name="q"
            type="text"
            placeholder="Buscar productos, marcas y más..."
          />
          <button
            className="bg-white px-3 border-l shadow-md border-l-slate-200"
            onClick={handleSearchClick}
          >
            <Image
              width={"15"}
              height={"15"}
              src="/imagenes/lupaBuscar.png"
              alt="Buscar"
            />
          </button>
        </form>
        <Link href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=banner-menu&me.audience=all&me.bu=9&me.bu_line=36&me.component_id=banner_menu_web_ml&me.content_id=ECOSYSTEM_LOYALTY_N6_BNR_MENU_3999&me.flow=146&me.logic=campaigns&me.position=0">
          <img
            className="logoDisney"
            src="/imagenes/disneyPlus.png"
            alt="LogoMercaLibre"
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
