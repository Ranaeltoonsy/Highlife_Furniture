import "./AdSection.scss";

export default function AdSection({ ads }) {
  return (
    <section className="AdsSection">
  <div className="container">
    <div className="row">
      {ads.map((el) => (
        el.Image_Ad && (
          <div key={el.id} className="col-12 mb-2">
            <div
              className="AdImage d-flex flex-column p-3"
              style={{
                backgroundImage: `url(http://localhost:1337${el.Image_Ad.url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                height: "300px",
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            >
              <p className="btn">Free Shipping</p>
            </div>
          </div>
        )
      ))}
    </div>
  </div>
</section>
  );
}
