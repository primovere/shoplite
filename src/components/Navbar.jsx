import { Link } from "react-router";

function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <Link to="/">Shop</Link>
      <div>
        <Link to="cart">Cart</Link>
        <div>{cartItemCount}</div>
      </div>
    </nav>
  );
}

export default Navbar;
