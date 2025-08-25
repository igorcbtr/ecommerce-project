import {Link} from 'react-router';
import { NavLink } from 'react-router';
import CartIcon from '../assets/images/icons/cart-icon.png'
import SearchIcon from '../assets/images/icons/search-icon.png'
import './header.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
export function Header({cart}) {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const updateSearchInput = (event) => {
    setSearchText(event.target.value)
  }

  const searchProducts = () => {
    navigate(`/?search=${searchText}`)
  }
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity+=cartItem.quantity;
  });
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src="images/logo-white.png" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" value={searchText} onChange={updateSearchInput}/>

        <button className="search-button" onClick={searchProducts}>
          <img className="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
