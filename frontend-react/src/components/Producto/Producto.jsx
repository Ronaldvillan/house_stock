// import React from "react";

// function Producto({ producto, onSumar, onRestar, onEliminar }) {
//   return (
//     <tr>
//       <td>{producto.nombre}</td>
//       <td>{producto.cantidad}</td>
//       <td>{producto.stockMin}</td>
//       <td>
//         <button onClick={() => onRestar(producto.id)}>-</button>
//         <button onClick={() => onSumar(producto.id)}>+</button>
//         <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
//       </td>
//     </tr>
//   );
// }

// export default Producto;

import React from "react";
import styles from "./Producto.module.css";

function Producto({ producto, onSumar, onRestar, onEliminar }) {
  return (
    <tr className={styles.fila}>
      <td className={styles.nombre}>{producto.nombre}</td>
      <td>{producto.cantidad}</td>
      <td>{producto.stockMin}</td>
      <td>
        <button onClick={() => onSumar(producto.id)} className={styles.boton}>+</button>
        <button onClick={() => onRestar(producto.id)} className={styles.boton}>-</button>
        <button onClick={() => onEliminar(producto.id)} className={styles.botonEliminar}>Eliminar</button>
      </td>
    </tr>
  );
}

export default Producto;
