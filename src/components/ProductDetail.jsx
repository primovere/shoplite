import { useParams } from "react-router";
import { useState } from "react";
import "../styles/ProductDetail.css";

function ProductDetail({ products, onAddToCartClick }) {
  const { id } = useParams();
  const numericId = Number(id);
  const product = products?.find((p) => p.id === numericId);
  const [quantity, setQuantity] = useState(1);
  if (!product) {
    return <p>Loading...</p>;
  }

  function onQuantityClick(action) {
    setQuantity((q) => (action === "increment" ? q + 1 : q - 1));
  }

  function onQuantityChange(newQuantity) {
    if (newQuantity === "") {
      newQuantity = 0;
    }

    const regex = /^[0-9]*$/;
    const isInteger = regex.test(newQuantity);
    if (!isInteger) return;

    newQuantity = parseInt(newQuantity);
    const isInvalid = newQuantity > 999 || newQuantity < 0;
    if (isInvalid) return;
    setQuantity(newQuantity);
  }

  return (
    <>
      <div className="product-detail">
        <div className="left-section">
          <div className="img-container">
            <img
              className="product-img"
              src={product.image}
              alt={product.title}
            />
          </div>
          <p className="description">{product.description}</p>
        </div>
        <div className="right-section">
          <div className="info">
            <p className="title">{product.title}</p>
            <p className="price">${product.price}</p>
          </div>
          <div className="bottom-row">
            <div className="quantity-control">
              <button
                className="decrement-btn"
                type="button"
                onClick={() => {
                  onQuantityClick("decrement");
                }}
                disabled={quantity === 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z" />
                </svg>
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => onQuantityChange(e.target.value)}
              />
              <button
                className="add-btn"
                type="button"
                onClick={() => {
                  onQuantityClick("increment");
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
                </svg>
              </button>
            </div>
            <button
              className="add-to-cart-btn"
              type="button"
              onClick={() => {
                onAddToCartClick(numericId, quantity);
                setQuantity(1);
              }}
            >
              {quantity === 1 ? "Add to Cart" : `Add ${quantity} items to cart`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
