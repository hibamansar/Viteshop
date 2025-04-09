import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartItems = cartItems.reduce(
    (total, items) => total + items.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOpenCart = () => setOpen(!open);
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <ShoppingBag />
          <span className="logo-text">ViteShop</span>
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Women's-Clothing"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Women's-Clothing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Men's-Clothing"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Men's-Clothing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Women's-Footwear"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Women's-Footwear
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Men's-Footwear"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Men's-Footwear
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                à propos do nous
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="menu-button">
            <AlignJustify />
          </button>
          <button className="cart-button" onClick={handleOpenCart}>
            {totalCartItems > 0 && (
              <span className="cart-quantity">{totalCartItems}</span>
            )}
            <ShoppingCart />
          </button>
          <span>{totalPrice.toFixed(2)} DH</span>
        </div>
      </div>
      {open && <Cart setOpen={setOpen} />}
    </header>
  );
};

export default Header;
