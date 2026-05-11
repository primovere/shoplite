function ProductCard({ imgURL, title, price }) {
  return (
    <div class="product-card">
      <img src={imgURL} alt={title} style={{ width: "25%" }} />
      <p>{title}</p>
      <p>{price}</p>
      <button type="button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
