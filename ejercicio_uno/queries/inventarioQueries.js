module.exports = {
    actualizarStock: `
        UPDATE productos SET stock = stock - $1
        WHERE id = $2 AND stock >= $1
        RETURNING *;
    `,
    registrarVenta: `
        INSERT INTO ventas (fecha, total) VALUES (CURRENT_DATE, $1) RETURNING id;
    `,
    registrarDetalleVenta: `
        INSERT INTO detalle_ventas (venta_id, producto_id, cantidad, subtotal)
        VALUES ($1, $2, $3, $4);
    `,
};
