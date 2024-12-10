import Header from "./components/HeaderSection/Header.jsx";
import Footer from "./components/FooterSection/Footer.jsx";
import { Outlet } from "react-router-dom"; 

export default function App() {
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
