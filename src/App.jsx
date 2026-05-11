import { useState, useEffect } from "react";
import "./App.css";
import ShopPage from "./components/ShopPage.jsx";

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "bottle",
      price: 2,
    },
    {
      id: 1,
      title: "raincoat",
      price: 3,
    },
  ]);
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  function handleAddToCartClick(id, quantity = 1) {
    const inCart = cart.some((item) => item.id === id);
    if (inCart) {
      const nextCart = cart.map((item) => {
        if (item.id === id) {
          return {
            id,
            quantity: item.quantity + quantity,
          };
        } else {
          return item;
        }
      });
      setCart(nextCart);
    } else {
      const nextCart = [
        ...cart,
        {
          id,
          quantity,
        },
      ];
      setCart(nextCart);
    }
  }

  return (
    <>
      <ShopPage products={products} onAddToCartClick={handleAddToCartClick} />
    </>
  );
}

export default App;
