import { createContext, useState } from "react";
//services
import { getTheme } from "../services/usuarios.service";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(getTheme());
  return (
    <UserContext.Provider value={{ theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
}

const UserContext = createContext();
export default UserContext;
