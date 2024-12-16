import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CatsSwiper() {
  const [CatsSwiper, setCatsSwiper] = useState([]);
  const [error, setError] = useState(null);
  const defaultImage = "/path-to-default-image.jpg";

  const getCatsSwiper = () => {
    axios
      .get("http://localhost:1337/api/cats-sliders?populate=*")
      .then((res) => {
        setCatsSwiper(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
      });
  };

  useEffect(() => {
    getCatsSwiper();
  }, []);

  return (
    <>
      <div className="container mt-2 px-0" id="CatsSwiper">
        <div className="row mx-0 g-3">
          <h2 className="col-12 mt-5">Our Collection</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 90 },
              1044: { slidesPerView: 4, spaceBetween: 90 },
            }}
            className="mySwiper"
          >
            {CatsSwiper.map((el) => (
              <SwiperSlide className="mt-4" key={el.id}>
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    src={`http://localhost:1337${
                      el.product_image?.url || defaultImage
                    }`}
                    className="card-img-top"
                    alt={el.product_name || "Product Image"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {el.product_name || "Unnamed Product"}
                    </h5>
                    <p className="card-text">
                      {el.product_review || "No reviews available"}
                    </p>
                    <div className="d-flex flex-row gap-3">
                      <p className="card-text">
                        EGP {parseFloat(el.product_price || 0).toFixed(2)}
                      </p>
                      {el.pre_price && (
                        <p className="card-text text-decoration-line-through">
                          EGP {parseFloat(el.pre_price).toFixed(2)}
                        </p>
                      )}
                    </div>
                    <div className="d-flex flex-row align-items-center text-center gap-2">
                      <p className="card-text mt-2">
                        {el.Demand || "No demand info"}
                      </p>
                      <button className="btn btn-success w-50">
                        {el.Discount || "No Discount"}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
