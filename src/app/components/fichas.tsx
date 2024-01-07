import { useEffect } from 'react';

import { getPromociones, getSucursales, getAnnios, getCategorias, getMarcas, getModelos } from '../services/getData';

const Fichas = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const promocionesData = await getPromociones();
        console.log('Promociones:', promocionesData);

        const sucursalesData = await getSucursales();
        console.log('Sucursales:', sucursalesData);

        const anniosData = await getAnnios();
        console.log('Años:', anniosData);

        const categoriasData = await getCategorias();
        console.log('Categorias:', categoriasData);

        const marcasData = await getMarcas();
        console.log('Marcas:', marcasData);   
        
        const modelosData = await getModelos();
        console.log('Modelos:', modelosData)

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p className="text-6xl text-center md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
       Data
      </p>
    </div>
  );
};

export default Fichas;
