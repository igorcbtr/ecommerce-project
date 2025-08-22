import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/checkhout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { ErrorPage } from "./pages/404/404";
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart = {cart} />} />
      <Route path="checkout" element={<CheckoutPage cart = {cart}/>} />
      <Route path="orders" element={<OrdersPage />}/>
      <Route path="tracking" element={<TrackingPage />}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
