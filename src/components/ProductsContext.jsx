import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("beds");
  const [loading, setLoading] = useState(false);

  const fetchProducts = (selectedCategory) => {
    setLoading(true);
    axios
      .get(`http://localhost:1337/api/${selectedCategory}?populate=*`)
      .then((res) => {
        setProducts(res.data.data);
        setCategory(selectedCategory);
      })
      .catch((error) => {
        console.error(`Error fetching  data:`, error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchProducts(category);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, fetchProducts, category, loading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
