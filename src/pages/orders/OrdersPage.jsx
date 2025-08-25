import "./OrdersPage.css";
import BuyAgain from "../../assets/images/icons/buy-again.png";
import { Header } from "../../components/Header";
import OrdersFavIcon from "../../assets/images/orders-favicon.png";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { OrdersGrid } from "./OrdersGrid";
export function OrdersPage({ cart , loadCart}) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
          setOrders(response.data)
    };
    
    fetchOrdersData();
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href={OrdersFavIcon} />
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} loadCart={loadCart}/>
      </div>
    </>
  );
}
