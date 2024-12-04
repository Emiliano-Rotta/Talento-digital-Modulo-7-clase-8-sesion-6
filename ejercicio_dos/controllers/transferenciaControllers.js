const fs = require('fs');
const pool = require('../db/pool');
const queries = require('../queries/transferenciaQueries');

const realizarTransferencia = async (origenId, destinoId, monto) => {
    const clienteDB = await pool.connect();

    try {
        await clienteDB.query('BEGIN');

        const debito = await clienteDB.query(queries.debitarCuenta, [monto, origenId]);
        if (debito.rows.length === 0) throw new Error(`Saldo insuficiente en la cuenta origen ID: ${origenId}`);

        await clienteDB.query(queries.acreditarCuenta, [monto, destinoId]);
        await clienteDB.query(queries.registrarTransferencia, [origenId, destinoId, monto]);

        await clienteDB.query('COMMIT');
        console.log(`Transferencia de $${monto} realizada con éxito.`);
    } catch (error) {
        await clienteDB.query('ROLLBACK');
        fs.appendFileSync('./logs/errores.log', `${new Date().toISOString()} - ${error.message}\n`);
        console.error('Error al realizar la transferencia:', error.message);
    } finally {
        clienteDB.release();
    }
};

module.exports = { realizarTransferencia };
