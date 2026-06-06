import "../styles/CartPage.css";

function CartPage({ cart, products, onQuantityChange, onRemoveItem }) {
  const cartItemsWithProductData = [];
  let total = 0;

  cart.forEach((item) => {
    const product = products.find((product) => product.id === item.id);
    cartItemsWithProductData.push({
      ...item,
      title: product.title,
      price: product.price,
      image: product.image,
      subtotal: product.price * item.quantity,
    });
    total += product.price * item.quantity;
  });

  return (
    <>
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItemsWithProductData.map((item) => {
          return (
            <div key={item.id} className="cart-item">
              <img className="item-img" src={item.image} alt={item.title} />
              <div className="right-section">
                <div className="info">
                  <p>{item.title}</p>
                  <p>{item.price}/piece</p>
                </div>
                <div className="bottom-row">
                  <div className="actions">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        onQuantityChange(item.id, e.target.value)
                      }
                    />
                    <button
                      className="remove-btn"
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <p>
                    <b>Subtotal: {item.subtotal}</b>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="order-summary">
        <p>Total: {total}</p>
      </div>
    </>
  );
}

export default CartPage;
