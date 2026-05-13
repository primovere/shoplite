function CartPage({ cart, products, setCart }) {
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
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => {
                e.target.value = e.target.value === "" ? 0 : e.target.value;

                const regex = /^[0-9]*$/;
                const isInteger = regex.test(e.target.value);
                if (!isInteger) return;

                const newQuantity = parseInt(e.target.value);
                const isInvalid = newQuantity > 999 || newQuantity < 0;
                if (isInvalid) return;

                const nextCart = cart.map((cartItem) => {
                  if (cartItem.id === item.id) {
                    return {
                      ...cartItem,
                      quantity: newQuantity,
                    };
                  } else {
                    return cartItem;
                  }
                });
                setCart(nextCart);
              }}
            />
          </div>
        );
      })}
    </>
  );
}

export default CartPage;
