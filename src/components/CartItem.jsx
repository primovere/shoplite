import "../styles/CartItem.css";

function CartItem({
  id,
  image,
  title,
  price,
  quantity,
  onQuantityChange,
  onRemoveItem,
  onQuantityClick,
  subtotal,
}) {
  return (
    <div className="cart-item">
      <img className="item-img" src={image} alt={title} />
      <div className="right-section">
        <div className="info">
          <p>{title}</p>
          <p>{price}/piece</p>
        </div>
        <div className="bottom-row">
          <div className="actions">
            <button
              className="decrement-btn"
              type="button"
              onClick={() => {
                onQuantityClick("decrement", id);
              }}
            >
              {quantity > 1 ? "-" : "Remove"}
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => onQuantityChange(id, e.target.value)}
            />
            <button
              className="add-btn"
              type="button"
              onClick={() => {
                onQuantityClick("increment", id);
              }}
            >
              +
            </button>
            <button
              className="remove-btn"
              type="button"
              onClick={() => onRemoveItem(id)}
            >
              Remove
            </button>
          </div>

          <p>
            <b>Subtotal: {subtotal.toFixed(2)}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
