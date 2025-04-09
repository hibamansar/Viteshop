import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Produit = ({ produit }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = (product, quantity) => {
    if (quantity <= 0) return;
    const productToAdd = { product, quantity }; 
    dispatch(addToCart(productToAdd));
    setQuantity(0);
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  const handleDeacreaseQuantity = () => {
    if (quantity > 0) setQuantity((prevQuantity) => prevQuantity - 1);
  }
  return (
    <div className={`product-card ${produit.new ? "new" : ""}`}>
      <div className="product-banner">
        <img src="/images/dress.jpg" alt="dress" className="img-cover" />
      </div>
      <div className="product-content">
        <h2 className="product-title">{produit.title}</h2>
        <p className="product-description">
          {produit.description}
        </p>
        <p className="product-price">{produit.price} DH</p>
        <div className="product-quantity">
          <button className="quantity-button" onClick={handleDeacreaseQuantity}>
            <Minus size='18' />
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-button" onClick={handleIncreaseQuantity}>
            <Plus size='18' />
          </button>
        </div>
        <button className="product-button" onClick={ () => handleAddToCart(produit, quantity)}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Produit;
