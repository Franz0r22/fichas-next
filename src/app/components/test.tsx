"use client"

import { useEffect } from 'react';
import getClient from '../services/getClient';

export default function Test() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtén el valor de CLIENTE_ID desde el archivo .env.local
        const clienteId = process.env.NEXT_PUBLIC_CLIENTE_ID;

        // Llama a la función del servicio para obtener los datos
        const responseData = await getClient.getClientData();

        // Haz algo con los datos obtenidos
        console.log('Datos obtenidos:', responseData);
      } catch (error:any) {
        // Maneja el error de alguna manera
        console.error('Error al obtener los datos:', error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <main className="container mx-auto">
      <p className="text-6xl text-center md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
       Prueba
      </p>
    </main>
  );
}
