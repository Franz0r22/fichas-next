'use client';

import { useState, useEffect } from 'react';

interface Categoria {
  id: string;
  nombre: string;
}

interface Marca {
  id: string;
  nombre: string;
}

interface Modelo {
  MODELOID: string;
  MODELO: string;
  marcaId: string;
}

interface FiltersProps {
  categorias: Categoria[];
  marcas: Marca[];
  modelos: Modelo[];
}

const Filters: React.FC<FiltersProps> = ({ categorias, marcas, modelos }) => {
  const [selectedCategoria, setSelectedCategoria] = useState<string>('');
  const [filteredMarcas, setFilteredMarcas] = useState<Marca[]>(marcas);
  const [filteredModelos, setFilteredModelos] = useState<Modelo[]>(modelos);

  useEffect(() => {
    // Filtramos marcas basadas en la categoría seleccionada si es necesario
    if (selectedCategoria) {
      const marcasFiltradas = marcas.filter(marca =>
        filteredModelos.some(modelo => modelo.marcaId === marca.id)
      );
      setFilteredMarcas(marcasFiltradas);
    } else {
      setFilteredMarcas(marcas);
    }
  }, [selectedCategoria, marcas, filteredModelos]);

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategoria(value);
  };

  const handleMarcaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const modelosFiltrados = modelos.filter(modelo => modelo.marcaId === value);
    setFilteredModelos(modelosFiltrados);
  };

  return (
    <div>
      <div>
        <label htmlFor="categoria">Select Categoria:</label>
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
        <label htmlFor="marca">Select Marca:</label>
        <select id="marca" onChange={handleMarcaChange}>
          <option value="">Todas las Marcas</option>
          {filteredMarcas.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="modelo">Select Modelo:</label>
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
