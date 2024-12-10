import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import TablesPage from "../pages/TablesPage/TablesPage.jsx";
import ChairsPage from "../pages/ChairsPage/ChairsPage.jsx";
import BedsPage from "../pages/BedsPage/BedsPage.jsx";
import SofasPage from "../pages/SofasPage/SofasPage.jsx";
import RoomSetsPage from "../pages/RoomSetsPage/RoomSetsPage.jsx";
import BabyKidsPage from "../pages/BabyKidsPage/BabyKidsPage.jsx";
import Page404 from "../pages/Page404/Page404.jsx";
import NoHeaderFooterLayout from "../components/NoHeaderFooterLayout.jsx";
import LogInPage from "../components/LogIn/LogInPage.jsx";
import SignUpPage from "../components/Register/SignUpPage.jsx";
import AddToCartPage from "../pages/AddToCartPage/AddToCartPage.jsx";
import CartPage from "../pages/CartPage/CartPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/TablesPage",
        element: <TablesPage />,
      },
      {
        path: "/ChairsPage",
        element: <ChairsPage />,
      },
      {
        path: "/BedsPage",
        element: <BedsPage />,
      },
      {
        path: "/SofasPage",
        element: <SofasPage />,
      },
      {
        path: "/RoomSetsPage",
        element: <RoomSetsPage />,
      },
      {
        path: "/BabyKidsPage",
        element: <BabyKidsPage />,
      },
      {
        path: "/AddToCartPage/:productId",
        element: <AddToCartPage />,
      },
      {
        path: "/CartPage",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/",
    element: <NoHeaderFooterLayout />,
    children: [
      { path: "/LogInPage", element: <LogInPage /> },
      { path: "/SignUpPage", element: <SignUpPage /> },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

export default router;
