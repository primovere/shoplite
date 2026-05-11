import ProductCard from "./ProductCard.jsx";

function ShopPage({ products }) {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            imgURL={product.image}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default ShopPage;
