import {
  faCcDiscover,
  faCcMastercard,
  faCcVisa,
  faSquareBehance,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "animate.css"
import "../FooterSection/Footer.scss";
import "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container animate__animated animate__fadeIn">
          <div className="row mt-3">
            <div className="col-sm-12 col-md-3">
              <div className="d-flex flex-column">
                <p>Company</p>
                <ul className="list-unstyled">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                </ul>
                <div className="weAccept">
                  <p>We Accept</p>
                  <div className="d-flex gap-3">
                    <span>
                      <FontAwesomeIcon className="fs-2" icon={faCcDiscover} />
                    </span>
                    <span>
                      <FontAwesomeIcon className="fs-2" icon={faCcMastercard} />
                    </span>
                    <span>
                      <FontAwesomeIcon className="fs-2" icon={faCcVisa} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className=" d-flex flex-column">
                <p>Important Links</p>
                <ul className="list-unstyled">
                  <li>Return Policy</li>
                  <li>Privacy Policy</li>
                  <li>Trems & Conditions</li>
                  <li>Warranty</li>
                  <li>Sell on Highlife</li>
                  <li>Highlife For Business</li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className=" d-flex flex-column">
                <p>Need Help</p>
                <p className="d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Hello&#64;HighLife.com
                </p>
                <div className="followUs">
                  <p>Follow Us</p>
                  <div className="d-flex gap-3">
                    <span>
                      <FontAwesomeIcon
                        className="fs-2"
                        icon={faSquareFacebook}
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        className="fs-2 ins"
                        icon={faSquareInstagram}
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon className="fs-2" icon={faLinkedin} />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        className="fs-2"
                        icon={faSquareBehance}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-3 mt-1">
              <div className=" d-flex flex-column ms-1">
                <p>Location</p>
                <ul className="locations list-unstyled text-decoration-underline">
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faLocationDot} /> NewCairo
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faLocationDot} /> Octobar
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faLocationDot} /> Mansoura
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faLocationDot} /> Alexandria
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faLocationDot} /> Alameen
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faLocationDot} /> Marassi
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 d-flex justify-content-center">
              <div className="copyRight">
                <p> &copy; 2024 All Rights Reserved </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
