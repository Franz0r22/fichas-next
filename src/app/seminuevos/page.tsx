import { getInfo } from '../services/getData';
import { getPaginatedCars } from '../services/getData';
import Filters from '../components/Filters';
import CarComponent from '../components/CarComponent';
import Paginador from '../components/Paginador';

export default async function Seminuevos() {
  const data = await getInfo();

  const {
    categorias,
    marcas,
    modelos,
    promociones,
    annioDesde,
    annioHasta,
    precios,
    kms,
    transmision,
    sucursales,
    combustible,
    anniosMinMax,
    preciosMinMax,
  } = data;

  const cars = await getPaginatedCars();

  return (
    <main className="mx-auto max-w-screen-xl gap-4 grid grid-cols-12">
      {/* <p className="text-6xl text-center md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
        SSR
      </p> */}
      <section className="flex flex-col col-span-3">
        <Filters
          categorias={categorias}
          marcas={marcas}
          modelos={modelos}
        />
      </section>

      <section className='col-span-9'>
        {cars.length > 0 ? (
          <CarComponent 
            cars={cars}
          />
        ) : (
          <p>No hay vehículos disponibles en este momento.</p>
        )}
      </section>
    </main>
  );
}
