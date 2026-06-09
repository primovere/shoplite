import "../styles/CartPage.css";
import CartItem from "./CartItem.jsx";
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
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onQuantityChange={onQuantityChange}
              onRemoveItem={onRemoveItem}
              subtotal={item.subtotal}
            />
          );
        })}
      </div>
      <div className="order-summary">
        <p>Total: {total.toFixed(2)}</p>
      </div>
    </>
  );
}

export default CartPage;
