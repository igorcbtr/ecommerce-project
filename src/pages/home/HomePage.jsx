import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";
import HomeFavIcon from "../../assets/images/home-favicon.png";
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from "react-router";
export function HomePage({ cart, loadCart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search')
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : `/api/products`;
      const response = await axios.get(urlPath);
      setProducts(response.data)
    };
    getHomeData();
  }, [search]);

  window.axios=axios;
  return (
    <>

      <link rel="icon" type="image/svg+xml" href={HomeFavIcon} />
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
