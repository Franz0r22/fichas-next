import axios from 'axios';
// import { apiUrl, bearerToken, clienteId } from './config.service';

const apiUrl = process.env.NEXT_PUBLIC_API_FICHAS_URL;
const bearerToken = process.env.NEXT_PUBLIC_API_FICHAS_TOKEN;
const clienteId = process.env.NEXT_PUBLIC_CLIENTE_ID;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json',
  },
});

export const getInfo = async () => {
  let data = {};

  try {
    const [
      categorias,
      marcas,
      modelos,
      promociones,
      anniosDesde,
      precios,
      kms,
      transmision,
      sucursales,
      combustible,
      anniosMinMax,
      preciosMinMax,
    ] = await Promise.all([
      getCategorias(),
      getMarcas(),
      getMarcas().then(marcas => (marcas && marcas.length) ? getModelos(marcas) : []),
      getPromociones(),
      getAnnios(),
      getPrecios(),
      getKms(),
      getTransmision(),
      getSucursales(),
      getCombustibles(),
      getAnniominmax(),
      getPreciominmax(),
    ]);

    const anniosHasta = [...anniosDesde].reverse();

    data = {
      categorias,
      marcas,
      modelos,
      promociones,
      annioDesde: anniosDesde,
      annioHasta: anniosHasta,
      precios,
      kms,
      transmision,
      sucursales,
      combustible,
      anniosMinMax,
      preciosMinMax,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data;
};


export const fetchData = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getCategorias = async () => {
  const url = `/diccionario/clientes/${clienteId}/categorias`;
  return fetchData(url);
};

export const getMarcas = async () => {
  const url = `/diccionario/marcas/clientes/${clienteId}/categorias`;
  return fetchData(url);
};

// export const getModelosAjax = async (request) => {
//   const marcaArr = Array.isArray(request.marca) ? request.marca.join(',') : request.marca;
//   const categoriaArr = Array.isArray(request.categoria) ? request.categoria.join(',') : request.categoria;

//   let categoriaArrFormatted = categoriaArr ? categoriaArr.replace(' / Station Wagon', '') : 'Automóviles,Camionetas,Suv,Furgones';

//   let url = `/diccionario/clientes/${clienteId}/categorias/${categoriaArrFormatted}/marcas/${marcaArr}/modelos`;

//   if (url.includes(' ')) {
//     url = url.replace(/ /g, '%20');
//   }

//   if (marcaArr) {
//     return fetchData(url);
//   }

//   return [];
// };

// export const getMarcasAjax = async (request) => {
//   const categoriaArr = Array.isArray(request.categoria) ? request.categoria.join(',') : request.categoria;
//   let categoriaArrFormatted = categoriaArr ? categoriaArr.replace(' / Station Wagon', '') : 'Automóviles,Camionetas,Suv,Furgones';

//   let url = `/diccionario/clientes/${clienteId}/categorias/${categoriaArrFormatted}/marcas`;

//   if (url.includes(' ')) {
//     url = url.replace(/ /g, '%20');
//   }

//   return fetchData(url);
// };

export const getModelos = async (marca) => {
  const marcaArr = Array.isArray(marca) ? marca.join(',') : marca;

  let url = `/diccionario/clientes/${clienteId}/marca/${marcaArr}/modelos`;

  if (url.includes(' ')) {
    url = url.replace(/ /g, '%20');
  }

  return fetchData(url);
};

export const getPromociones = async () => {
  const url = `/get/etiquetas/${clienteId}`;
  return fetchData(url);
};

export const getSucursales = async (unssetLast = true) => {
  const url = `/diccionario/autos/sucursales/${clienteId}`;
  
  const sucursales = await fetchData(url);

  if (unssetLast && sucursales.length > 0) {
    sucursales.pop();
  }

  return sucursales;
};

export const getAnnios = async () => {
  const url = `/diccionario/autos/annios/${clienteId}`;
  return fetchData(url);
};

export const getPrecios = async () => {
  const url = `/diccionario/autos/precios`;
  return fetchData(url);
};

export const getKms = async () => {
  const url = `/diccionario/autos/kms`;
  return fetchData(url);
};

export const getTransmision = async () => {
  const url = `/diccionario/autos/transmision`;
  return fetchData(url);
};

export const getCombustibles = async () => {
  const url = `/diccionario/autos/combustibles/${clienteId}`;
  return fetchData(url);
};

export const getAnniominmax = async () => {
  const url = `/diccionario/autos/anniominmax/${clienteId}`;
  return fetchData(url);
};

export const getPreciominmax = async () => {
  const url = `/diccionario/autos/preciosminmax/${clienteId}`;
  return fetchData(url);
};

export const getDetalle = async () => {
  const url = `/auto/1141402/detalle`;
  return fetchData(url);
};


// export const getAutos = async (params = {}) => {
//   try {
//     const url = '/autos';

//     console.log('Data enviada a la API:', params);
//     // Realiza la solicitud POST con axios
//     const response = await api.post(url, params);

//     // Devuelve los datos de la respuesta
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching autos:', error);
//     throw error;
//   }
// };

