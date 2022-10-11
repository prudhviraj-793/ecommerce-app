import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../Context/Context";
import "./NavBar.css";

function NavBar(props) {
  const ctx = useContext(Context);

  function showCartItems(e) {
    e.preventDefault();
    props.isCartClicked(true);
  }

  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contactUs">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <button onClick={showCartItems}>Cart {ctx.items.length}</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
