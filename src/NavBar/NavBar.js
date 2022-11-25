import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../Context/Context";

function NavBar(props) {
  const ctx = useContext(Context);

  function showCartItems(e) {
    e.preventDefault();
    props.isCartClicked(true);
  }

  function logoutHandler() {
    ctx.removeToken();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
      <div className="row">
        <div className="col-10">
          <ul className="nav">
            <li className="nav-item col-2">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item col-3">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item col-2">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item col-3">
              <NavLink className="nav-link" to="/contactUs">
                ContactUs
              </NavLink>
            </li>
            <li className="nav-item col-2">
              <NavLink className="nav-link" onClick={logoutHandler} to="/login">
                {ctx.token ? "Logout" : "Login"}
              </NavLink>
            </li>
          </ul>
        </div>
        {ctx.token && (
          <div className="col-2">
            <button
              data-bs-toggle="modal"
              data-bs-target="#cart"
              onClick={showCartItems}
              className="btn mt-1 btn-primary btn-sm"
            >
              Cart {ctx.token ? ctx.items.length : 0}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
