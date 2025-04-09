import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <section className="section checkout-section">
      <div className="container">
        <div className="title-wrapper">
          <h3 className="checkout-title">Votre Panier</h3>
          <p className="checkout-description">
            Vérifiez les articles dans votre panier avant de passer à la caisse.
            Assurez-vous que tout est correct et prêt à être expédié.
          </p>
        </div>
        <div className="checkout-wrapper">
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-image-wrapper">
                  <span className="cart-item-quantity">{item.quantity}</span>
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
                  </p>
                </div>
                <p className="cart-item-total-price">
                  {(item.price * item.quantity).toFixed(2)} DH
                </p>
              </li>
            ))}
          </ul>
          <div className="checkout-summary">
            <span className="total-label">Total</span>
            <div className="total-price">
              <sub>DH</sub> {totalPrice.toFixed(2)} DH
            </div>
          </div>
          <Link to="/checkout-success" className="checkout-button" onClick={handleClearCart}>
            Paiement
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
