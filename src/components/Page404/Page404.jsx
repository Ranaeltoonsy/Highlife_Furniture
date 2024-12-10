import "./Page404.scss";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="Page container">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center text-center gap-2">
          <h1 className="text-body-secondary">404</h1>
          <h3 className="text-body-secondary">Page not found</h3>
          <h5 className="text-body-tertiary">
            Sorry,but the page that you requested doesn't exist.
          </h5>
          <Link to={"/"} className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
