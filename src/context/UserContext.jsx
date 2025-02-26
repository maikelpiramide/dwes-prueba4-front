import { createContext, useState } from "react";
//services
import { getUser } from "../services/usuarios.service";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(getUser());
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const UserContext = createContext();
export default UserContext;
