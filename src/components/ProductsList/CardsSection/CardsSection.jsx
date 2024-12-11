
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
export default function CardsSection({ products }) {
  const navigate = useNavigate([]);

  return (
    <section className="productsList">
      <div className="container">
        <div className="products">
          <div className="row g-2 mt-4">
            {products.map(
              (el) =>
                el.product_image && (
                  <div key={el.id} className="CardSection col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        onClick={() => navigate(`/AddToCartPage/${el.id}`)} 
                        src={`http://localhost:1337${el.product_image.url}`}
                        className="card-img-top object-fit-fill"
                        alt={el.product_name || "Product Image"}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{el.product_name}</h5>
                        <div className="d-flex flex-row text-center gap-2 align-items-center">
                        <FontAwesomeIcon className="text-warning" icon={faStar} />

                        <p className="card-text">{el.product_review}</p>
                        </div>
                        <div className="d-flex flex-row gap-3">
                          <p className="card-text">{el.product_price}</p>
                          <p className="card-text text-decoration-line-through">
                            {el.pre_price}
                          </p>
                        </div>
                        <div className="d-flex flex-row align-items-center text-center justify-content-between">
                          <p className="card-text">{el.Demand}</p>
                          <button className="btn btn-success">
                            {el.Discount}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
