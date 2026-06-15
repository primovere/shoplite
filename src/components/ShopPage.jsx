import ProductCard from "./ProductCard.jsx";
import "../styles/ShopPage.css";

function ShopPage({ products, onAddToCartClick }) {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            imgURL={product.image}
            title={product.title}
            price={product.price}
            onClick={() => {
              onAddToCartClick(product.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default ShopPage;
