import { useEffect, useContext } from "react";
import AdSection from "../../components/ProductsList/AdSection/AdSection.jsx";
import CardsSection from "../../components/ProductsList/CardsSection/CardsSection.jsx";
import { ProductsContext } from "../../components/ProductsContext.jsx";
import { AdSectionContext } from "../../components/AdSectionContext.jsx";
import "animate.css";
export default function ChairsPage() {
  const { fetchAds, ads } = useContext(AdSectionContext);
  const { fetchProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts("chairs");
    fetchAds("chair-ads");
  }, []);
  return (
    <div className="animate__animated animate__fadeIn">
      <AdSection ads={ads} />
      <CardsSection products={products} />
    </div>
  );
}
