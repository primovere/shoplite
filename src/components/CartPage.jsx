import "../styles/CartPage.css";
import CartItem from "./CartItem.jsx";
function CartPage({
  cart,
  products,
  onQuantityChange,
  onRemoveItem,
  onQuantityClick,
  cartItemCount,
}) {
  const cartItemsWithProductData = [];
  let productTotal = 0;
  let delivery = 5;

  cart.forEach((item) => {
    const product = products.find((product) => product.id === item.id);
    cartItemsWithProductData.push({
      ...item,
      title: product.title,
      price: product.price,
      image: product.image,
      subtotal: product.price * item.quantity,
    });
    productTotal += product.price * item.quantity;
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
              onQuantityClick={onQuantityClick}
              subtotal={item.subtotal}
            />
          );
        })}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="total-products">
          <p>Total products</p>
          <p>{cartItemCount}</p>
        </div>
        <div className="product-total">
          <p>Products</p>
          <p>{productTotal.toFixed(2)}</p>
        </div>
        <div className="delivery">
          <p>Delivery</p>
          <p>{delivery}</p>
        </div>
        <div className="total">
          <p>Total</p>
          <p>{(productTotal + delivery).toFixed(2)}</p>
        </div>
        <button className="checkout-btn" type="button">
          Continue to checkout
        </button>
      </div>
    </>
  );
}

export default CartPage;
