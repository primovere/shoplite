import { useState, useEffect } from "react";
import "./App.css";
import ShopPage from "./components/ShopPage.jsx";
import Navbar from "./components/Navbar.jsx";
import CartPage from "./components/CartPage.jsx";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "bottle",
      price: 2,
    },
    {
      id: 2,
      title: "raincoat",
      price: 3,
    },
  ]);

  const [cart, setCart] = useState([
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 2,
    },
  ]);
  const cartItemCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

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
      <Navbar cartItemCount={cartItemCount} />
      <ShopPage products={products} onAddToCartClick={handleAddToCartClick} />
      <CartPage cart={cart} products={products} />
    </>
  );
}

export default App;
