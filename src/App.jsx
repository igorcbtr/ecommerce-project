import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkhout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { ErrorPage } from "./pages/404/404";
function App() {
  const [cart, setCart] = useState([]);

      const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };

  useEffect(() => {

    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart = {cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart = {cart} loadCart={loadCart}/>} loadCart={loadCart}/>
      <Route path="orders" element={<OrdersPage cart ={cart} loadCart={loadCart}/>}/>
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart}/>}/>
      <Route path="*" element={<ErrorPage cart={cart}/>} />
    </Routes>
  );
}

export default App;
