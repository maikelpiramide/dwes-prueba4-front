import { useEffect, useRef, useState } from "react";
import TransaccionesConserje from "./transacciones";
import Recarga from "./recarga";
import Transaccion from "./transaccion";
import { getTransaccionesConserje } from "../../services/transacciones.service";
import Alert from "../common/alert";

export default function Conserje() {
  const recargaRef = useRef(null);
  const transaccionRef = useRef(null);

  const [transacciones, setTransacciones] = useState([]);
  const [messageAlert, setMessageAlert] = useState("");
  const [typeAlert, setTypeAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const openRecarga = () => {
    if (recargaRef.current) {
      recargaRef.current.showModal();
    }
  };

  const openTransaccion = () => {
    if (transaccionRef.current) {
      transaccionRef.current.showModal();
    }
  };

  const fetchTransacciones = async (cambios) => {
    if (cambios) {
      if (cambios.status === 200) {
        setMessageAlert(
          `Creada transacción ${cambios.concepto} con ${cambios.importe} PICs`
        );
        setTypeAlert("alert-success");
      } else {
        setMessageAlert(cambios.message);
        setTypeAlert("alert-error");
      }
      setShowAlert(true);
    }
    const data = await getTransaccionesConserje();
    if (data.status === 200) {
      setTransacciones(data);
    }
  };

  useEffect(() => {
    fetchTransacciones(null);
  }, []);

  return (
    <>
      <section className="flex justify-center space-x-10 m-10">
        <div className="card bg-secondary text-primary-content w-96">
          <div className="card-body">
            <h2 className="card-title">Crear recarga</h2>
            <div className="card-actions justify-end">
              <button className="btn" onClick={openRecarga}>
                Recargar
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-secondary text-primary-content w-96">
          <div className="card-body">
            <h2 className="card-title">Generar transacción</h2>
            <div className="card-actions justify-end">
              <button className="btn" onClick={openTransaccion}>
                Consumir
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="m-10">
        {showAlert && (
          <Alert
            message={messageAlert}
            type={typeAlert}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
        )}
        <TransaccionesConserje transacciones={transacciones} />
      </section>
      <Recarga ref={recargaRef} update={fetchTransacciones} />
      <Transaccion ref={transaccionRef} update={fetchTransacciones} />
    </>
  );
}
