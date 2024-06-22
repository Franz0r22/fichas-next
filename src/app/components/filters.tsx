'use client';

import { useState, useEffect } from 'react';
import { Categoria, Marca, Modelo } from '../types/types';

interface FiltersProps {
  categorias: Categoria[];
  marcas: Marca[];
  modelos: Modelo[];
}

const Filters: React.FC<FiltersProps> = ({ categorias, marcas, modelos }) => {
  const [selectedCategoria, setSelectedCategoria] = useState<string>('');
  const [selectedMarca, setSelectedMarca] = useState<string>('');
  const [filteredMarcas, setFilteredMarcas] = useState<Marca[]>(marcas);
  const [filteredModelos, setFilteredModelos] = useState<Modelo[]>(modelos);

  useEffect(() => {
    if (selectedCategoria) {
      setFilteredMarcas(marcas);
    } else {
      setFilteredMarcas(marcas);
    }
  }, [selectedCategoria, marcas]);

  useEffect(() => {
    if (selectedMarca) {
      const modelosFiltrados = modelos.filter((modelo) => modelo.MODELOID.startsWith(selectedMarca));
      setFilteredModelos(modelosFiltrados);
    } else {
      setFilteredModelos(modelos);
    }
  }, [selectedMarca, modelos]);

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategoria(value);
  };

  const handleMarcaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedMarca(value);
  };

  return (
    <div>
      <div>
        <label htmlFor="categoria">Categoria:</label>
        <select id="categoria" value={selectedCategoria} onChange={handleCategoriaChange}>
          <option value="">Todas las Categorías</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="marca">Marca:</label>
        <select id="marca" value={selectedMarca} onChange={handleMarcaChange}>
          <option value="">Todas las Marcas</option>
          {filteredMarcas.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="modelo">Modelo:</label>
        <select id="modelo">
          <option value="">Todos los Modelos</option>
          {filteredModelos.map((modelo) => (
            <option key={modelo.MODELOID} value={modelo.MODELOID}>
              {modelo.MODELO}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
