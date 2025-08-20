// import React, { useState } from "react";

// import FormularioAgregar from "./components/FormularioAgregar/FormularioAgregar";
// import ListaCompras from "./components/ListaCompras/ListaCompras";
// import Producto from "./components/Producto/Producto";

// function App() {
//     const [productos, setProductos] = useState([
//         { id: 1, nombre: "Papel Higiénico", cantidad: 12, stockMin: 2 },
//         { id: 2, nombre: "Arroz", cantidad: 5, stockMin: 2 },
//         { id: 3, nombre: "Aceite", cantidad: 3, stockMin: 1 },
//     ]);

//     // Funciones para actualizar inventario
//     const sumar = (id) => {
//         setProductos(productos.map(p => p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p));
//     };

//     const restar = (id) => {
//         setProductos(productos.map(p => p.id === id ? { ...p, cantidad: Math.max(p.cantidad - 1, 0) } : p));
//     };

//     const eliminar = (id) => {
//         setProductos(productos.filter(p => p.id !== id));
//     };

//     const agregarProducto = (nuevoProducto) => {
//         setProductos([...productos, nuevoProducto]);
//     };

//     // Lista de compras automática
//     const listaCompras = productos.filter(p => p.cantidad <= p.stockMin);

//     return (
//         <div style={{ padding: "20px" }}>
//             <h1>Inventario de Casa</h1>

//             <table border="1" cellPadding="5">
//                 <thead>
//                     <tr>
//                         <th>Producto</th>
//                         <th>Cantidad</th>
//                         <th>Stock Mínimo</th>
//                         <th>Acciones</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {productos.map(p => (
//                         <Producto
//                             key={p.id}
//                             producto={p}
//                             onSumar={sumar}
//                             onRestar={restar}
//                             onEliminar={eliminar}
//                         />
//                     ))}
//                 </tbody>
//             </table>

//             <FormularioAgregar onAgregar={agregarProducto} />

//             <ListaCompras productos={listaCompras} />
//         </div>
//     );
// }

// export default App;

import "./App.css";

import React, { useState } from "react";

import FormularioAgregar from "./components/FormularioAgregar/FormularioAgregar";
import ListaCompras from "./components/ListaCompras/ListaCompras";
import Producto from "./components/Producto/Producto";

function App() {
    const [productos, setProductos] = useState([
        { id: 1, nombre: "Papel Higiénico", cantidad: 12, stockMin: 2 },
        { id: 2, nombre: "Arroz", cantidad: 5, stockMin: 2 },
        { id: 3, nombre: "Aceite", cantidad: 3, stockMin: 1 },
    ]);

    // Funciones para actualizar inventario
    const sumar = (id) => {
        setProductos(
            productos.map((p) =>
                p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
            )
        );
    };

    const restar = (id) => {
        setProductos(
            productos.map((p) =>
                p.id === id ? { ...p, cantidad: Math.max(p.cantidad - 1, 0) } : p
            )
        );
    };

    const eliminar = (id) => {
        setProductos(productos.filter((p) => p.id !== id));
    };

    const agregarProducto = (nuevoProducto) => {
        setProductos([...productos, { ...nuevoProducto, id: Date.now() }]);
    };

    // Lista de compras automática
    const listaCompras = productos.filter((p) => p.cantidad <= p.stockMin);

    return (
        <div className="appContainer">
            <h1 className="titulo">Inventario de Casa</h1>

            <table className="tablaInventario">
                <thead>
                    <tr>
    <th className="colProducto">Producto</th>
    <th className="colNum">Cantidad</th>
    <th className="colNum">Stock Mínimo</th>
    <th className="colAcciones">Acciones</th>
  </tr>
                </thead>
                <tbody>
                    {productos.map((p) => (
                        <Producto
                            key={p.id}
                            producto={p}
                            onSumar={sumar}
                            onRestar={restar}
                            onEliminar={eliminar}
                        />
                    ))}
                </tbody>
            </table>

            <FormularioAgregar onAgregar={agregarProducto} />

            <ListaCompras productos={listaCompras} />
        </div>
    );
}

export default App;
