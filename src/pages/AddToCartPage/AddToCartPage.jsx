import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AddToCart from "../../components/AddToCart/AddToCart.jsx";
import { ProductsContext } from "../../components/ProductsContext.jsx";

export default function AddToCartPage() {
  const { productId } = useParams();
  const { products } = useContext(ProductsContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const product = products.find((el) => el.id === parseInt(productId, 10));
    if (product) {
      setSelectedProduct(product);
    } else {
      axios
        .get(`http://localhost:1337/api/products/${productId}?populate=*`)
        .then((res) => setSelectedProduct(res.data.data));
    }
  }, [productId, products]);

  return <AddToCart products={[selectedProduct]} />;
}
