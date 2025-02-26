import { useEffect, useState } from "react";
import { getSaldo } from "../../../services/usuarios.service";

export default function Wallet() {
  const [saldo, setSaldo] = useState(null);

  const fetchSaldo = async () => {
    const data = await getSaldo();
    if (data.status === 200) {
      setSaldo(data.saldo);
    }
  };

  useEffect(() => {
    fetchSaldo();
  }, []);

  if (saldo !== null) {
    return (
      <section>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-value">{saldo} PIC</div>
            <div className="stat-desc">
              Si quieres recargar, acude a conserjería
            </div>
          </div>
        </div>
      </section>
    );
  }
}
