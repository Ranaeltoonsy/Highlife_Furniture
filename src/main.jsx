import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes.jsx"; // Import router
import { ProductsProvider } from "./components/ProductsContext.jsx";
import { AdSectionProvider } from "./components/AdSectionContext.jsx";
import { CartProvider } from "./components/CartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <AdSectionProvider>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
      </AdSectionProvider>
    </ProductsProvider>
  </React.StrictMode>
);