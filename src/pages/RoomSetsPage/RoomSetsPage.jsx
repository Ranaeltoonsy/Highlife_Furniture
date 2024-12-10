import { useEffect, useContext } from "react";
import AdSection from'../../components/ProductsList/AdSection/AdSection.jsx';
import CardsSection from'../../components/ProductsList/CardsSection/CardsSection.jsx';
import { ProductsContext } from "../../components/ProductsContext.jsx";
import { AdSectionContext } from "../../components/AdSectionContext.jsx";
export default function RoomSetsPage() {
  const { fetchAds, ads } = useContext(AdSectionContext);
  const { fetchProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts("room-sets");
    fetchAds("room-ads");
    
  }, []);
  return (
    <>
      <AdSection ads={ads}/>
      <CardsSection products={products} />
    </>
  );
}
