import React from 'react';

const Filter = ({ filterState, setFilterState }) => {
    const handleFilter = (e) => {
      e.preventDefault();
      setFilterState(e.target.value);
    };
  
    return (
      <select onChange={handleFilter} id="filter" value={filterState}>
        <option value="all">Todos</option>
        <option value="Rebajas">Rebajas</option>
        <option value="NuevoProducto">Nuevo Producto</option>
      </select>
    );
  };

 export default Filter;