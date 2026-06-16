import "../styles/ProductCard.css";

function ProductCard({ imgURL, title, price, onClick }) {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={imgURL} alt={title} />
      </div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="price">{price}</p>
      </div>
      <button type="button" onClick={onClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
