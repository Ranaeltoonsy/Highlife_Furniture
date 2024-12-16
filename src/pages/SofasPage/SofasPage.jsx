import { useEffect, useContext } from "react";
import AdSection from "../../components/ProductsList/AdSection/AdSection.jsx";
import CardsSection from "../../components/ProductsList/CardsSection/CardsSection.jsx";
import { ProductsContext } from "../../components/ProductsContext.jsx";
import { AdSectionContext } from "../../components/AdSectionContext.jsx";
import "animate.css";
export default function SofasPage() {
  const { fetchAds, ads } = useContext(AdSectionContext);
  const { fetchProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts("sofas");
    fetchAds("sofa-ads");
  }, []);
  return (
    <div className="animate__animated animate__fadeIn">
      <AdSection ads={ads} />
      <CardsSection products={products} />
    </div>
  );
}
