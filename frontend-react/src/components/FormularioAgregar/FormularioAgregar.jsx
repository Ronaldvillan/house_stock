import React, { useState } from "react";

import styles from "./FormularioAgregar.module.css";

function FormularioAgregar({ onAgregar }) {
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [stockMin, setStockMin] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAgregar({ nombre, cantidad, stockMin });
        setNombre("");
        setCantidad(0);
        setStockMin(1);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formulario}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={`${styles.input} ${styles.inputNombre}`}
            />

            <input
                type="number"
                placeholder="Cantidad"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                className={styles.input}
            />
            <input
                type="number"
                placeholder="Stock mínimo"
                value={stockMin}
                onChange={(e) => setStockMin(Number(e.target.value))}
                className={styles.input}
            />
            <button type="submit" className={styles.botonAgregar}>Agregar</button>
        </form>
    );
}

export default FormularioAgregar;

// import React, { useState } from "react";

// import styles from "./FormularioAgregar.module.css";

// function FormularioAgregar({ agregarProducto }) {
//   const [producto, setProducto] = useState("");
//   const [cantidad, setCantidad] = useState("");
//   const [stockMinimo, setStockMinimo] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!producto || !cantidad || !stockMinimo) return;
//     agregarProducto({ producto, cantidad: Number(cantidad), stockMinimo: Number(stockMinimo) });
//     setProducto("");
//     setCantidad("");
//     setStockMinimo("");
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Ingresar un Nuevo Producto</h2>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           placeholder="Producto"
//           value={producto}
//           onChange={(e) => setProducto(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Cantidad"
//           value={cantidad}
//           onChange={(e) => setCantidad(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Stock Mínimo"
//           value={stockMinimo}
//           onChange={(e) => setStockMinimo(e.target.value)}
//         />
//         <button type="submit">Agregar</button>
//       </form>
//     </div>
//   );
// }

// export default FormularioAgregar;
