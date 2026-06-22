import { useParams } from "react-router";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <>
      <div className="product-detail"></div>
      <img src={product.image} alt={product.title} />
      <p className="title">{product.title}</p>
      <p className="price">{product.price}</p>
      <p className="description">{product.description}</p>
      <button type="button">Add to Cart</button>
    </>
  );
}

export default ProductDetail;
