const API = `backend.maikelexamen.daw.cpifppiramide.com:8080/transacciones/`;

const getTransacciones = async () => {
  const url = `${API}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (err) {
    return err;
  }
};

const getTransaccionesConserje = async () => {
  const url = `${API}todas`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (err) {
    return err;
  }
};

const createRecarga = async (transaccion) => {
  const url = `${API}recargar`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(transaccion),
    });
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (err) {
    return err;
  }
};

const createTransaccion = async (transaccion) => {
  const url = `${API}transaccion`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(transaccion),
    });
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (err) {
    return err;
  }
};

export {
  getTransacciones,
  getTransaccionesConserje,
  createRecarga,
  createTransaccion,
};
