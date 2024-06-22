'use client';

import { useState, useEffect } from 'react';
import type { Car } from '../types/types';

interface CarProps {
  cars: Car[];
}
  
const CarComponent: React.FC<CarProps> = ({ cars }) => {
    
    return (
        <div className="grid grid-cols-12 gap-4">
          {cars.map((car:any) => (
            <div 
              key={car.AUTOID}
              className="col-span-4"
            >
              <div>
                <img src={car.url_foto_particular} alt={car.MARCA} width="300"/>
              </div>
              <div>
                <p>Marca: {car.MARCA}</p>
                <p>Modelo: {car.MODELO}</p>
                <p>Año: {car.INTANO}</p>
                <p>Precio: {car.VCHPRECIO} {car.VCHMONEDA}</p>
                <p>Kilometraje: {car.VCHKILOMETROS} km</p>
              </div>
            </div>
          ))}
        </div>
    );
  };
  
  export default CarComponent;