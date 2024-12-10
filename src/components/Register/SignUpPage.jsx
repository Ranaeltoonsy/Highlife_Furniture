import "./SignUpPage.scss";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SignUpPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="Signsec">
              <h1>HIGHLIFE</h1>
              <h3>Sign Up</h3>
              <h6>
                Join thousnads of delighted customers who have transformed their
                spaces with Highlife
              </h6>

              <input
                type="text"
                placeholder="First Name "
                className="firstName"
              />
              <input
                type="text"
                placeholder="Second Name "
                className="secondName"
              />

              <div className="phoneNumber">
                <FontAwesomeIcon />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="+20"
                  className="egyptCode"
                />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone Number  "
                  className="number"
                />
              </div>

              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="password"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder=" Confirm Password"
                className="confirmPassword"
              />

              <div>
                <input
                  type="button"
                  value="Create Account"
                  className="createAccount"
                />
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" />
              </div>

              <h6>
                By Signing up to Highlife platform, you agree to our
                <br />
                <a href=""> Terms and Conditions </a> and our{" "}
                <a href=""> Return Policy </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
