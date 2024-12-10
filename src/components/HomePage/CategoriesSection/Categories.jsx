import axios from "axios";
import { useEffect, useState } from "react";
import "./Categories.scss";
export default function Categories() {
  const [CatsSection, setCatsSection] = useState([]);

  const getCatsSection = () => {
    axios
      .get("http://localhost:1337/api/categories?populate=*")
      .then((res) => {
        setCatsSection(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getCatsSection();
  }, []);

  return (
    <div className="container mt-5 px-0">
      <div className="row mx-0 g-3">
        <h2 className="col-12">Furnish your home</h2>
        {CatsSection.map((el) => (
          <div key={el.documentId} className="col-12 col-md-6 col-lg-3">
            <div className="card rounded-3 shadow-sm">
              <div className="card-image-container">
                <img
                  src={`http://localhost:1337${el.cat_Image?.url || ""}`}
                  className="card-img-top"
                  alt={el.title || "Category Image"}
                />
                <div className="card-title-overlay">
                  <h5 className="card-title">{el.title}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
