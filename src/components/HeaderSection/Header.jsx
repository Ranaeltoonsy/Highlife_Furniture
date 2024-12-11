import "../HeaderSection/Header.scss";
import {
  faUser,
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { ProductsContext } from "../ProductsContext";
export default function Header() {
  const { products } = useContext(ProductsContext); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const { cartProducts } = useCart();
  const navigate = useNavigate();
  const [totalItems, setTotalItems] = useState(0);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  useEffect(() => {
    const itemsCount = cartProducts.reduce((sum, product) => sum + (product.quantity || 1), 0);
    setTotalItems(itemsCount);
  }, [cartProducts]);

   const handleSearchChange = (e) => {
    const query = e.target.value.toUpperCase();
    setSearchQuery(query);

    if (products && products.length > 0) {
      const filtered = products.filter((product) =>
        product.attributes.product_name.toUpperCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "" && filteredProducts.length > 0) {
      console.log("Search Results:", filteredProducts);
    }
  };

  return (
    <>
    <nav className="navbar head navbar-expand-lg ">
      <div className="container">
        {/* Brand */}
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

          
          <form className="d-flex me-auto searchInput" role="search"
           onSubmit={handleSearchSubmit}>
            <input
              type="search"
              className="form-control"
              placeholder="What Are You Looking For?"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>

             
          <div className="cartShopping gap-3 ">
            {totalItems > 0 && (
        <span className="cart-count position-absolute translate-middle badge rounded-pill bg-danger">
          {totalItems} 
        </span>
          )}
            <FontAwesomeIcon icon={faCartShopping} className="position-relative" onClick={()=> navigate(`/CartPage`)}/>
            
          </div>
         
          <li className="nav-item dropdown d-flex myAccount">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
            >
              <FontAwesomeIcon icon={faUser} /> My Account
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to={""} className="dropdown-item">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to={""} className="dropdown-item">
                  My Orders
                </Link>
              </li>
              <li>
                <Link to={""} className="dropdown-item">
                  Wishlist
                </Link>
              </li>
            </ul>
          </li>
        </div>
        
      </div>
    </nav>
    {/* Search Results */}
    <div className="search-results">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <div key={product.id} className="search-result-item">
          <h5>{product.attributes.product_name}</h5>
          <img
            src={product.attributes.image_url}
            alt={product.attributes.product_name || "Product Image"}
          />
          <p>{product.attributes.product_price}</p>
        </div>
      ))
    ) : searchQuery.trim() ? (
      <p>No results found</p>
    ) : null}
  </div>
  </>
  );
}
