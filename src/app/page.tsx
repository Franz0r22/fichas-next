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

interface Modelo {
  MODELOID: string;
  MODELO: string;
}

interface Transmision {
  id: number;
  tipo: string;
}

export default function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [transmision, setTransmision] = useState<Transmision[]>([]);

  const [showAllModelos, setShowAllModelos] = useState(false);
  const [showAllMarcas, setShowAllMarcas] = useState(false);

  const toggleShowAllModelos = () => {
    setShowAllModelos(!showAllModelos);
  };

  const toggleShowAllMarcas = () => {
    setShowAllMarcas(!showAllMarcas);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api');
        const responseData = response.data;
        const data =  responseData.data;

        setCategorias(data.categorias);
        setMarcas(data.marcas);
        setModelos(data.modelos);
        setTransmision(data.transmision.map(([id, tipo]: [number, string]) => ({ id, tipo })));

        console.log(data);

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl p-4 grid grid-cols-12">
      <main className="flex flex-col col-span-4 gap-4">
        <section className="">
          <h4>Categoria:</h4>
          {categorias &&
            categorias.map((categoria) => (
              <div key={categoria.id}>
                <input 
                  type="checkbox"
                  id={categoria.id}
                  name={categoria.nombre} />
                <label htmlFor={categoria.id}>
                  {categoria.nombre}
                </label>
              </div>
            ))}
        </section>
        <section className="col-span-2">
          <h4>Marcas:</h4>
          <ul>
            {marcas &&
              marcas.slice(0, showAllModelos ? marcas.length : 5).map((marca) => (
                <li key={marca.id}>
                  <div>
                    <input
                      type="checkbox"
                      id={marca.id}
                      name={marca.nombre}
                    />
                    <label htmlFor={marca.id}>{marca.nombre}</label>
                  </div>
                </li>
              ))}
          </ul>
          {marcas.length > 5 && (
            <button onClick={toggleShowAllModelos}>
              {showAllModelos ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </section>
        <section className="col-span-2">
          <h4>Modelos:</h4>
          <ul>
            {modelos &&
              modelos.slice(0, showAllMarcas ? modelos.length : 5).map((modelo) => (
                <li key={modelo.MODELOID}>
                  <div>
                    <input
                      type="checkbox"
                      id={modelo.MODELOID}
                      name={modelo.MODELO}
                    />
                    <label htmlFor={modelo.MODELOID}>{modelo.MODELO}</label>
                  </div>
                </li>
              ))}
          </ul>
          {modelos.length > 5 && (
            <button onClick={toggleShowAllMarcas}>
              {showAllMarcas ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </section>
        <section className="">
        <h4>Transmisión:</h4>
        <ul>
          {transmision &&
          transmision.map((transmision) => (
            <li key={transmision.id}>
              <p>{transmision.tipo}</p>
            </li>
          ))}
        </ul>
        </section>
      </main>
      <main className="col-span-8">
        <p className="text-6xl text-center md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
          STOCKS
        </p>
      </main>
    </div>
  );
}
