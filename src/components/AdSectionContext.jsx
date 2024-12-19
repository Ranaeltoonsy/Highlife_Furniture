import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AdSectionContext = createContext();

export const AdSectionProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [category, setCategory] = useState("beds");

  const fetchAds = (selectedCategory) => {
    axios
      .get(`http://localhost:1337/api/${selectedCategory}?populate=*`)
      .then((res) => {
        setAds(res.data.data);
        setCategory(selectedCategory);
      })
      .catch((error) => {
        console.error(`Error fetching ${selectedCategory} data:`, error);
      });
  };

  useEffect(() => {
    fetchAds(category);
  }, [category]);

  return (
    <AdSectionContext.Provider value={{ ads, fetchAds }}>
      {children}
    </AdSectionContext.Provider>
  );
};
