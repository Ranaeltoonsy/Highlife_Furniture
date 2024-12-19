import "../HeaderSection/Header.scss";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { cartProducts } = useCart();
  const navigate = useNavigate();
  const [totalItems, setTotalItems] = useState(0);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  useEffect(() => {
    const itemsCount = cartProducts.reduce(
      (sum, product) => sum + (product.quantity || 1),
      0
    );
    setTotalItems(itemsCount);
  }, [cartProducts]);

  return (
    <>
      <nav className="navbar head navbar-expand-lg ">
        <div className="container">
          <Link to={"/"} className="navbar-brand fs-3">
            HIGHLIFE
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarSupportedContent"
            aria-expanded={menuVisible}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="navbar-toggler-icon" />
          </button>

          <div
            className={`collapse navbar-collapse ${menuVisible ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/BedsPage"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Beds
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/ChairsPage"} className="nav-link">
                  Chairs
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/SofasPage"} className="nav-link">
                  Sofas
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/TablesPage"} className="nav-link">
                  Tables
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/RoomSetsPage"} className="nav-link">
                  Room Sets
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/BabyKidsPage"} className="nav-link">
                  Baby & Kids
                </Link>
              </li>
            </ul>
            <div className="cartShopping gap-3 ">
              {totalItems > 0 && (
                <span className="cart-count position-absolute translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
              <FontAwesomeIcon
                icon={faCartShopping}
                className="position-relative"
                onClick={() => navigate(`/CartPage`)}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
