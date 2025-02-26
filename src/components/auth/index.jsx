import Entrar from "./entrar";
import Registro from "./registro";

import styles from "./auth.module.css";
import Alert from "../common/alert";
import { useContext, useState } from "react";
import { doLogin, saveUser } from "../../services/usuarios.service";
import { useNavigate } from "react-router";
import UserContext from "../../context/UserContext";

export default function Auth() {
  const { setUser } = useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [typeAlert, setTypeAlert] = useState("");
  const navigate = useNavigate();

  const doRegistro = async (usuario) => {
    const data = await saveUser(usuario);
    setTypeAlert(data.status === 201 ? "alert-success" : "alert-error");
    setMessageAlert(data.message);
    setShowAlert(true);
  };

  const doEntrar = async (usuario) => {
    const data = await doLogin(usuario);
    setTypeAlert(data.status === 200 ? "alert-success" : "alert-error");
    setMessageAlert(data.message);
    setShowAlert(true);
    setUser(data.result.user);
    const email = data.result.user.email;
    const id = email.split("@")[0];
    if (!isNaN(id)) {
      navigate("/usuario");
    } else navigate("/admin");
  };

  return (
    <div>
      <img src="piramide.svg" alt="coin" className={styles.rotate} />
      <section className="grid grid-cols-2 gap-4">
        <Registro handleSubmit={doRegistro} />
        <Entrar handleSubmit={doEntrar} />
      </section>

      {showAlert && (
        <Alert
          message={messageAlert}
          type={typeAlert}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}
    </div>
  );
}
