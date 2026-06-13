import { Link } from "react-router";
import cartIcon from "../assets/cart-shopping-solid-full.svg";
import "../styles/Navbar.css";

function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <Link to="/">Shop</Link>
      <Link to="cart">
        <div className="cart-icon">
          <img src={cartIcon} alt="cart icon" />
          <div className="badge">{cartItemCount}</div>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
