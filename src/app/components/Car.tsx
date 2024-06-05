'use client';

import { useState, useEffect } from 'react';

interface Car {
    cars: any;
    MARCA?: string;
    MODELO?: string;
    MARCAID?: number;
    // MODELOID: number;
    // AUTODES: string;
    // CATMARMODID: number;
    // TABLA: number;
    // AUTOID: number;
    // PRODUCTOID: number;
    // CATEGORIAID: number;
    // INTANO: number;
    // VCHCOLOR: string;
    // VCHVERSION: string;
    // VCHDESCRIPCION: string;
    // VCHPRECIO: number;
    // CLIENTEID: number;
    // VCHCODIGO: string;
    // VCHMONEDA: string;
    // VCHKILOMETROS: string;
    // INTCILINDRADA: number;
    // VCHTELEFONO1: string;
    // VCHTELEFONO2: string | null;
    // VCHEMAIL1: string;
    // TIPOPUB: number;
    // TIPOCONT: string;
    // VCHNOMBRE: string;
    // VCHAPELLIDOS: string;
    // VCHORIGEN: string | null;
    // BITVIDEO: null;
    // VCHPATENTE: string;
    // INTTIPO: number;
    // CONTACTOID: number;
    // INTESTADO: number;
    // INTCONDICION: number;
    // FECINIPUBLICA: string;
    // VCHFOTO: string;
    // ETIQUETA: string;
    // VCHCOMBUSTIBLE: string;
    // VCHTRANSMISION: string;
    // VCHVIDEO: string | null;
    // VCHACTIVADOR: string;
    // VCHACTIVAFINANCIAMIENTO: string;
    // VCHETIQUETA_TITULO: string;
    // VCHETIQUETA_COLOR: string;
    // VCHPIEMINIMO: string | null;
    // VCHCAE: string | null;
    // VCHNUMCUOTA: string | null;
    // VCHCUOTA: string | null;
    // VCHVFMG: string | null;
    // CLIENTE: string;
    // NOMFOTO: string;
    // VCHCTC: string | null;
    // VCHLEGALPRECIO: string;
    // VCHLEGALPRECIO2: string;
    // VCHLEGALPRECIO3: string;
    // VCH360: string | null;
    // INTPORCALIDADCALPUB: number;
    // url_foto_particular: string;
    // CARROCERIAID: string;
    // PESOOPERACIONAL: number;
    // CAPACIDADCARGA: string | null;
    // ALTURAELEVACION: string | null;
    // VCHNUMSERIAL: string | null;
    // VCHFAX: string;
    // fontcolor: string;
    // PLANID: number;
    // APITOKEN: number | null;
    // TOKEN: string | null;
    // RowNumber: string;
  }
  
  const Car: React.FC<Car> = ({ cars }) => {
    
  
    return (
      <div>
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
      </div>
    );
  };
  
  export default Car;
  