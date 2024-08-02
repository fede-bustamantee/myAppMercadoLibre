'use client';

import { useEffect } from 'react';
import Image from 'next/image'
import CarouselComponent from './components/Carousel/CarouselComponent'
import PaymentMethods from './components/home/PaymentMethods'
import Separator from './shared/separator/Separator';
import Visitados from './components/home/Visitados';
import TituloVisitados from './components/home/TituloVisitados';

import NivelSeis from './components/home/NivelSeis';
import TituloBeneficios from './components/home/TituloBeneficio';
import Beneficios from './components/home/Beneficios';
import BeneficioProducto from './components/home/BeneficioProducto';
import RelacionadosVisitados from './components/home/RelacionadosVisitas';
import TituloRelacionadosVisitas from './components/home/TituloRelacionadosVisita';
import CategoriaPopular from './components/home/CategoriaPopular';
import Footer from './components/home/Footer';
import ListItem from './components/list-item/LisItem';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS


const paymentMethods = require('./mocks/metodos-pago.json');
const visitados = require('./mocks/ultima-visita.json');
const tituloVisitado = require('./mocks/tituloEntre.json');
const bannerPrincipal = require('./mocks/banner-principal.json');
const tituloBeneficio = require('./mocks/titulo-Beneficio.json');
const beneficios = require('./mocks/beneficios.json');
const beneficioProducto = require('./mocks/beneficioProductos.json');
const relacionadosVisita = require('./mocks/relacionadosVisitas.json');
const tituloRelacionadosVisita = require('./mocks/tituloRelacionadosVisita.json');
const populares = require('./mocks/categorias-populares.json');
const footer = require('./mocks/footer.json');

export default function Home({}) {
    useEffect(() => {
        AOS.init({});
    }, []);
return (
    <>
<CarouselComponent {...bannerPrincipal} />
{/* <TituloVisitados {...tituloVisitado} /> */}

<Visitados {...visitados}/>

<Separator>
    <TituloRelacionadosVisitas {...tituloRelacionadosVisita} />
</Separator>

<RelacionadosVisitados {...relacionadosVisita} />

<Separator>
    <NivelSeis  />
</Separator>

<Separator>
    <TituloBeneficios {...tituloBeneficio} />
</Separator>

<Separator>
    <Beneficios {...beneficios} />
</Separator>

<Separator>
    <BeneficioProducto {...beneficioProducto} />
</Separator>

<Separator>
    <h1 className='font-melifuente text-2xl ml-14' >Categorías populares</h1>
    </Separator>    
<Separator>
    <CategoriaPopular {...populares} />
</Separator>

<Separator >
<PaymentMethods {...paymentMethods} />
</Separator>

<Separator>
    <Footer {...footer} />
</Separator>
<Separator>
</Separator>
</>
)
}