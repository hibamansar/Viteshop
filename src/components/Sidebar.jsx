import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
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
              à propos do nous
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
