import React from 'react';
import productos from './data.json';
import Item from './Item';

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({ setElementosComprados }) {
  return (
    <div className='container'>
      {productos.map((producto) => (
        <Item
          key={producto.id}
          producto={producto}
          setElementosComprados={setElementosComprados}
        />
      ))}
    </div>
  );
}