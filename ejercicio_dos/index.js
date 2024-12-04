
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


const { realizarTransferencia } = require('./controllers/transferenciaController');

realizarTransferencia(1, 2, 300);
