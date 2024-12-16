import "./HeroSection.scss";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  A11y,
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";
export default function HeroSection() {
  const [HeroSlider, setHeroSlider] = useState([]);

  const getHeroSwiper = () => {
    axios
      .get("http://localhost:1337/api/hero-sliders?populate=*")
      .then((res) => {
        setHeroSlider(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getHeroSwiper();
  }, []);

  return (
    <div className="container animate__animated animate__fadeIn px-0" id="HeroSection">
      <div className="row mx-0">
        <div className="col-12 px-0">
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            effect="fade"
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            {HeroSlider.map((el) => (
              <SwiperSlide key={el.documentId}>
                <div
                  className="slide-background d-flex flex-column justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(http://localhost:1337${el.Slider_Image[0].url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "70vh",
                    color: "white",
                  }}
                >
                  <div className="slide-content text-center text-white p-3">
                    <h1 className="offer-text mb-2">{el.offer}</h1>
                    <h1 className="title-text d-flex flex-wrap justify-content-center">
                      <span style={{ color: "#1A3D6D" }}>{el.Title}</span>
                      <span
                        className="delivery-text"
                        style={{ color: "white" }}
                      >
                        {el.Delivery}
                      </span>
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
