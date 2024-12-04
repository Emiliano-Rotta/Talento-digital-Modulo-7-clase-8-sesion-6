
//-------------------------------------------------------------------------
// Ejercicio 1: Sistema de Gestión de Inventarios
// Consigna:
// Desarrolla un sistema en Node.js para gestionar el inventario de una tienda de tecnología. El sistema debe:
// Crear las tablas necesarias y poblarlas con datos iniciales.
// Implementar una operación transaccional que permita realizar una venta:
// La venta debe descontar el stock de los productos comprados.
// Si el stock no es suficiente, la operación debe revertirse y no realizar cambios.
// Capturar y registrar cualquier error que ocurra durante la operación.


// Datos iniciales:
// Crea una base de datos llamada tienda_tecnologia.
// Tablas:
// productos con los campos id, nombre, precio, stock.
// ventas con los campos id, fecha, total.
// detalle_ventas con los campos id, venta_id, producto_id, cantidad, subtotal.
// Inserta algunos productos en la tabla productos.

// CREATE DATABASE tienda_tecnologia;
// \c tienda_tecnologia;

// CREATE TABLE productos (
//     id SERIAL PRIMARY KEY,
//     nombre VARCHAR(100) NOT NULL,
//     precio NUMERIC(10, 2) NOT NULL,
//     stock INTEGER NOT NULL
// );

// CREATE TABLE ventas (
//     id SERIAL PRIMARY KEY,
//     fecha DATE NOT NULL DEFAULT CURRENT_DATE,
//     total NUMERIC(10, 2) NOT NULL
// );

// CREATE TABLE detalle_ventas (
//     id SERIAL PRIMARY KEY,
//     venta_id INTEGER REFERENCES ventas(id) ON DELETE CASCADE,
//     producto_id INTEGER REFERENCES productos(id),
//     cantidad INTEGER NOT NULL,
//     subtotal NUMERIC(10, 2) NOT NULL
// );
// INSERT INTO productos (nombre, precio, stock) VALUES
//     ('Laptop', 1200.50, 10),
//     ('Mouse', 25.99, 50),
//     ('Teclado', 75.00, 30),
//     ('Monitor', 300.00, 15),
//     ('Auriculares', 50.00, 20);

// proyecto_inventarios/
// ├── controllers/
// │   ├── inventarioController.js         
// ├── db/
// │   ├── config.js                       
// │   ├── pool.js                       
// ├── queries/
// │   ├── inventarioQueries.js            
// ├── logs/
// │   ├── errores.log                     
// ├── .env                                
// ├── index.js                          
// ├── package.json                       


const { realizarVenta } = require('./controllers/inventarioController');

const productosVenta = [
    { id: 1, cantidad: 2, precio: 500 },
    { id: 2, cantidad: 1, precio: 1500 },
];

realizarVenta(productosVenta);
