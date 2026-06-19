import ProductCard from "./ProductCard.jsx";
import "../styles/ShopPage.css";
import heroImage from "../assets/hero-image.png";

function ShopPage({ products, onAddToCartClick }) {
  return (
    <>
      <section className="hero full-bleed">
        <img src={heroImage} alt="hero image" className="hero-img" />
      </section>
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
    </>
  );
}

export default ShopPage;
