//¿Qué es AUTOCOMMIT? Es una configuración que, si está habilitada, ejecuta automáticamente un COMMIT después de cada sentencia SQL. En PostgreSQL, AUTOCOMMIT está habilitado por defecto.


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
// ├── .env                                
// ├── index.js                          
// ├── package.json                       



//------------------------------------------------------------------------
// Ejercicio 2: Sistema de Transferencias Bancarias
// Consigna:
// Desarrolla un sistema en Node.js para realizar transferencias entre cuentas bancarias. El sistema debe:
// Crear las tablas necesarias y poblarlas con datos iniciales.
// Implementar una transacción que registre una transferencia:
// Debe debitar el saldo de la cuenta origen y acreditarlo en la cuenta destino.
// Si alguna de las operaciones falla (por ejemplo, saldo insuficiente), la transacción debe revertirse.
// Registrar los errores capturados.

// Datos iniciales:
// Crea una base de datos llamada banco_virtual.
// Tablas:
// cuentas con los campos id, titular, saldo.
// transferencias con los campos id, fecha, origen_id, destino_id, monto.
// Inserta tres cuentas con diferentes saldos iniciales.

// CREATE DATABASE banco_virtual;
// \c banco_virtual;

// CREATE TABLE cuentas (
//     id SERIAL PRIMARY KEY,
//     titular VARCHAR(100) NOT NULL,
//     saldo NUMERIC(10, 2) NOT NULL
// );

// CREATE TABLE transferencias (
//     id SERIAL PRIMARY KEY,
//     fecha DATE NOT NULL DEFAULT CURRENT_DATE,
//     origen_id INTEGER REFERENCES cuentas(id),
//     destino_id INTEGER REFERENCES cuentas(id),
//     monto NUMERIC(10, 2) NOT NULL
// );
// INSERT INTO cuentas (titular, saldo) VALUES
//     ('Juan Pérez', 1000.00),
//     ('María López', 1500.00),
//     ('Carlos Gómez', 800.00),
//     ('Ana Rodríguez', 1200.00),
//     ('Pedro Martínez', 600.00);


// proyecto_banco/
// ├── controllers/
// │   ├── transferenciaController.js      
// ├── db/
// │   ├── config.js                        
// │   ├── pool.js                         
// ├── queries/
// │   ├── transferenciaQueries.js        
// ├── logs/
// │   ├── errores.log                     
// ├── .env                              
// ├── index.js               
// ├── package.json      
