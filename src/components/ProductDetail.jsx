import { useParams } from "react-router";
import { useState } from "react";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

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
        <img src={product.image} alt={product.title} />
        <p className="title">{product.title}</p>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
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
        <button type="button">Add to Cart</button>
      </div>
    </>
  );
}

export default ProductDetail;
