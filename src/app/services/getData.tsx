import axios from 'axios';
// import { apiUrl, bearerToken, clienteId } from './config.service';

const apiUrl = process.env.API_FICHAS_URL;
const bearerToken = process.env.API_FICHAS_TOKEN;
const clienteId = process.env.NEXT_PUBLIC_CLIENTE_ID;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json',
  },
});

const apiDTK2 = axios.create({
  baseURL: process.env.API_DTK2_URL,
  headers: {
    Authorization: `Bearer ${process.env.API_DTK2_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const getPaginatedCars = async () => {
  let cars;

  try {
    const clientId: any = process.env.NEXT_PUBLIC_CLIENTE_ID;
    const pageNumber: number = 1;
    const pageSize: number = 10;

    cars = await getCars(clientId, pageNumber, pageSize); // Corrige la asignación de la variable cars

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  return cars;
};

export const getInfo = async (): Promise<Record<string, any>> => {
  let data: Record<string, any> = {};

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


export const fetchData = async (url: string, params: any = {}): Promise<any> => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchDataDTK2 = async (url: string, params: any = {}): Promise<any> => {
  try {
    const response = await apiDTK2.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from DTK2 API:', error);
    throw error;
  }
};

export const getCars = async (clienteId: number, pageNumber: number, pageSize: number): Promise<any[]> => {
  const url = '/carDealers/stock';
  const params = {
    CLIENTEID: clienteId,
    TABLA: 1,
    PageNumber: pageNumber,
    PageSize: pageSize
  };
  return fetchDataDTK2(url, params);
};

export const getCategorias = async (): Promise<any[]> => {
  const url = `/diccionario/clientes/${clienteId}/categorias`;
  return fetchData(url);
};

export const getMarcas = async (): Promise<any[]> => {
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

export const getModelos = async (marca: any): Promise<any[]> => {
  const marcaArr = Array.isArray(marca) ? marca.join(',') : marca;

  let url = `/diccionario/clientes/${clienteId}/marca/${marcaArr}/modelos`;

  if (url.includes(' ')) {
    url = url.replace(/ /g, '%20');
  }

  return fetchData(url);
};

export const getPromociones = async (): Promise<any[]> => {
  const url = `/get/etiquetas/${clienteId}`;
  return fetchData(url);
};

export const getSucursales = async (unssetLast = true): Promise<any[]> => {
  const url = `/diccionario/autos/sucursales/${clienteId}`;
  
  const sucursales = await fetchData(url);

  if (unssetLast && sucursales.length > 0) {
    sucursales.pop();
  }

  return sucursales;
};

export const getAnnios = async (): Promise<any[]> => {
  const url = `/diccionario/autos/annios/${clienteId}`;
  return fetchData(url);
};

export const getPrecios = async (): Promise<any[]> => {
  const url = `/diccionario/autos/precios`;
  return fetchData(url);
};

export const getKms = async (): Promise<any[]> => {
  const url = `/diccionario/autos/kms`;
  return fetchData(url);
};

export const getTransmision = async (): Promise<any[]> => {
  const url = `/diccionario/autos/transmision`;
  return fetchData(url);
};

export const getCombustibles = async (): Promise<any[]> => {
  const url = `/diccionario/autos/combustibles/${clienteId}`;
  return fetchData(url);
};

export const getAnniominmax = async (): Promise<any[]> => {
  const url = `/diccionario/autos/anniominmax/${clienteId}`;
  return fetchData(url);
};

export const getPreciominmax = async (): Promise<any[]> => {
  const url = `/diccionario/autos/preciosminmax/${clienteId}`;
  return fetchData(url);
};

export const getDetalle = async (): Promise<any[]> => {
  const url = `/auto/1141402/detalle`;
  return fetchData(url);
};

