function ProductCard({ imgURL, title, price, onClick }) {
  return (
    <div className="product-card">
      <img src={imgURL} alt={title} style={{ width: "25%" }} />
      <p>{title}</p>
      <p>{price}</p>
      <button type="button" onClick={onClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
