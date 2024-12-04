module.exports = {
    debitarCuenta: `
        UPDATE cuentas SET saldo = saldo - $1 WHERE id = $2 AND saldo >= $1 RETURNING *;
    `,
    acreditarCuenta: `
        UPDATE cuentas SET saldo = saldo + $1 WHERE id = $2 RETURNING *;
    `,
    registrarTransferencia: `
        INSERT INTO transferencias (fecha, origen_id, destino_id, monto) 
        VALUES (CURRENT_DATE, $1, $2, $3);
    `,
};
