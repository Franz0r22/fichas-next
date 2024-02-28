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

interface Car {
  MARCA: string;
  MODELO: string;
  MARCAID: number;
  MODELOID: number;
  AUTODES: string;
  CATMARMODID: number;
  TABLA: number;
  AUTOID: number;
  PRODUCTOID: number;
  CATEGORIAID: number;
  INTANO: number;
  VCHCOLOR: string;
  VCHVERSION: string;
  VCHDESCRIPCION: string;
  VCHPRECIO: number;
  CLIENTEID: number;
  VCHCODIGO: string;
  VCHMONEDA: string;
  VCHKILOMETROS: string;
  INTCILINDRADA: number;
  VCHTELEFONO1: string;
  VCHTELEFONO2: string | null;
  VCHEMAIL1: string;
  TIPOPUB: number;
  TIPOCONT: string;
  VCHNOMBRE: string;
  VCHAPELLIDOS: string;
  VCHORIGEN: string | null;
  BITVIDEO: null;
  VCHPATENTE: string;
  INTTIPO: number;
  CONTACTOID: number;
  INTESTADO: number;
  INTCONDICION: number;
  FECINIPUBLICA: string;
  VCHFOTO: string;
  ETIQUETA: string;
  VCHCOMBUSTIBLE: string;
  VCHTRANSMISION: string;
  VCHVIDEO: string | null;
  VCHACTIVADOR: string;
  VCHACTIVAFINANCIAMIENTO: string;
  VCHETIQUETA_TITULO: string;
  VCHETIQUETA_COLOR: string;
  VCHPIEMINIMO: string | null;
  VCHCAE: string | null;
  VCHNUMCUOTA: string | null;
  VCHCUOTA: string | null;
  VCHVFMG: string | null;
  CLIENTE: string;
  NOMFOTO: string;
  VCHCTC: string | null;
  VCHLEGALPRECIO: string;
  VCHLEGALPRECIO2: string;
  VCHLEGALPRECIO3: string;
  VCH360: string | null;
  INTPORCALIDADCALPUB: number;
  url_foto_particular: string;
  CARROCERIAID: string;
  PESOOPERACIONAL: number;
  CAPACIDADCARGA: string | null;
  ALTURAELEVACION: string | null;
  VCHNUMSERIAL: string | null;
  VCHFAX: string;
  fontcolor: string;
  PLANID: number;
  APITOKEN: number | null;
  TOKEN: string | null;
  RowNumber: string;
}

export default function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [transmision, setTransmision] = useState<Transmision[]>([]);

  const [showAllModelos, setShowAllModelos] = useState(false);
  const [showAllMarcas, setShowAllMarcas] = useState(false);

  const [cars, setCars] = useState<Car[]>([]);

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
        setCars(data.cars);

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
        <h2>Vehículos disponibles:</h2>
        {cars.length > 0 ? (
        <ul>
          {cars.map((car) => (
            <li key={car.AUTOID}>
              <img src={car.url_foto_particular} alt={car.MARCA} width="300"/>
              <p>Marca: {car.MARCA}</p>
              <p>Modelo: {car.MODELO}</p>
              <p>Año: {car.INTANO}</p>
              <p>Precio: {car.VCHPRECIO} {car.VCHMONEDA}</p>
              <p>Kilometraje: {car.VCHKILOMETROS} km</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay vehículos disponibles en este momento.</p>
      )}
      </main>
    </div>
  );
}
