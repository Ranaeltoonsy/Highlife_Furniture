import "./SignUpPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phoneCode: "+20",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, secondName, phoneNumber, email, password, confirmPassword } = formData;

    if (!firstName || !secondName || !phoneNumber || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Sign Up Successful");
    navigate("/LoginPage");
  };

  return (
    <div className="container">
      <div className="row g-2">
        <div className="col-12">
          <div className="SignSec d-flex align-items-center flex-column justify-content-center text-center gap-3">
            <div className="SignImage">
              <h1>HIGHLIFE</h1>
            </div>
            <h5>Sign Up</h5>
            <h6 className="w-50">
              Join thousands of delighted customers who have transformed their
              spaces with Highlife
            </h6>
            <form className="col-12 d-flex align-items-center flex-column justify-content-center text-center gap-2" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="firstName col-12 col-md-4"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="secondName"
                placeholder="Second Name"
                className="secondName col-12 col-md-4"
                onChange={handleChange}
                required
              />
              <div className="phoneNumber d-flex col-12 col-md-4">
                <input
                  type="number"
                  name="phoneCode"
                  placeholder="+20"
                  className="egyptCode col-2"
                  value="+20"
                  readOnly
                />
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="number col-10"
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="email col-12 col-md-4"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="password col-12 col-md-4"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="confirmPassword col-12 col-md-4"
                onChange={handleChange}
                required
              />
              <button type="submit" className="continue btn">
                Create Account
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow ms-2"
                />
              </button>
            </form>
            <h6>By signing up to Highlife platform, you agree to our </h6>
            <p>
              <Link to="">Terms and Conditions</Link> and our{" "}
              <Link to="">Return Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
