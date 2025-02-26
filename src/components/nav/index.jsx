import { useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Nav() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    setUser(null);
    navigate("/auth");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">PiramiCOINs</a>
      </div>
      {user && (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn avatar"
            >
              <p>{user.email}</p>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li onClick={logOut}>
                <a>Cerrar sesión</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
