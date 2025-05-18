import { Link, NavLink } from "react-router-dom";
import { Moon, ShoppingBag, ShoppingCart, Sun, X } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const ThemeToggle = () => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return storedTheme || (systemPrefersDark ? 'dark' : 'light');
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartItems = cartItems.reduce(
    (total, items) => total + items.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const { theme, toggleTheme } = ThemeToggle();

  const handleOpenCart = () => setOpen(!open);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="menu-button"
            >
              {isOpen ? <X /> : <AlignJustify />}
            </button>
            <Link to="/" className="logo">
              <ShoppingBag />
              <span className="logo-text">ViteShop</span>
            </Link>
          </div>
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
                  to="/category/femmes"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Femmes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/hommes"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Hommes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/cuisine"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Cuisine
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/bébés"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Bébés
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
                  à propos de nous
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="cart-button" onClick={handleOpenCart}>
              {totalCartItems > 0 && (
                <span className="cart-quantity">{totalCartItems}</span>
              )}
              <ShoppingCart />
            </button>
            <span>{totalPrice.toFixed(2)} DH</span>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme">
            {theme === 'light' ? (
              <Sun
                role="img"
                aria-label="Light mode"
              />
            ) : (
              <Moon
              role="img"
              aria-label="Light mode"
            />
            )}
            </button>
        </div>
        {open && <Cart setOpen={setOpen} />}
      </header>
      {isOpen && <Sidebar />}
    </>
  );
};

export default Header;
