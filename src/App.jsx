import { useState, useEffect } from "react";
import ShopPage from "./components/ShopPage.jsx";
import Navbar from "./components/Navbar.jsx";
import CartPage from "./components/CartPage.jsx";
import { Routes, Route } from "react-router";
import "./styles/App.css";
import ProductDetail from "./components/ProductDetail.jsx";

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

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });
  const cartItemCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const [query, setQuery] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleAddToCartClick(id, quantity = 1) {
    setCart((prevCart) => {
      const inCart = prevCart.some((item) => item.id === id);
      if (inCart) {
        return prevCart.map((item) => {
          if (item.id === id) {
            return {
              id,
              quantity: item.quantity + quantity,
            };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...prevCart,
          {
            id,
            quantity,
          },
        ];
      }
    });
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

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleQuerySubmit(e) {
    e.preventDefault();
    const trimmed = query.trim();
    const filtered = products?.filter((product) =>
      product.title.toLowerCase().includes(trimmed.toLowerCase())
    );
    setDisplayedProducts(filtered);
  }

  return (
    <>
      <Navbar
        cartItemCount={cartItemCount}
        query={query}
        onQueryChange={handleQueryChange}
        onQuerySubmit={handleQuerySubmit}
      />

      <div className="page-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <ShopPage
                products={displayedProducts}
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

          <Route
            path="/product/:id"
            element={
              <ProductDetail
                products={products}
                onAddToCartClick={handleAddToCartClick}
              />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
