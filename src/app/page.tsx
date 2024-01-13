'use client'

import { useEffect } from 'react';
import { getInfo } from './services/getData';
import Fichas from './components/fichas';

export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getInfoData = await getInfo();

        //console.log('Sucursales:', sucursalesData);
        console.log('Data:', getInfoData);

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
          Filtros
        </section>
        <section className="col-span-8">
        <Fichas />
        </section>
      </main>
    </div>
  );
}
