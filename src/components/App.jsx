import { Outlet, useNavigate } from "react-router";
import Nav from "./nav";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

export default function App() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else {
      const id = user.email.split("@")[0];
      if (isNaN(id)) {
        navigate("/admin");
      } else {
        navigate("/usuario");
      }
    }
  }, [user, navigate]);

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
