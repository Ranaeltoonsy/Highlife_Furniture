import "./logInPage.scss";
import "@fortawesome/free-brands-svg-icons";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function LogInPage() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission
    alert("Login Successful");
    // Add navigation logic here if needed
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="LogSec d-flex flex-column justify-content-center align-items-center text-center gap-3">
              <div className="logImage">
                <h1>HIGHLIFE</h1>
              </div>
              <h5>Login or Register</h5>
              <h6>
                Type your e-mail to login or{" "}
                <Link to={"/SignUpPage"} className="text-decoration-none">
                  create a Highlife account
                </Link>
              </h6>
              <form className="col-12 d-flex flex-column justify-content-center align-items-center text-center gap-2" onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="email col-12 col-md-4 rounded-2"
                  required
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="password col-12 col-md-4 rounded-2"
                  required
                />
                <button type="submit" className="continue btn"  >
                  Continue
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="arrow ms-2"
                    
                  />
                </button>
              </form>
              <div className="d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faGoogle} className="Google" />
                <button type="button" className="google col-12">
                  Continue with Google
                </button>
              </div>
              <div className="d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faFacebook} className="FaceBook" />
                <button type="button" className="faceBook col-12">
                  Continue with Facebook
                </button>
              </div>
              <div className="d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={faApple} className="Apple" />
                <button type="button" className="apple col-12" >
                  Continue with Apple
                </button>
              </div>
              <h6>By Signing up to Highlife platform, you agree to our</h6>
              <p>
                <Link to=""> Terms and Conditions </Link> and our{" "}
                <Link to=""> Return Policy </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
