function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <a href="#">Shop</a>
      <div>
        <a href="#">Cart</a>
        <div>{cartItemCount}</div>
      </div>
    </nav>
  );
}

export default Navbar;
