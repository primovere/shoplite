function CartPage({ cart, products }) {
  return (
    <>
      <h1>Cart</h1>
      {cart.map((item) => {
        const { image, title, price } = products.find(
          (product) => product.id === item.id
        );

        return (
          <div key={item.id}>
            <img src={image} alt={title} style={{ width: "25%" }} />
            <p>{title}</p>
            <p>{price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        );
      })}
    </>
  );
}

export default CartPage;
