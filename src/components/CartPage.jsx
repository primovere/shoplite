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
      {cartItemsWithProductData.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.title} style={{ width: "25%" }} />
            <p>{item.title}</p>
            <p>
              <b>Subtotal: {item.subtotal}</b>
            </p>
            <p>{item.price}/piece</p>
            <p>Quantity: {item.quantity}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => onQuantityChange(item.id, e.target.value)}
            />
            <button type="button" onClick={() => onRemoveItem(item.id)}>
              Remove
            </button>
          </div>
        );
      })}
      <p>Total: {total}</p>
    </>
  );
}

export default CartPage;
