import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

import App from "./components/App";
import Auth from "./components/auth";
import { UserContextProvider } from "./context/UserContext";
import Usuario from "./components/usuario";
import Conserje from "./components/conserje";
import { ThemeContextProvider } from "./context/ThemeContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <UserContextProvider>
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="auth" element={<Auth />} />
            <Route path="usuario" element={<Usuario />} />
            <Route path="admin" element={<Conserje />} />
            <Route path="*" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </UserContextProvider>
);
