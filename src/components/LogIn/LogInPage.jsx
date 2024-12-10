import "./logInPage.scss";
import "@fortawesome/free-brands-svg-icons";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogInPage() {
  return (
    <>
      {/* <img src="logInBackGround" alt="" /> */}
      <div className="container">
        <div className="row g-2">
          <div className="col-12">
            <div className="LogSec">
              <p style={{backgroundColor:"cyan"}} className="fs-1 col-12">
                HIGHLIFE
                </p>
              <h5>Login or Register</h5>
              <h6 className="TopSection">
                Type your e-mail to login or create a Highlife account
              </h6>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="email col-12 col-md-6 col-lg-4"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="password col-12 col-md-6 col-lg-4"
              />
              <div>
                <button className="continue btn col-12">Continue</button>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" />
              </div>
              <div>
                <FontAwesomeIcon icon={faGoogle} className="Google" />
                <button
                  type="button"
                  className="google col-12"
                >
                  Continue with google
                </button>
              </div>
              <div>
                <FontAwesomeIcon icon={faFacebook} className="FaceBook" />
                <button
                  type="button"
                
                  className="faceBook col-12"
                >
                  Continue with Facebook
                  </button>
              </div>
              <div>
                <FontAwesomeIcon icon={faApple} className="Apple" />
                <button
                  type="button"
                  className="apple col-12"
                >
                  Continue with Apple
                  </button>
              </div>
              <h6>
                By Signing up to Highlife platform, you agree to our
              </h6>
              <p>

                <a href=""> Terms and Conditions </a> and our{" "}
                <a href=""> Return Policy </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
