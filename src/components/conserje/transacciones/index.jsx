export default function TransaccionesConserje({ transacciones }) {
  return (
    <section>
      {transacciones !== null && transacciones.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>CONCEPTO</th>
                <th>USUARIO</th>
                <th>CONSERJE</th>
                <th>IMPORTE</th>
                <th>FECHA Y HORA</th>
              </tr>
            </thead>
            <tbody>
              {transacciones.map((transaccion) => (
                <tr key={transaccion.id}>
                  <td>{transaccion.id}</td>
                  <td>{transaccion.concepto}</td>
                  <td>{transaccion.usuario.email}</td>
                  <td>{transaccion.conserje.email}</td>
                  <td>{transaccion.importe} PIC</td>
                  <td>{transaccion.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="badge badge-info">No hay transacciones</div>
      )}
    </section>
  );
}
