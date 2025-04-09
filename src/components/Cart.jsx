import { Trash } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = ({ setOpen }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  }

  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="cart">
      <h4 className="cart-title">Votre Panier</h4>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Votre panier est vide.</p>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-cover cart-item-image"
                />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">
                  {item.price} DH x {item.quantity}{" "}
                  <span>{(item.price * item.quantity).toFixed(2)} DH</span>
                </p>
              </div>
              <button className="remove-item-button" onClick={() => handleRemoveFromCart(item.id)}>
                <Trash size="20" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <Link to='/checkout' className="checkout-button" onClick={() => setOpen(false)}>Passer à la caisse</Link>
      )}
    </div>
  );
};

export default Cart;
