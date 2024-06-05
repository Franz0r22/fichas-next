import { getInfo } from '../services/getData';
import Filters from '../components/filters';
import Car from '../components/car';

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
    cars
  } = data;

  return (
    <main style={{ height: '100vh' }}>
      <p className="text-6xl text-center md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
        SSR
      </p>
      <Filters categorias={categorias} marcas={marcas} modelos={modelos}/>
      <section>
        <Car cars={cars}/>
      </section>
    </main>
  );
}
