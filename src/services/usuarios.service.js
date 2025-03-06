const API = `backend.maikelexamen.daw.cpifppiramide.com:8080/usuarios/`;

const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const saveUser = async (user) => {
  const url = `${API}registro`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (err) {
    return err;
  }
};

const doLogin = async (user) => {
  const url = `${API}entrar`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    data.status = response.status;
    if (data.status === 200) {
      localStorage.setItem("user", JSON.stringify(data.result.user));
      localStorage.setItem("token", data.result.token);
    }
    return data;
  } catch (err) {
    return err;
  }
};

const getSaldo = async () => {
  const url = `${API}saldo`;
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

export { getUser, saveUser, doLogin, getSaldo };
