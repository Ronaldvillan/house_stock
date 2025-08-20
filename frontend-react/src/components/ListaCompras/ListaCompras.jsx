

// import Producto from "../Producto/Producto";
// import React from "react";
// import styles from "./ListaCompras.module.css";

// function ListaCompras({ productos, onSumar, onRestar, onEliminar }) {
//     return (
//         <table className={styles.tabla}>
//             <thead>
//                 <tr>
//                     <th className="colProducto">Producto</th>
//                     <th className="colNum">Cantidad Necesaria</th>

//                 </tr>
//             </thead>
//             <tbody>
//                 {productos.map((producto) => (
//                     <Producto
//                         key={producto.id}
//                         producto={producto}
//                         onSumar={onSumar}
//                         onRestar={onRestar}
//                         onEliminar={onEliminar}
//                     />
//                 ))}
//             </tbody>
//         </table>
//     );
// }

// export default ListaCompras;

import React from "react";
import styles from "./ListaCompras.module.css";

function ListaCompras({ productos }) {
    if (productos.length === 0) {
        return <h3 className={styles.mensajeVacio}>No hay productos para comprar 🎉</h3>;
    }

    return (
        <div className={styles.contenedor}>
            <h2>Lista de Compras</h2>
            <table className={styles.tablaCompras}>
                <thead>
                    <tr>
                        <th className={styles.colProducto}>Producto</th>
                        <th className={styles.colStock}>Stock Actual</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(p => (
                        <tr key={p.id}>
                            <td className={styles.colProducto}>{p.nombre}</td>
                            <td className={styles.colStock}>{p.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaCompras;

