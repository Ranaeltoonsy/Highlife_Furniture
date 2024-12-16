import HeroSection from "../../components/HomePage/HeroSection/HeroSection.jsx";
import Categories from "../../components/HomePage/CategoriesSection/Categories.jsx";
import CatsSwiper from "../../components/HomePage/CatsSwiper/CatsSwiper.jsx";
import OfferSection from "../../components/HomePage/OffersSection/OfferSection.jsx";
import "animate.css";
export default function HomePage() {
  return (
    <div className="animate__animated animate__fadeIn">
      <HeroSection />
      <Categories />
      <OfferSection />
      <CatsSwiper />
    </div>
  );
}
