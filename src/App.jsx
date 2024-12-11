import Header from "./components/HeaderSection/Header.jsx";
import Footer from "./components/FooterSection/Footer.jsx";
import { Outlet } from "react-router-dom"; 
import React, { useRef } from "react";
import Loader from "./components/Loader/Loader.jsx";
export default function App() {
  const [showLoader, setShowLoader] = React.useState(true);
  const isFirstLoad = useRef(true);
  React.useEffect(() => {
    if (isFirstLoad.current){

      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 4000);
  
      return () => clearTimeout(timer);
    }else {
      setShowLoader(false); // Ensure loader stays hidden on navigation
    }
  }, []);
  if (showLoader) {
    return (
   <Loader/>
    );
  }
  return (
    <div className="App">
        <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
