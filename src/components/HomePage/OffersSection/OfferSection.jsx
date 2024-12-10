import axios from "axios";
import { useEffect, useState } from "react";
import "./OffersSection.scss";
export default function OfferSection() {
  const [Offers, setOffers] = useState([]);

  const getOffers = () => {
    axios
      .get("http://localhost:1337/api/offers?populate=*")
      .then((res) => {
        setOffers(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getOffers();
  }, []);
  return (
    <div className="container mt-5 px-0">
      <div className="row mx-0 g-3">
        {Offers.map((el) => (
          <div key={el.id} className="col-12 col-md-6 col-lg-3">
            <div className="Offers d-flex flex-column gap-2 rounded-5 justify-content-center align-items-center">
              <h5 className=" mt-3 title">{el.title}</h5>
              <h6 className="code text-white fs-bolder bg-danger p-3">
                {el.Discount_Code}
              </h6>
              <div className="card-image-container">
                <img
                  src={`http://localhost:1337${el.Offer_Image?.url || ""}`}
                  className="card-img-top"
                  alt={el.title || "Category Image"}
                />
              </div>
              <div className="discount d-flex flex-row justify-content-center gap-4">
                <h5 className="w-25 fw-bolder">{el.Extra}</h5>
                <h1 className="fw-bold">{el.Discount_Num}</h1>
              </div>
              <p>{el.Capped}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
