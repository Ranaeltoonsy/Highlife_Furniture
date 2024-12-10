import HeroSection from "../../components/HomePage/HeroSection/HeroSection.jsx";
import Categories from "../../components/HomePage/CategoriesSection/Categories.jsx";
import CatsSwiper from "../../components/HomePage/CatsSwiper/CatsSwiper.jsx";
import OfferSection from "../../components/HomePage/OffersSection/OfferSection.jsx";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Categories />
      <OfferSection />
      <CatsSwiper />
    </>
  );
}
