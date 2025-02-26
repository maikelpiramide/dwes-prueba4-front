import { createRecarga } from "../../../services/transacciones.service";
import styles from "./recarga.module.css";

import { useState } from "react";

export default function Recarga({ ref, update }) {
  const [transaccion, setTransaccion] = useState({
    usuario: "",
    importe: 0,
  });

  const doRecarga = async () => {
    console.log(transaccion);
    const data = await createRecarga(transaccion);
    ref.current.close();
    update(data);
    setTransaccion({ usuario: "", importe: 0 });
  };

  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Crear recarga</h3>
        <form method="dialog" className={styles.form}>
          <input
            type="email"
            className="input"
            placeholder="Usuario"
            value={transaccion.usuario}
            onChange={(e) => {
              setTransaccion({ ...transaccion, usuario: e.target.value });
            }}
          />
          <input
            type="number"
            className="input"
            placeholder="PICs a recargar"
            value={transaccion.importe}
            onChange={(e) => {
              if (e.target.value < 0 || e.target.value > 99) return;
              setTransaccion({ ...transaccion, importe: e.target.value });
            }}
            min={0}
            max={99}
          />

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              ref.current.close();
              doRecarga();
            }}
          >
            Recargar
          </button>
        </form>
      </div>
    </dialog>
  );
}
