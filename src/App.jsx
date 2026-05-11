import { useState, useEffect } from "react";
import "./App.css";
import ShopPage from "./components/ShopPage.jsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ShopPage products={products} />
    </>
  );
}

export default App;
