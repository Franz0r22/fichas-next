'use client'

import { useEffect } from 'react';
import { getPromociones, getSucursales, getAnnios, getCategorias, getMarcas, getModelos, getPrecios, getKms, getTransmision, getCombustibles, getAnniominmax, getPreciominmax } from './services/getData';
import Fichas from './components/fichas';

export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [promocionesData, sucursalesData, anniosData, categoriasData, marcasData, modelosData, preciosData, kmsData, transmisionData, combustiblesData, anniominmaxData, preciominmaxData] = await Promise.all([
          getPromociones(),
          getSucursales(),
          getAnnios(),
          getCategorias(),
          getMarcas(),
          getModelos(),
          getPrecios(),
          getKms(),
          getTransmision(),
          getCombustibles(),
          getAnniominmax(),
          getPreciominmax(),
        ]);
  
        console.log('Promociones:', promocionesData);
        console.log('Sucursales:', sucursalesData);
        console.log('Años:', anniosData);
        console.log('Categorias:', categoriasData);
        console.log('Marcas:', marcasData);
        console.log('Modelos:', modelosData);
        console.log('Precios:', preciosData);
        console.log('Kms:', kmsData);
        console.log('Transmision:', transmisionData);
        console.log('Combustible:', combustiblesData);
        console.log('Año Min y Max:', anniominmaxData);
        console.log('Precio Min y Max:', preciominmaxData);


      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <main className="grid grid-cols-12 gap-4">
        <section className="col-span-4">
          hola1
        </section>
        <section className="col-span-8">
          hola2
        <Fichas />
        </section>
      </main>
    </div>
  );
}
