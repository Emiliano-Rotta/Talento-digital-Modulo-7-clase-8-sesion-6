const pool = require('../db/pool');
const queries = require('../queries/inventarioQueries');

const realizarVenta = async (productos) => {
    const clienteDB = await pool.connect();

    try {
        await clienteDB.query('BEGIN');

        let total = 0;
        const ventaDetalles = [];

        for (const producto of productos) {
            const { id, cantidad, precio } = producto;

            const resultado = await clienteDB.query(queries.actualizarStock, [cantidad, id]);
            if (resultado.rows.length === 0) throw new Error(`Stock insuficiente para el producto ID: ${id}`);

            const subtotal = cantidad * precio;
            total += subtotal;

            ventaDetalles.push({ id, cantidad, subtotal });
        }

        const venta = await clienteDB.query(queries.registrarVenta, [total]);
        const ventaId = venta.rows[0].id;

        for (const detalle of ventaDetalles) {
            await clienteDB.query(queries.registrarDetalleVenta, [ventaId, detalle.id, detalle.cantidad, detalle.subtotal]);
        }

        await clienteDB.query('COMMIT');
        console.log(`Venta ${ventaId} realizada con éxito.`);
    } catch (error) {
        await clienteDB.query('ROLLBACK');
        console.error('Error al realizar la venta:', error.message);
    } finally {
        clienteDB.release();
    }
};

module.exports = { realizarVenta };
