import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddToCart.scss";
import {
  faCircleUser,
  faStarHalfStroke,
} from "@fortawesome/free-regular-svg-icons";
import {
  faShop,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../CartContext";

export default function AddToCart({ products }) {
  const { cartProducts, setCartProducts } = useCart();

  const toggleCartProduct = (product) => {
    setCartProducts((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };


  return (
    <section className="ProductDetails">
      <div className="container">
        <div className="row">
          {products && products.length > 0 ? (
            products.map((el) => {
              if (!el || !el.id)
                return <p key="invalid-product">Invalid product data</p>;

              return (
                <div
                  key={el.id}
                  className="Details col-12 d-flex flex-wrap gap-3"
                >
                  <div className="ProductImage col-12 col-md-6 col-lg-3">
                    <img
                      src={`http://localhost:1337${el.product_image.url}`}
                      alt={el.product_name || "Product Image"}
                      className="product-image"
                    />
                  </div>

                  <div className="col-12 col-md-6 col-lg-9 mt-3">
                    <h2>{el.product_name}</h2>
                    <div className="d-flex flex-row gap-3">
                      <h4 className="card-text">EGP {el.product_price}</h4>
                      <p className="discount">{el.Discount}</p>
                    </div>
                    <h6 className="card-text text-decoration-line-through">
                      EGP {el.pre_price}
                    </h6>
                    <h6 className="card-text text-success">
                      You saved {el.pre_price - el.product_price}
                    </h6>
                    <p>Price includes VAT</p>

                    <div className="d-flex flex-row gap-2 align-items-center">
                      <FontAwesomeIcon icon={faTruck} />
                      <p>
                        Delivery expected between 18 December to 22 December
                      </p>
                    </div>

                    <div className="d-flex flex-row gap-2 align-items-center">
                      <FontAwesomeIcon icon={faShop} />
                      <p>Explore more from this seller</p>
                    </div>

                    <div className="d-flex flex-row gap-3 align-items-center">
                      <p className="Qty">Qty 1</p>
                      <button
                        className="btn Addbutton w-50"
                        onClick={() => toggleCartProduct(el)}
                      >
                        {cartProducts.some((product) => product.id === el.id)
                          ? "Remove from Cart"
                          : "Add to Cart"}
                      </button>
                    
                    </div>
                  </div>

                  <div className="col-12 mt-5">
                    <h2>Product Ratings & Reviews</h2>
                    <hr />
                    <div className="Ratings d-flex flex-wrap align-items-center gap-4">
                      <div className="text-center d-flex flex-row gap-3">
                        <div>
                          <h4>{el.product_review}</h4>
                          <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                          </div>
                        </div>

                        <div className="bar-container">
                          <div className="bar bar-5"></div>
                          <div className="bar bar-4"></div>
                          <div className="bar bar-2"></div>
                          <div className="bar bar-3"></div>
                        </div>
                      </div>
                      <div className="Review d-flex flex-column">
                        <div className="user-info">
                          <FontAwesomeIcon
                            icon={faCircleUser}
                            className="user-icon"
                          />
                          <div className="user-details">
                            <p>User 1</p>
                            <p>6 October 2024</p>

                            <h6>
                              Great quality sofa! It's super comfortable and
                              looks amazing in my living room. The color is
                              exactly as shown in the pictures.
                            </h6>
                          </div>
                        </div>
                        <div className="user-info">
                          <FontAwesomeIcon
                            icon={faCircleUser}
                            className="user-icon"
                          />
                          <div className="user-details">
                            <p>User 1</p>
                            <p>6 October 2024</p>

                            <h6>
                              Great quality sofa! It's super comfortable and
                              looks amazing in my living room. The color is
                              exactly as shown in the pictures.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </section>
  );
}
