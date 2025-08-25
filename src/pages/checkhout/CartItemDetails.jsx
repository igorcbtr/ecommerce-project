import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";
export function CartItemDetails({ cartItem, loadCart }) {
  const [isUpdatingQuantity, setUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.product.id}`);
    await loadCart();
  };

  const updateQuantity = async () => {
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`,{
        quantity : Number(quantity)
      });
      await loadCart();
    }
    setUpdatingQuantity(!isUpdatingQuantity);
  };
  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {isUpdatingQuantity ? (
              <input
                onKeyDown={(event) => {
                  if(event.key==='Enter')
                    updateQuantity();
                  if(event.key==='Escape')
                  {
                    setQuantity(cartItem.quantity);
                    setUpdatingQuantity(false);
                  }
                }}
                type="text"
                className="update-quantity-input"
                value={quantity}
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateQuantity}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
