'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

// Definir tipos para las propiedades del objeto que recibes
interface Categoria {
  id: string;
  nombre: string;
  nombreIngles: string;
}

interface Marca {
    id: string;
    nombre: string;
  }

export default function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [marcas, setMarcas] = useState<Marca[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api');
        const responseData = response.data;
        const data =  responseData.data;

        setCategorias(data.categorias);
        setMarcas(data.marcas);

        console.log(data);

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <main className="grid grid-cols-12 gap-4">
        <section className="col-span-2">
         <h1>Categoria:</h1>
          <ul>
            {categorias &&
             categorias.map((categoria) => (
              <li key={categoria.id}>
                <p>{categoria.nombre}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="col-span-2">
        <h1>Marcas:</h1>
          <ul>
            {marcas &&
             marcas.map((marca) => (
              <li key={marca.id}>
                <p>{marca.nombre}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
