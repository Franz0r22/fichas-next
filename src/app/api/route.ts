import axios from "axios";
import { NextResponse } from "next/server";

const clienteId = process.env.NEXT_PUBLIC_CLIENTE_ID;
const apiUrl = process.env.API_FICHAS_URL;
const bearerToken = process.env.API_FICHAS_TOKEN;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json',
  },
});

export async function GET(request: Request) {
  // Verifica si la solicitud es un método OPTIONS (preflight)
  if (request.method === 'OPTIONS') {
    // Responde con los encabezados CORS necesarios para las solicitudes preflight
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  // Verifica si la solicitud es un método GET
  if (request.method === 'GET') {
    // Tu lógica de manejo de solicitud GET aquí
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

    const clientOrigin = request.headers.get('Origin');
    console.log(clientOrigin);
    const allowedOrigins = ['https://tudominio.com']; // Agrega tus dominios permitidos aquí

    if (clientOrigin == null || clientOrigin && allowedOrigins.includes(clientOrigin)) {
      // El origen es permitido, responde con los encabezados CORS específicos
      return NextResponse.json({ data }, {
        status: 201,
        headers: {
          'Access-Control-Allow-Origin': clientOrigin ? clientOrigin : '',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    } else {
      // El origen no está permitido, responde con un error o manejo adecuado
      return new Response('Forbidden', { status: 403 });
    }
  }

  // Si la solicitud no es GET ni OPTIONS, responde con un error
  return new Response('Method Not Allowed', { status: 405 });
}

export const fetchData = async (url: string, params: any = {}): Promise<any> => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getCategorias = async (): Promise<any[]> => {
  const url = `/diccionario/clientes/${clienteId}/categorias`;
  return fetchData(url);
};

export const getMarcas = async (): Promise<any[]> => {
  const url = `/diccionario/marcas/clientes/${clienteId}/categorias`;
  return fetchData(url);
};

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