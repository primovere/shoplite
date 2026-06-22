function ProductDetail(products) {
  return (
    <>
      <div className="product-detail"></div>
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      />
      <p className="title">
        <p className="price">30</p>
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      </p>
      <p className="description">
        "Your perfect pack for everyday use and walks in the forest. Stash your
        laptop (up to 15 inches) in the padded sleeve, your everyday"
      </p>
      <button type="button">Add to Cart</button>
    </>
  );
}

export default ProductDetail;
