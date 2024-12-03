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

// proyecto/
// ├── controllers/
// │   ├── inventarioController.js
// │   ├── transferenciaController.js
// ├── db/
// │   ├── config.js
// │   ├── pool.js
// ├── queries/
// │   ├── inventarioQueries.js
// │   ├── transferenciaQueries.js
// ├── logs/
// │   ├── errores.log
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

