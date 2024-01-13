import { getInfo } from '../services/getData';

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
    preciosMinMax
  } = data;

  //const { [categorias] } = await getInfo();

  return (
    <main style={{ height: '100vh' }}>
      <p className="text-6xl text-center md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
        SSR
      </p>
      <section className="flex gap-5">
        <div>
          <h2 className="text-2xl font-semibold">Categorias:</h2>
          <ul>
            {categorias.map((categoria) => (
              <li key={categoria.id}>{categoria.nombre}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Marcas:</h2>
          <ul>
            {marcas.map((marca) => (
              <li key={marca.id}>{marca.nombre}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Modelos:</h2>
          <ul>
            {modelos.map((modelo) => (
              <li key={modelo.MODELOID}>{modelo.MODELO}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );

};

