import { useState, useEffect } from "react";
import ShopPage from "./components/ShopPage.jsx";
import Navbar from "./components/Navbar.jsx";
import CartPage from "./components/CartPage.jsx";
import { Routes, Route } from "react-router";
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "bottle",
      price: 2,
      image: "./assets/hero.png",
    },
    {
      id: 2,
      title: "raincoat",
      price: 3,
      image: "./assets/hero.png",
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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

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

  function handleQuantityChange(id, newQuantity) {
    if (newQuantity === "") {
      newQuantity = 0;
    }

    const regex = /^[0-9]*$/;
    const isInteger = regex.test(newQuantity);
    if (!isInteger) return;

    newQuantity = parseInt(newQuantity);
    const isInvalid = newQuantity > 999 || newQuantity < 0;
    if (isInvalid) return;

    const nextCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          quantity: newQuantity,
        };
      } else {
        return cartItem;
      }
    });
    setCart(nextCart);
  }

  function handleRemoveItem(id) {
    const nextCart = cart.filter((item) => item.id !== id);
    setCart(nextCart);
  }

  function handleQuantityClick(action, id) {
    let nextCart;
    nextCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            action === "increment" ? item.quantity + 1 : item.quantity - 1,
        };
      }
      return item;
    });

    setCart(nextCart);
  }
  return (
    <>
      <Navbar cartItemCount={cartItemCount} />

      <div className="page-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <ShopPage
                products={products}
                onAddToCartClick={handleAddToCartClick}
              />
            }
          ></Route>

          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                products={products}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
                onQuantityClick={handleQuantityClick}
                cartItemCount={cartItemCount}
              />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
